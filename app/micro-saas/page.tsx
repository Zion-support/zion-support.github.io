import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Shield, Cloud, Brain, Zap, Code, Database, ArrowRight, Star, CheckCircle } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const MicroSaaSPage = () => {
  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time analytics and predictive insights",
      price: "From $29/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"],
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $49/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: ["AI Threat Detection", "Automated Response", "24/7 Monitoring", "Compliance Reports"],
      link: "/zion-security-shield",
      featured: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with enterprise-grade encryption and backup",
      price: "From $9/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Enterprise Encryption", "Automated Backup", "File Sharing", "Version Control"],
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform for marketing teams",
      price: "From $39/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: ["AI Content Generation", "Brand Voice Training", "Multi-format Support", "Team Collaboration"],
      link: "/zion-content-studio"
    },
    {
      name: "Zion Data Sync",
      description: "Seamless data synchronization across multiple platforms and databases",
      price: "From $19/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      features: ["Real-time Sync", "Multiple Integrations", "Data Validation", "Conflict Resolution"],
      link: "/zion-data-sync"
    },
    {
      name: "Zion Lead Magnet",
      description: "Lead generation and nurturing platform with automated email sequences",
      price: "From $24/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Lead Scoring", "Email Automation", "CRM Integration", "A/B Testing"],
      link: "/zion-lead-magnet"
    },
    {
      name: "Zion Project Master",
      description: "Project management and team collaboration with AI-powered insights",
      price: "From $34/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["Task Management", "Team Collaboration", "AI Insights", "Resource Planning"],
      link: "/zion-project-master"
    },
    {
      name: "Zion Email Automation",
      description: "Advanced email marketing automation with personalization and analytics",
      price: "From $29/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Email Automation", "Personalization", "Analytics Dashboard", "Template Library"],
      link: "/zion-email-automation"
    }
  ];

  const benefits = [
    {
      title: "Ready to Deploy",
      description: "All solutions are pre-configured and ready for immediate deployment",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to scale with your business from startup to enterprise",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Regular Updates",
      description: "Continuous feature updates and security patches",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our comprehensive suite of micro SAAS solutions. From analytics to security, get enterprise-grade software solutions ready for immediate deployment."
        keywords="micro saas, software solutions, business automation, analytics, security, cloud storage, content management, project management"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools ready to deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular solutions trusted by thousands of businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                    {product.featured && (
                      <div className="flex items-center mt-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs text-yellow-400">Featured</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with enterprise-grade technology, designed for immediate deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency. 
            Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaSPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Post-Migration Support"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Build and manage scalable cloud infrastructure tailored to your business needs",
      features: ["Auto-scaling", "Load Balancing", "Container Orchestration", "Monitoring & Alerting"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment",
      features: ["Identity & Access Management", "Data Encryption", "Threat Detection", "Compliance Management"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Services",
      description: "Managed database solutions for optimal performance and reliability",
      features: ["Database Migration", "Performance Optimization", "Backup & Recovery", "24/7 Monitoring"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DevOps & CI/CD",
      description: "Streamline your development and deployment processes with cloud-native tools",
      features: ["Continuous Integration", "Automated Deployment", "Infrastructure as Code", "Monitoring & Logging"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Deliver content faster worldwide with our global content delivery network",
      features: ["Edge Caching", "DDoS Protection", "SSL/TLS Encryption", "Real-time Analytics"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud services",
      features: [
        "Basic cloud infrastructure",
        "Email support",
        "Standard monitoring",
        "Monthly backups",
        "Up to 5 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced cloud requirements",
      features: [
        "Advanced cloud infrastructure",
        "Priority support",
        "Advanced monitoring & alerting",
        "Daily backups",
        "Up to 25 users",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex cloud infrastructure needs",
      features: [
        "Enterprise cloud infrastructure",
        "24/7 dedicated support",
        "Custom monitoring solutions",
        "Real-time backups",
        "Unlimited users",
        "White-label solutions",
        "Custom SLA agreements"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Cloud Regions", icon: <Globe className="w-6 h-6" /> },
    { number: "1000+", label: "Projects Deployed", icon: <Server className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Scalable Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services. Migration, infrastructure, security, and DevOps solutions for modern enterprises." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, DevOps, AWS, Azure, Google Cloud, cloud consulting" />
        <meta property="og:title" content="Cloud Services - Scalable Cloud Solutions | Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive cloud services. Migration, infrastructure, security, and DevOps solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-cloud-services.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cloud Services - Scalable Cloud Solutions | Zion Tech Group" />
        <meta name="twitter:description" content="Transform your business with our comprehensive cloud services. Migration, infrastructure, security, and DevOps solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-cloud-services.jpg" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SEOOptimizer
          title="Cloud Services - Comprehensive Cloud Solutions | Zion Tech Group"
          description="Transform your business with our comprehensive cloud services. Features migration, infrastructure, security, DevOps, and database solutions. Starting at $299/month."
          keywords="cloud services, cloud migration, cloud infrastructure, cloud security, DevOps, AWS, Azure, Google Cloud, cloud consulting, database services, CDN"
          canonical="https://ziontechgroup.com/cloud-services"
        />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden quantum-field holographic-grid">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 Cloud Services Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-cyberpunk neon-advanced">
                Cloud Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud solutions. 
              From migration to management, we provide everything you need to succeed in the cloud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="btn-quantum hover-quantum flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="holographic-card border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
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

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 plasma-effect">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-cyberpunk">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive cloud solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-6 group"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 pulse-glow">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-cyberpunk">
                Cloud Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the cloud services plan that matches your business requirements and growth goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`holographic-card hover-quantum p-8 relative ${
                    plan.popular ? 'border-cyan-500/50' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold neon-advanced">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'btn-quantum hover-quantum'
                        : 'holographic-card border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 holographic-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-cyberpunk">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our cloud services to scale, secure, and optimize their operations. 
              Start your cloud transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-quantum hover-quantum flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="holographic-card border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
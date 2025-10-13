import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Zap, Brain, Shield, Globe, BarChart3 } from 'lucide-react';

export default function MicroSaasServices() {
  const microSaasServices = [
    {
      id: "zion-ai-analytics-pro",
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $299/month",
      features: [
        "Real-time Analytics Dashboard",
        "Predictive Modeling & Forecasting",
        "Automated Report Generation",
        "Custom Data Visualization",
        "API Integration",
        "24/7 Support"
      ],
      link: "/zion-analytics-pro"
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution with threat detection, vulnerability scanning, and automated incident response.",
      icon: <Shield className="w-8 h-8" />,
      price: "From $199/month",
      features: [
        "Real-time Threat Detection",
        "Vulnerability Assessment",
        "Automated Incident Response",
        "Compliance Monitoring",
        "Security Training Modules",
        "24/7 Security Monitoring"
      ],
      link: "/zion-security-shield"
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and collaboration platform with advanced encryption, file sharing, and team management features.",
      icon: <Globe className="w-8 h-8" />,
      price: "From $149/month",
      features: [
        "End-to-End Encryption",
        "Team Collaboration Tools",
        "Version Control",
        "Advanced File Sharing",
        "Mobile Access",
        "99.9% Uptime Guarantee"
      ],
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.",
      icon: <Brain className="w-8 h-8" />,
      price: "From $99/month",
      features: [
        "AI Content Generation",
        "Multi-format Support",
        "Brand Voice Training",
        "SEO Optimization",
        "Content Calendar",
        "Performance Analytics"
      ],
      link: "/zion-content-studio"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Deployment",
      description: "Get up and running in minutes, not months. Our micro SAAS solutions are ready to use immediately."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Setup Required",
      description: "Skip the complex installation and configuration. Everything is pre-configured and optimized for your business."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Leverage cutting-edge AI technology to automate tasks and improve efficiency across your organization."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, compliance, and monitoring to protect your sensitive data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions for immediate business transformation. AI-powered tools for analytics, security, content, and collaboration." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No setup required, no complex configurations - just powerful tools that work out of the box.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {microSaasServices.map((service) => (
            <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:gap-3"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our range of micro SAAS solutions and start seeing results immediately. 
            No setup, no configuration - just powerful tools that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
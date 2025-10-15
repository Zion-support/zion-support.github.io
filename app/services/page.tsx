import React from 'react';
import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Smartphone as Phone, Laptop, Headphones, CheckCircle, Star, Award, Rocket, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from '../components/SEOHead';

export default function Services() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "AI Content"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Real-time Monitoring", "Automated Response", "Compliance Reporting", "Threat Intelligence", "Incident Management", "Security Analytics"],
      category: "AI Security"
    },
    {
      title: "AI Cloud Infrastructure Manager",
      description: "Intelligent cloud resource management with automated scaling, cost optimization, and performance monitoring. Reduce cloud costs by up to 40% while improving performance.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/ai-cloud-infrastructure",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Auto-scaling", "Cost Optimization", "Performance Monitoring", "Multi-cloud Support", "Resource Planning", "Disaster Recovery"],
      category: "AI Cloud"
    },
    {
      title: "AI Mobile App Development Suite",
      description: "Build intelligent mobile applications with AI-powered features. Cross-platform development with machine learning integration and real-time analytics.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/ai-mobile-development",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Cross-platform", "ML Integration", "Real-time Analytics", "Push Notifications", "Offline Support", "App Store Optimization"],
      category: "AI Mobile"
    }
  ];

  const categories = ["All", "AI Analytics", "AI Customer Service", "AI Content", "AI Security", "AI Cloud", "AI Mobile"];

  return (
    <>
      <Helmet>
        <title>AI & IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including business intelligence, customer support automation, content generation, cybersecurity, and cloud infrastructure." />
        <meta name="keywords" content="AI services, IT services, business intelligence, customer support, content generation, cybersecurity, cloud infrastructure" />
      </Helmet>
      <SEOHead 
        title="AI & IT Services - Zion Tech Group"
        description="Comprehensive AI and IT services including business intelligence, customer support automation, content generation, cybersecurity, and cloud infrastructure."
        keywords="AI services, IT services, business intelligence, customer support, content generation, cybersecurity, cloud infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive suite of AI-powered solutions. 
                From business intelligence to cybersecurity, we provide cutting-edge technology 
                to drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of AI and IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{service.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
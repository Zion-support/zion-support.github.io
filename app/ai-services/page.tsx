import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, BarChart3, Bot, Shield, Code, Zap, Users } from "lucide-react";

export default function AIServices() {
  const services = [
    {
      title: "AI Analytics Dashboard",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics-dashboard-pro",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-content-generator",
      featured: true
    },
    {
      title: "AI Cybersecurity Suite",
      description: "Protect your business with AI-powered security monitoring and threat detection.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      featured: true
    },
    {
      title: "AI Customer Support",
      description: "Deploy intelligent chatbots and automated customer service solutions.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support-chatbot"
    },
    {
      title: "AI Code Assistant",
      description: "Accelerate development with AI-powered code generation and assistance.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant-pro"
    },
    {
      title: "AI Business Intelligence",
      description: "Make data-driven decisions with our comprehensive BI platform.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-business-intelligence-pro"
    }
  ];

  const categories = [
    {
      title: "Analytics & Intelligence",
      description: "AI-powered data analysis and business intelligence solutions",
      services: ["AI Analytics", "Business Intelligence", "Predictive Analytics", "Data Visualization"]
    },
    {
      title: "Content & Marketing",
      description: "AI-driven content creation and marketing automation tools",
      services: ["Content Generation", "Email Marketing", "Social Media", "SEO Optimization"]
    },
    {
      title: "Customer Experience",
      description: "Enhance customer interactions with AI-powered solutions",
      services: ["Chatbots", "Customer Support", "Personalization", "Sentiment Analysis"]
    },
    {
      title: "Security & Compliance",
      description: "Protect your business with AI-enhanced security solutions",
      services: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Risk Assessment"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI services including analytics, content generation, cybersecurity, and customer support solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                Our comprehensive AI solutions drive innovation and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our most popular AI solutions trusted by businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 group ${
                  service.featured 
                    ? 'border-purple-500/40 hover:border-purple-500/60' 
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  service.featured ? 'text-purple-400' : 'text-cyan-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.path}
                  className={`font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300 ${
                    service.featured 
                      ? 'text-purple-400 hover:text-purple-300' 
                      : 'text-cyan-400 hover:text-cyan-300'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions organized by business function
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proven expertise and cutting-edge technology for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert AI Team",
                description: "Our team of AI specialists brings years of experience in machine learning and data science."
              },
              {
                title: "Custom Solutions",
                description: "Tailored AI solutions designed specifically for your business needs and objectives."
              },
              {
                title: "Proven Results",
                description: "Track record of delivering measurable improvements in efficiency and performance."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how our AI services can revolutionize your operations and drive growth.
              </p>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
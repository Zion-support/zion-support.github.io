import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Brain, Shield, Zap, BarChart3 } from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", description: "Zion Tech Group homepage" },
    { name: "About Us", path: "/about", description: "Learn about our company and mission" },
    { name: "Services", path: "/services", description: "Our comprehensive AI and IT services" },
    { name: "AI Services", path: "/ai-services", description: "Advanced artificial intelligence solutions" },
    { name: "Micro SAAS", path: "/micro-saas", description: "Ready-to-use business software solutions" },
    { name: "5G Solutions", path: "/5g-solutions", description: "Next-generation 5G technology solutions" },
    { name: "Team", path: "/team", description: "Meet our expert team" },
    { name: "Careers", path: "/careers", description: "Join our growing team" },
    { name: "Case Studies", path: "/case-studies", description: "Success stories and client projects" },
    { name: "Blog", path: "/blog", description: "Latest insights and technology news" },
    { name: "Contact", path: "/contact", description: "Get in touch with us" },
    { name: "Pricing", path: "/pricing", description: "Transparent pricing for all services" },
    { name: "Demo", path: "/demo", description: "See our solutions in action" },
    { name: "Support", path: "/support", description: "Get help and support" },
    { name: "Consultation", path: "/consultation", description: "Free consultation with our experts" }
  ];

  const aiServices = [
    { name: "AI Analytics Dashboard Pro", path: "/ai-analytics-dashboard-pro" },
    { name: "AI Cybersecurity Suite Pro", path: "/ai-cybersecurity-suite-pro" },
    { name: "AI Content Generation Pro", path: "/ai-content-generation-pro" },
    { name: "AI Customer Support Chatbot", path: "/ai-customer-support-chatbot" },
    { name: "AI Code Assistant Pro", path: "/ai-code-assistant-pro" },
    { name: "AI Business Intelligence Pro", path: "/ai-business-intelligence-pro" },
    { name: "AI Automation Platform", path: "/ai-automation-platform" },
    { name: "AI Data Analytics Pro", path: "/ai-data-analytics-pro" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI HR & Recruitment Pro", path: "/ai-hr-recruitment-pro" },
    { name: "AI Financial Analysis", path: "/ai-financial-analysis" },
    { name: "AI Supply Chain Optimizer", path: "/ai-supply-chain-optimizer" },
    { name: "AI Voice Assistant Pro", path: "/ai-voice-assistant-pro" },
    { name: "AI Image Recognition Pro", path: "/ai-image-recognition-pro" },
    { name: "AI Predictive Maintenance", path: "/ai-predictive-maintenance" },
    { name: "AI Sentiment Analysis Pro", path: "/ai-sentiment-analysis-pro" },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine" },
    { name: "AI Fraud Detection Pro", path: "/ai-fraud-detection-pro" },
    { name: "AI Language Translation", path: "/ai-language-translation" },
    { name: "AI Chatbot Enterprise", path: "/ai-chatbot-enterprise" }
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion AI Inventory Manager", path: "/zion-ai-inventory-manager" },
    { name: "Zion HR Assistant Pro", path: "/zion-hr-assistant-pro" },
    { name: "Zion AI Accounting Suite", path: "/zion-ai-accounting-suite" },
    { name: "Zion E-commerce Optimizer", path: "/zion-ecommerce-optimizer" },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "Zion AI Lead Scoring", path: "/zion-ai-lead-scoring" },
    { name: "Zion AI Document Processor", path: "/zion-ai-document-processor" },
    { name: "Zion AI Social Listener", path: "/zion-ai-social-listener" },
    { name: "Zion AI Email Optimizer", path: "/zion-ai-email-optimizer" },
    { name: "Zion AI Meeting Assistant", path: "/zion-ai-meeting-assistant" },
    { name: "Zion AI Expense Tracker", path: "/zion-ai-expense-tracker" },
    { name: "Zion AI Survey Builder", path: "/zion-ai-survey-builder" },
    { name: "Zion AI Chatbot Builder", path: "/zion-ai-chatbot-builder" },
    { name: "Zion AI Workflow Automation", path: "/zion-ai-workflow-automation" },
    { name: "Zion AI SEO Optimizer", path: "/zion-ai-seo-optimizer" },
    { name: "Zion AI Data Warehouse", path: "/zion-ai-data-warehouse" },
    { name: "Zion AI Mobile App Builder", path: "/zion-ai-mobile-app-builder" }
  ];

  const fiveGServices = [
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G Implementation", path: "/5g-implementation" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" }
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Website Directory</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, micro SAAS solutions, 5G technology, and company information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through our complete website directory. Find all our AI services, micro SAAS solutions, 5G technology, and company information.
            </p>
          </div>
        </div>

        {/* Main Pages */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                Main Pages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 mr-3 text-purple-400" />
                AI Services
              </h2>
              <p className="text-gray-300">Advanced artificial intelligence solutions for every business need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Micro SAAS Services */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                Micro SAAS Solutions
              </h2>
              <p className="text-gray-300">Ready-to-use business software solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-yellow-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 5G Solutions */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-cyan-400" />
                5G Solutions
              </h2>
              <p className="text-gray-300">Next-generation 5G technology solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fiveGServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Pages */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 mr-3 text-gray-400" />
                Legal & Policies
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-lg font-semibold group-hover:text-gray-300 transition-colors">
                      {page.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Contact us and we'll help you navigate to the right page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/support"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

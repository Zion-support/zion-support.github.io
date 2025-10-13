import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Brain, Shield, Zap, Cloud } from "lucide-react";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
    { name: "About", path: "/about", description: "Learn about our company" },
    { name: "Services", path: "/services", description: "Our comprehensive services" },
    { name: "Pricing", path: "/pricing", description: "Transparent pricing plans" },
    { name: "Case Studies", path: "/case-studies", description: "Success stories" },
    { name: "Blog", path: "/blog", description: "Latest insights and trends" },
    { name: "Contact", path: "/contact", description: "Get in touch with us" },
    { name: "Consultation", path: "/consultation", description: "Free technology consultation" },
    { name: "Demo", path: "/demo", description: "See our solutions in action" }
  ];

  const aiServices = [
    { name: "AI Analytics Dashboard", path: "/ai-analytics-dashboard-pro" },
    { name: "AI Content Generator", path: "/ai-content-generator" },
    { name: "AI Cybersecurity Suite", path: "/ai-cybersecurity-suite-pro" },
    { name: "AI Customer Support", path: "/ai-customer-support-chatbot" },
    { name: "AI Code Assistant", path: "/ai-code-assistant-pro" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence-pro" },
    { name: "AI Marketing Automation", path: "/ai-marketing" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "Database Management", path: "/database-management" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "Network Infrastructure", path: "/network-infrastructure" },
    { name: "Cloud Native Development", path: "/cloud-native-development" }
  ];

  const microSaas = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
    { name: "Zion Content Studio", path: "/zion-content-studio" },
    { name: "Zion Data Sync", path: "/zion-data-sync" },
    { name: "Zion Lead Magnet", path: "/zion-lead-magnet" },
    { name: "Zion Project Master", path: "/zion-project-master" },
    { name: "Zion Email Automation", path: "/zion-email-automation" }
  ];

  const fiveGServices = [
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G Implementation", path: "/5g-implementation" },
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
        <title>Sitemap - Zion Tech Group | Complete Website Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, micro SAAS products, and 5G solutions." />
        <meta name="keywords" content="sitemap, website navigation, AI services, IT solutions, micro SAAS, 5G solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Website Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site map.
            </p>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                Main Pages
              </h2>
              <p className="text-gray-300">Core pages of our website</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Visit Page</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 mr-3 text-cyan-400" />
                AI Services
              </h2>
              <p className="text-gray-300">Artificial Intelligence solutions and services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 mr-3 text-cyan-400" />
                IT Services
              </h2>
              <p className="text-gray-300">Information Technology solutions and infrastructure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-3 text-cyan-400" />
                Micro SAAS Solutions
              </h2>
              <p className="text-gray-300">Ready-to-use software solutions for immediate deployment</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {microSaas.map((saas, index) => (
                <Link
                  key={index}
                  to={saas.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {saas.name}
                  </h3>
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <Cloud className="w-8 h-8 mr-3 text-cyan-400" />
                5G Solutions
              </h2>
              <p className="text-gray-300">Next-generation connectivity and infrastructure services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fiveGServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Legal & Policies</h2>
              <p className="text-gray-300">Important legal information and policies</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <div className="flex items-center justify-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm">Read Policy</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

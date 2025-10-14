import React from "react";



import { Helmet } from "react-helmet-async";



import { Link } from "react-router-dom";



import { Map, Globe, ArrowRight, Brain, Shield, Zap, Network } from "lucide-react";




export default function SitemapPage() {
  const mainPages = [
    { name: "Home", path: "/", description: "Zion Tech Group homepage" },
    { name: "About", path: "/about", description: "Learn about our company and mission" },
    { name: "Services", path: "/services", description: "Our comprehensive AI and IT services" },
    { name: "Contact", path: "/contact", description: "Get in touch with our team" },
    { name: "Blog", path: "/blog", description: "Latest insights and technology trends" },
    { name: "Privacy Policy", path: "/privacy", description: "How we protect your data" },
    { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
  ];

  const aiServices = [
    { name: "AI Analytics", path: "/ai-analytics", description: "Advanced AI-powered analytics solutions" },
    { name: "AI Automation", path: "/ai-automation", description: "Intelligent process automation" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence", description: "Data-driven business insights" },
    { name: "AI Content Generation", path: "/ai-content-generation", description: "AI-powered content creation" },
    { name: "AI Customer Service", path: "/ai-customer-service", description: "Intelligent customer support" },
    { name: "AI Data Analytics", path: "/ai-data-analytics", description: "Advanced data analysis with AI" },
    { name: "AI Email Automation", path: "/ai-email-automation", description: "Smart email marketing automation" },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection", description: "AI-powered fraud prevention" },
    { name: "AI Healthcare", path: "/ai-healthcare", description: "Healthcare AI solutions" },
    { name: "AI Marketing", path: "/ai-marketing", description: "AI-driven marketing strategies" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics", description: "Predictive modeling and forecasting" },
    { name: "AI Project Management", path: "/ai-project-management", description: "Intelligent project management tools" },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine", description: "Personalized recommendation systems" },
    { name: "AI Sales Automation", path: "/ai-sales-automation", description: "Automated sales processes" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation", description: "End-to-end workflow automation" },
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", description: "Scalable cloud solutions" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", description: "Comprehensive security services" },
    { name: "Web Development", path: "/web-development", description: "Modern web applications" },
    { name: "Mobile Development", path: "/mobile-development", description: "iOS and Android apps" },
    { name: "Database Management", path: "/database-management", description: "Database design and optimization" },
    { name: "Custom Software", path: "/custom-software", description: "Tailored software solutions" },
    { name: "Network Infrastructure", path: "/network-infrastructure", description: "Network design and implementation" },
  ];

  const microSaas = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", description: "Advanced analytics platform" },
    { name: "Zion Security Shield", path: "/zion-security-shield", description: "Comprehensive security suite" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", description: "Secure cloud storage solution" },
    { name: "Zion Content Studio", path: "/zion-content-studio", description: "AI-powered content creation" },
  ];

  const fiveGServices = [
    { name: "5G Solutions", path: "/5g-solutions", description: "Comprehensive 5G implementation" },
    { name: "5G Data Analytics", path: "/5g-data-analytics", description: "5G-powered data analysis" },
    { name: "5G Edge Computing", path: "/5g-edge-computing", description: "Edge computing with 5G" },
    { name: "5G Implementation", path: "/5g-implementation", description: "5G network deployment" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", description: "5G-optimized mobile apps" },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", description: "5G network design and setup" },
    { name: "5G Private Networks", path: "/5g-private-networks", description: "Private 5G network solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", description: "Smart city 5G implementations" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions", description: "5G-powered IoT applications" },
  ];

  return (
    <Helmet
  );
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." /
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, Zion Tech Group" /
        <meta property="og:title" content="Sitemap - Zion Tech Group" /
        <meta property="og:description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." /
        <meta property="og:type" content="website" /
      </Helmet>>>>>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">>>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">>>
          {/* Header */};
          <div className="text-center mb-16">>>
            <div className="flex items-center justify-center mb-6">>>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">>>
                <Map className="w-8 h-8 text-white"/
              </div
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">>>
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"Map</h1
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">>>
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for.
            </div

          {/* Main Pages */};
          <div className="mb-16">>>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">>>
              </Map<Globe className="w-8 h-8 mr-3 text-cyan-400"/
              Main Pages
            </h2
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">>>
              {mainPages.map((page) = (
                </Globe<Link
                  key={page.path};
                  to={page.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">>>
                  <div className="flex items-start justify-between">>>
                    <div className="flex-1">>>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">>>
                        {page.name};
                      </h3
                      <p className="text-gray-300 text-sm">>>
                        {page.description};
                      </div
                    </Link
<ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/
                  </Link>>>>>;
              ))};
            </div

          {/* AI Services */};
          <div className="mb-16">>>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">>>
              </ArrowRight<Brain className="w-8 h-8 mr-3 text-cyan-400"/
              AI Services
            </h2
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">>>
              {aiServices.map((service) = (
                </Brain<Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">>>
                  <div className="flex items-start justify-between">>>
                    <div className="flex-1">>>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">>>
                        {service.name};
                      </h3
                      <p className="text-gray-300 text-sm">>>
                        {service.description};
                      </div
                    </Link
<ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/
                  </Link>>>>>;
              ))};
            </div

          {/* IT Services */};
          <div className="mb-16">>>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">>>
              </ArrowRight<Shield className="w-8 h-8 mr-3 text-cyan-400"/
              IT Services
            </h2
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">>>
              {itServices.map((service) = (
                </Shield<Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">>>
                  <div className="flex items-start justify-between">>>
                    <div className="flex-1">>>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">>>
                        {service.name};
                      </h3
                      <p className="text-gray-300 text-sm">>>
                        {service.description};
                      </div
                    </Link
<ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/
                  </Link>>>>>;
              ))};
            </div

          {/* Micro SAAS */};
          <div className="mb-16">>>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">>>
              </ArrowRight<Zap className="w-8 h-8 mr-3 text-cyan-400"/
              Micro SAAS Solutions
            </h2
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">>>
              {microSaas.map((service) = (
                </Zap<Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">>>
                  <div className="flex items-start justify-between">>>
                    <div className="flex-1">>>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">>>
                        {service.name};
                      </h3
                      <p className="text-gray-300 text-sm">>>
                        {service.description};
                      </div
                    </Link
<ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/
                  </Link>>>>>;
              ))};
            </div

          {/* 5G Services */};
          <div className="mb-16">>>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">>>
              </ArrowRight<Network className="w-8 h-8 mr-3 text-cyan-400"/
              5G Solutions
            </h2
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">>>
              {fiveGServices.map((service) = (
                </Network<Link
                  key={service.path};
                  to={service.path};
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">>>
                  <div className="flex items-start justify-between">>>
                    <div className="flex-1">>>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">>>
                        {service.name};
                      </h3
                      <p className="text-gray-300 text-sm">>>
                        {service.description};
                      </div
                    </Link
<ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"/
                  </Link>>>>>;
              ))};
            </div

          {/* Search Box */};
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">>>
            <h3 className="text-2xl font-bold text-white mb-4">>>
              Can't Find What You're Looking For?
            </h3
            <p className="text-gray-300 mb-6">>>Use our search functionality or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">>>
              </ArrowRight<Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">>>
                Contact Us
                </Link
<ArrowRight className="w-4 h-4"/
              </Link>>>>>;
<ink
                to="/services"className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">>>
                Browse All Services
                </ArrowRight<ArrowRight className="w-4 h-4"/
              </Link>>>>>;
            </
  );
};</ArrowRight
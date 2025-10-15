import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Home, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  FileText, 
  Mail, 
  ArrowRight,
  ExternalLink,
  Search,
  Layers
} from "lucide-react";

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-6 h-6" />,
      links: [
        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Portfolio", url: "/portfolio", description: "View our work and projects" },
        { name: "Blog", url: "/blog", description: "Latest insights and news" },
        { name: "Demo", url: "/demo", description: "See our solutions in action" },
        { name: "Support", url: "/support", description: "Get help and assistance" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      links: [
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "AI Analytics", url: "/ai-analytics", description: "Data-driven insights with AI" },
        { name: "AI Content Generation", url: "/ai-content-generation", description: "Automated content creation" },
        { name: "AI Customer Support", url: "/ai-customer-support", description: "Intelligent customer service" },
        { name: "AI Cybersecurity", url: "/ai-cybersecurity", description: "AI-powered security solutions" },
        { name: "AI Data Analytics", url: "/ai-data-analytics", description: "Advanced data analysis" },
        { name: "AI Document Processing", url: "/ai-document-processing", description: "Automated document handling" },
        { name: "AI Marketing Automation", url: "/ai-marketing-automation", description: "Smart marketing campaigns" },
        { name: "AI Predictive Analytics", url: "/ai-predictive-analytics", description: "Future trend predictions" },
        { name: "AI Voice Assistant", url: "/ai-voice-assistant", description: "Intelligent voice interfaces" },
        { name: "AI Workflow Automation", url: "/ai-workflow-automation", description: "Streamlined business processes" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-6 h-6" />,
      links: [
        { name: "IT Services Overview", url: "/services", description: "Complete IT solutions" },
        { name: "Cloud Migration", url: "/cloud-migration", description: "Seamless cloud transition" },
        { name: "DevOps Services", url: "/devops-services", description: "Development and operations" },
        { name: "Web Development", url: "/web-development", description: "Custom web applications" },
        { name: "IT Consulting", url: "/it-consulting", description: "Strategic technology guidance" },
        { name: "Network Security", url: "/network-security", description: "Secure network infrastructure" },
        { name: "Software Development", url: "/software-development", description: "Custom software solutions" },
        { name: "System Integration", url: "/system-integration", description: "Unified system solutions" },
        { name: "Cloud Consulting", url: "/cloud-consulting", description: "Cloud strategy and planning" },
        { name: "Data Center Solutions", url: "/data-center-solutions", description: "Enterprise data management" },
        { name: "Disaster Recovery", url: "/disaster-recovery", description: "Business continuity planning" },
        { name: "IT Support", url: "/it-support", description: "24/7 technical assistance" },
        { name: "Managed Services", url: "/managed-services", description: "Comprehensive IT management" },
        { name: "Security Audit", url: "/security-audit", description: "Comprehensive security assessment" },
        { name: "Technology Consulting", url: "/technology-consulting", description: "Technology strategy consulting" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: <Zap className="w-6 h-6" />,
      links: [
        { name: "Micro SAAS Overview", url: "/micro-saas", description: "Ready-to-use software solutions" },
        { name: "Zion AI Video Generator", url: "/zion-ai-video-generator", description: "AI-powered video creation" },
        { name: "Zion AI Invoice Generator", url: "/zion-ai-invoice-generator", description: "Automated invoice generation" },
        { name: "Zion AI CRM Pro", url: "/zion-ai-crm-pro", description: "Intelligent customer management" },
        { name: "Zion AI Voice Assistant Pro", url: "/zion-ai-voice-assistant-pro", description: "Advanced voice AI" },
        { name: "Zion AI Code Reviewer", url: "/zion-ai-code-reviewer", description: "Automated code analysis" },
        { name: "Zion AI Contract Analyzer", url: "/zion-ai-contract-analyzer", description: "Smart contract review" },
        { name: "Zion AI Supply Chain Optimizer", url: "/zion-ai-supply-chain-optimizer", description: "Supply chain intelligence" },
        { name: "Zion AI Translator Pro", url: "/zion-ai-translator-pro", description: "Advanced translation services" },
        { name: "Zion AI Data Cleaner", url: "/zion-ai-data-cleaner", description: "Data quality management" },
        { name: "Project Management Tool", url: "/project-management-tool", description: "Advanced project tracking" },
        { name: "Customer Relationship Manager", url: "/customer-relationship-manager", description: "CRM solutions" },
        { name: "Inventory Management System", url: "/inventory-management-system", description: "Smart inventory tracking" },
        { name: "Financial Reporting Tool", url: "/financial-reporting-tool", description: "Automated financial reports" },
        { name: "Employee Time Tracker", url: "/employee-time-tracker", description: "Time and attendance management" },
        { name: "Social Media Scheduler", url: "/social-media-scheduler", description: "Content scheduling automation" },
        { name: "Email Marketing Platform", url: "/email-marketing-platform", description: "Email campaign management" },
        { name: "Website Analytics Tool", url: "/website-analytics-tool", description: "Website performance insights" },
        { name: "Task Automation Workflow", url: "/task-automation-workflow", description: "Workflow automation" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-6 h-6" />,
      links: [
        { name: "5G Solutions Overview", url: "/5g-solutions", description: "Next-generation connectivity" },
        { name: "5G Network Infrastructure", url: "/5g-network-infrastructure", description: "5G network deployment" },
        { name: "5G Edge Computing", url: "/5g-edge-computing", description: "Edge computing solutions" },
        { name: "5G IoT Solutions", url: "/5g-iot-solutions", description: "Internet of Things connectivity" },
        { name: "5G Smart City Solutions", url: "/5g-smart-city-solutions", description: "Smart city infrastructure" },
        { name: "5G Private Networks", url: "/5g-private-networks", description: "Private 5G networks" },
        { name: "5G Mobile Applications", url: "/5g-mobile-applications", description: "5G-enabled mobile apps" },
        { name: "5G Data Analytics", url: "/5g-data-analytics", description: "5G data insights" },
        { name: "5G Implementation", url: "/5g-implementation", description: "5G deployment services" }
      ]
    },
    {
      title: "Company & Resources",
      icon: <Users className="w-6 h-6" />,
      links: [
        { name: "Our Team", url: "/team", description: "Meet our experts" },
        { name: "Careers", url: "/careers", description: "Join our team" },
        { name: "Case Studies", url: "/case-studies", description: "Success stories" },
        { name: "Documentation", url: "/docs", description: "Technical documentation" },
        { name: "Tutorials", url: "/tutorials", description: "Learning resources" },
        { name: "Privacy Policy", url: "/privacy", description: "Data protection policy" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage policy" },
        { name: "Sitemap", url: "/sitemap", description: "Site navigation" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", url: "/contact", icon: <ArrowRight className="w-4 h-4" /> },
    { name: "View Demo", url: "/demo", icon: <ExternalLink className="w-4 h-4" /> },
    { name: "Contact Support", url: "/support", icon: <Mail className="w-4 h-4" /> },
    { name: "Search", url: "/search", icon: <Search className="w-4 h-4" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, micro SAAS products, and company information in one place." />
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, micro SAAS, 5G technology, company information" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete navigation guide to all our services and solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Map</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Navigate through all our services, solutions, and resources. Find exactly what you're looking for 
                with our comprehensive site map.
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Layers className="w-6 h-6" />
                <span className="text-lg font-semibold">Complete Navigation Guide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                    </div>
                    <span className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Complete Site Map</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore all our services, solutions, and resources organized by category
              </p>
            </div>
            <div className="space-y-12">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-white">{section.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        to={link.url}
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {link.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Use our search functionality or contact our team for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/support"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;
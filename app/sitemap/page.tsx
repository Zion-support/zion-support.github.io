import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const SitemapPage = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "AI Services",
      links: [
        { name: "AI Services Overview", path: "/ai-services" },
        { name: "AI Analytics", path: "/ai-analytics" },
        { name: "AI Automation", path: "/ai-automation" },
        { name: "AI Content Generation", path: "/ai-content-generation" },
        { name: "AI Customer Service", path: "/ai-customer-service" },
        { name: "AI Marketing", path: "/ai-marketing" },
        { name: "AI Healthcare", path: "/ai-healthcare" },
        { name: "AI Fraud Detection", path: "/ai-fraud-detection" },
        { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
        { name: "AI Project Management", path: "/ai-project-management" },
        { name: "AI Recommendation Engine", path: "/ai-recommendation-engine" },
        { name: "AI Sales Automation", path: "/ai-sales-automation" },
        { name: "AI Workflow Automation", path: "/ai-workflow-automation" }
      ]
    },
    {
      title: "IT Solutions",
      links: [
        { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
        { name: "Web Development", path: "/web-development" },
        { name: "Mobile Development", path: "/mobile-development" },
        { name: "Database Management", path: "/database-management" },
        { name: "Custom Software", path: "/custom-software" },
        { name: "Network Infrastructure", path: "/network-infrastructure" },
        { name: "Cloud Native Development", path: "/cloud-native-development" },
        { name: "Blockchain Development", path: "/blockchain-development" },
        { name: "E-commerce Development", path: "/e-commerce-development" },
        { name: "Data Engineering", path: "/data-engineering" },
        { name: "Machine Learning", path: "/machine-learning" },
        { name: "Quantum Computing", path: "/quantum-computing" },
        { name: "Robotics", path: "/robotics" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      links: [
        { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
        { name: "Zion Security Shield", path: "/zion-security-shield" },
        { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
        { name: "Zion Content Studio", path: "/zion-content-studio" },
        { name: "Zion Data Sync", path: "/zion-data-sync" },
        { name: "Zion Lead Magnet", path: "/zion-lead-magnet" },
        { name: "Zion Project Master", path: "/zion-project-master" },
        { name: "Zion Email Automation", path: "/zion-email-automation" },
        { name: "Zion Social Scheduler", path: "/zion-social-scheduler" },
        { name: "Zion Workflow Automation", path: "/zion-workflow-automation" },
        { name: "Zion Invoice Genius", path: "/zion-invoice-genius" },
        { name: "Zion Inventory Smart", path: "/zion-inventory-smart" },
        { name: "Zion Compliance Manager", path: "/zion-compliance-manager" },
        { name: "Zion Performance Monitor", path: "/zion-performance-monitor" }
      ]
    },
    {
      title: "5G Solutions",
      links: [
        { name: "5G Solutions Overview", path: "/5g-solutions" },
        { name: "5G Data Analytics", path: "/5g-data-analytics" },
        { name: "5G Edge Computing", path: "/5g-edge-computing" },
        { name: "5G Implementation", path: "/5g-implementation" },
        { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
        { name: "5G Private Networks", path: "/5g-private-networks" },
        { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" }
      ]
    },
    {
      title: "Support & Resources",
      links: [
        { name: "Support Center", path: "/support" },
        { name: "Free Consultation", path: "/consultation" },
        { name: "Schedule Demo", path: "/demo" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api-docs" },
        { name: "Status Page", path: "/status" },
        { name: "Community Forum", path: "/community" }
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" },
        { name: "Data Processing Agreement", path: "/dpa" },
        { name: "Security Policy", path: "/security" },
        { name: "Compliance", path: "/compliance" }
      ]
    }
  ];

  const externalLinks = [
    { name: "GitHub Repository", url: "https://github.com/ziontechgroup" },
    { name: "LinkedIn Company Page", url: "https://linkedin.com/company/ziontechgroup" },
    { name: "Twitter Profile", url: "https://twitter.com/ziontechgroup" },
    { name: "YouTube Channel", url: "https://youtube.com/@ziontechgroup" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Sitemap - All Pages & Services | Zion Tech Group"
        description="Complete sitemap of all Zion Tech Group pages, services, and resources. Find everything you need in one organized location."
        keywords="sitemap, all pages, website map, navigation, services, AI solutions, IT services"
        canonical="https://ziontechgroup.com/sitemap"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Map
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Find everything you need on our website. Browse all our pages, services, and resources in one organized location.
          </p>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Map className="w-6 h-6 mr-3 text-cyan-400" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              External Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with us on social media and explore our external resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <ExternalLink className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {link.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Use our search functionality or contact us directly for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Support Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
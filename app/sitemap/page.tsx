import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, FileText } from "lucide-react";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", description: "Main homepage" },
    { name: "About", path: "/about", description: "About Zion Tech Group" },
    { name: "Services", path: "/services", description: "Our IT services" },
    { name: "AI Services", path: "/ai-services", description: "AI-powered solutions" },
    { name: "Micro SAAS", path: "/micro-saas", description: "Ready-to-use software solutions" },
    { name: "Pricing", path: "/pricing", description: "Service pricing" },
    { name: "Case Studies", path: "/case-studies", description: "Success stories" },
    { name: "Blog", path: "/blog", description: "Latest news and insights" },
    { name: "Contact", path: "/contact", description: "Get in touch" },
    { name: "Consultation", path: "/consultation", description: "Schedule a consultation" },
    { name: "Demo", path: "/demo", description: "View product demos" },
    { name: "Support", path: "/support", description: "Get help and support" },
    { name: "Tutorials", path: "/tutorials", description: "Learning resources" }
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      pages: [
        { name: "AI Analytics", path: "/ai-analytics" },
        { name: "AI Automation", path: "/ai-automation" },
        { name: "AI Business Intelligence", path: "/ai-business-intelligence" },
        { name: "AI Content Generation", path: "/ai-content-generation" },
        { name: "AI Customer Service", path: "/ai-customer-service" },
        { name: "AI Data Analytics", path: "/ai-data-analytics" },
        { name: "AI Marketing", path: "/ai-marketing" },
        { name: "AI Cybersecurity", path: "/ai-cybersecurity" }
      ]
    },
    {
      title: "IT Services",
      pages: [
        { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions" },
        { name: "Web Development", path: "/web-development" },
        { name: "Mobile Development", path: "/mobile-development" },
        { name: "Database Management", path: "/database-management" },
        { name: "Custom Software", path: "/custom-software" },
        { name: "Cloud Services", path: "/cloud-services" },
        { name: "Custom Development", path: "/custom-development" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      pages: [
        { name: "Zion Analytics Pro", path: "/zion-analytics-pro" },
        { name: "Zion Security Shield", path: "/zion-security-shield" },
        { name: "Zion Cloud Vault", path: "/zion-cloud-vault" },
        { name: "Zion Content Studio", path: "/zion-content-studio" },
        { name: "Zion Data Sync", path: "/zion-data-sync" },
        { name: "Zion Lead Magnet", path: "/zion-lead-magnet" },
        { name: "Zion Project Master", path: "/zion-project-master" },
        { name: "Zion Email Automation", path: "/zion-email-automation" }
      ]
    },
    {
      title: "5G Solutions",
      pages: [
        { name: "5G Data Analytics", path: "/5g-data-analytics" },
        { name: "5G Edge Computing", path: "/5g-edge-computing" },
        { name: "5G Implementation", path: "/5g-implementation" },
        { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
        { name: "5G Private Networks", path: "/5g-private-networks" },
        { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
        { name: "5G Solutions", path: "/5g-solutions" }
      ]
    }
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources organized by category."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find all our pages, services, and resources organized by category. 
                Use this sitemap to navigate our website efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Main Pages */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Main Pages
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Core pages of our website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Services & Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                All our services organized by category
              </p>
            </div>

            <div className="space-y-12">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Search className="w-6 h-6 text-cyan-400 mr-3" />
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.path}
                        className="bg-slate-700/30 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                            {page.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Pages */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal & Policies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Important legal information and policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-center"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {page.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Use our search function or contact us for assistance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/support"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Zion Tech Group homepage" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Pricing", url: "/pricing", description: "View our service pricing plans" },
        { name: "Blog", url: "/blog", description: "Latest news and insights" },
        { name: "Case Studies", url: "/case-studies", description: "Success stories and client results" },
        { name: "Careers", url: "/careers", description: "Join our team" }
      ]
    },
    {
      title: "AI Services",
      links: [
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "AI Analytics", url: "/ai-analytics", description: "AI-powered data analytics" },
        { name: "AI Automation", url: "/ai-automation", description: "Intelligent process automation" },
        { name: "AI Content Generation", url: "/ai-content-generation", description: "AI content creation tools" },
        { name: "AI Customer Service", url: "/ai-customer-service", description: "AI-powered customer support" },
        { name: "AI Marketing", url: "/ai-marketing", description: "AI marketing automation" },
        { name: "AI Project Management", url: "/ai-project-management", description: "AI-enhanced project management" }
      ]
    },
    {
      title: "IT Services",
      links: [
        { name: "IT Services Overview", url: "/it-services", description: "Comprehensive IT solutions" },
        { name: "Cloud Infrastructure", url: "/cloud-infrastructure", description: "Cloud migration and management" },
        { name: "Cybersecurity Solutions", url: "/cybersecurity-solutions", description: "Advanced security services" },
        { name: "Web Development", url: "/web-development", description: "Custom web applications" },
        { name: "Mobile Development", url: "/mobile-development", description: "iOS and Android apps" },
        { name: "Database Management", url: "/database-management", description: "Database optimization and management" },
        { name: "Custom Development", url: "/custom-development", description: "Bespoke software solutions" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      links: [
        { name: "Micro SAAS Overview", url: "/micro-saas", description: "Ready-to-use software solutions" },
        { name: "Zion Analytics Pro", url: "/zion-analytics-pro", description: "AI-powered business intelligence" },
        { name: "Zion Security Shield", url: "/zion-security-shield", description: "Enterprise cybersecurity protection" },
        { name: "Zion Cloud Vault", url: "/zion-cloud-vault", description: "Secure cloud storage solution" },
        { name: "Zion Content Studio", url: "/zion-content-studio", description: "AI content creation suite" },
        { name: "Zion Data Sync", url: "/zion-data-sync", description: "Universal data integration platform" },
        { name: "Zion Lead Magnet", url: "/zion-lead-magnet", description: "Advanced lead generation tool" }
      ]
    },
    {
      title: "5G Solutions",
      links: [
        { name: "5G Solutions Overview", url: "/5g-solutions", description: "Next-generation connectivity" },
        { name: "5G Implementation", url: "/5g-implementation", description: "5G network deployment" },
        { name: "5G Edge Computing", url: "/5g-edge-computing", description: "Edge computing solutions" },
        { name: "5G IoT Solutions", url: "/5g-iot-solutions", description: "IoT connectivity and management" },
        { name: "5G Smart Cities", url: "/5g-smart-city-solutions", description: "Smart city implementations" },
        { name: "5G Private Networks", url: "/5g-private-networks", description: "Private 5G networks" },
        { name: "5G Data Analytics", url: "/5g-data-analytics", description: "5G data processing and analytics" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Tutorials", url: "/tutorials", description: "Learning resources and guides" },
        { name: "Demo", url: "/demo", description: "Live product demonstrations" },
        { name: "Support", url: "/support", description: "Help center and support" },
        { name: "Consultation", url: "/consultation", description: "Free consultation services" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy", description: "Data privacy and protection" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage and management" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Website Directory</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, micro SAAS products, and resources in one place." />
        <meta name="keywords" content="sitemap, website directory, AI services, IT solutions, micro SAAS, 5G solutions, Zion Tech Group" />
        <meta property="og:title" content="Sitemap - Zion Tech Group | Complete Website Directory" />
        <meta property="og:description" content="Complete sitemap of Zion Tech Group website. Find all our services and resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/sitemap" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Website
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                {" "}Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and resources. 
              Find exactly what you're looking for with our comprehensive website directory.
            </p>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    {section.title}
                  </h2>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.url}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
                        >
                          <ArrowRight className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-gray-400 text-sm mt-1">
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you find the perfect solution for your business needs.
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
                <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
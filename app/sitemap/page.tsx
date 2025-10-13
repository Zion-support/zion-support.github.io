import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ExternalLink, Globe, FileText, Users, Briefcase } from "lucide-react";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", description: "Main landing page" },
    { name: "About", path: "/about", description: "Learn about our company" },
    { name: "Services", path: "/services", description: "Our AI and IT services" },
    { name: "Pricing", path: "/pricing", description: "Pricing plans and packages" },
    { name: "Contact", path: "/contact", description: "Get in touch with us" },
    { name: "Demo", path: "/demo", description: "See our solutions in action" },
    { name: "Consultation", path: "/consultation", description: "Free consultation" },
    { name: "Support", path: "/support", description: "24/7 technical support" },
    { name: "Tutorials", path: "/tutorials", description: "Learning resources" },
    { name: "Blog", path: "/blog", description: "Latest news and insights" },
    { name: "Case Studies", path: "/case-studies", description: "Success stories" },
    { name: "Team", path: "/team", description: "Meet our team" },
    { name: "Careers", path: "/careers", description: "Join our team" }
  ];

  const aiServices = [
    { name: "AI Business Intelligence", path: "/ai-business-intelligence" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Analytics", path: "/ai-analytics" },
    { name: "AI Automation", path: "/ai-automation" },
    { name: "AI Marketing", path: "/ai-marketing" },
    { name: "AI Code Assistant", path: "/ai-code-assistant" },
    { name: "AI Document Processing", path: "/ai-document-processing" },
    { name: "AI Financial Analytics", path: "/ai-financial-analytics" }
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

  const itServices = [
    { name: "Cloud Services", path: "/cloud-services" },
    { name: "Cybersecurity", path: "/cybersecurity" },
    { name: "Data Analytics", path: "/data-analytics" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "DevOps Solutions", path: "/devops-solutions" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Custom Development", path: "/custom-development" }
  ];

  const fiveGSolutions = [
    { name: "5G Solutions", path: "/5g-solutions" },
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
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" }
  ];

  const resourcePages = [
    { name: "FAQ", path: "/faq" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Status Page", path: "/status" },
    { name: "News", path: "/news" },
    { name: "Press", path: "/press" }
  ];

  const sections = [
    { title: "Main Pages", pages: mainPages, icon: <Globe className="w-5 h-5" /> },
    { title: "AI Services", pages: aiServices, icon: <FileText className="w-5 h-5" /> },
    { title: "Micro SAAS", pages: microSaas, icon: <Briefcase className="w-5 h-5" /> },
    { title: "IT Services", pages: itServices, icon: <Users className="w-5 h-5" /> },
    { title: "5G Solutions", pages: fiveGSolutions, icon: <Search className="w-5 h-5" /> },
    { title: "Legal", pages: legalPages, icon: <FileText className="w-5 h-5" /> },
    { title: "Resources", pages: resourcePages, icon: <ExternalLink className="w-5 h-5" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources organized by category."
        />
        <meta
          name="keywords"
          content="sitemap, site navigation, website structure, all pages, services directory"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Site Map
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our entire website with ease. Find all our pages, services, 
              and resources organized by category for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
              >
                Need Help Finding Something?
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/search"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Search Our Site
              </Link>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.path}
                        className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {page.name}
                            </h3>
                            {page.description && (
                              <p className="text-sm text-gray-300 mt-1">
                                {page.description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most popular pages and resources
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  All Services
                </h3>
              </Link>
              <Link
                to="/pricing"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Pricing
                </h3>
              </Link>
              <Link
                to="/demo"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <Search className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Live Demo
                </h3>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center group"
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  Contact Us
                </h3>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is here to help you find exactly what you need. 
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/search"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
                >
                  Search Site
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
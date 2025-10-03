import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Globe,
  FileText,
  Users,
  Settings,
  BookOpen,
  Briefcase,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Sitemap — Zion Tech Group Website Navigation',
  description: 'Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized for easy navigation.',
  keywords: 'sitemap, website navigation, zion tech group pages, site structure, website map',
  openGraph: {
    title: 'Sitemap — Zion Tech Group Website Navigation',
    description: 'Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized for easy navigation.',
    type: 'website',
    url: 'https://ziontechgroup.com/sitemap',
    images: [
      {
        url: '/og-sitemap.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group Sitemap - Website Navigation',
      },
    ],
  },
};

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Globe,
      links: [
        { name: "Home", url: "/", description: "Revolutionary AI Breakthroughs 2026" },
        { name: "About Us", url: "/about", description: "Learn about Zion Tech Group" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "Portfolio", url: "/portfolio", description: "View our project portfolio" },
        { name: "Pricing", url: "/pricing", description: "Service pricing and plans" },
        { name: "Support", url: "/support", description: "Customer support center" }
      ]
    },
    {
      title: "Services",
      icon: Settings,
      links: [
        { name: "All Services", url: "/services", description: "Comprehensive service overview" },
        { name: "AI Services", url: "/services/ai-services", description: "Advanced AI solutions" },
        { name: "Micro SaaS", url: "/services/micro-saas", description: "Scalable SaaS platforms" },
        { name: "IT Services", url: "/services/it-services-comprehensive", description: "Complete IT solutions" },
        { name: "Quantum Computing", url: "/services/ai-quantum-computing-2026", description: "Quantum AI solutions" },
        { name: "Cybersecurity", url: "/services/cybersecurity-solutions", description: "Security and compliance" },
        { name: "Cloud Migration", url: "/services/cloud-migration-service", description: "Cloud transformation" },
        { name: "Data Analytics", url: "/services/data-analytics-business-intelligence", description: "Business intelligence" },
        { name: "Blockchain Solutions", url: "/services/blockchain-solutions", description: "Enterprise blockchain" }
      ]
    },
    {
      title: "Solutions",
      icon: Briefcase,
      links: [
        { name: "All Solutions", url: "/solutions", description: "Comprehensive solution overview" },
        { name: "Enterprise Solutions", url: "/enterprise", description: "Enterprise-grade solutions" },
        { name: "Innovative IT Solutions", url: "/innovative-it-solutions", description: "Cutting-edge IT solutions" },
        { name: "Advanced AI Solutions", url: "/advanced-ai-solutions", description: "Next-generation AI" },
        { name: "Healthcare Technology", url: "/services/healthcare-technology-solutions", description: "Healthcare AI solutions" },
        { name: "FinTech Solutions", url: "/services/financial-technology-solutions", description: "Financial technology" },
        { name: "E-commerce Solutions", url: "/services/ecommerce-technology-solutions", description: "E-commerce platforms" },
        { name: "Manufacturing AI", url: "/services/manufacturing-ai-platform", description: "Manufacturing automation" }
      ]
    },
    {
      title: "Case Studies",
      icon: FileText,
      links: [
        { name: "All Case Studies", url: "/case-studies", description: "Success stories overview" },
        { name: "Fortune 500 AI Transformation", url: "/case-studies/fortune-500-ai-transformation", description: "Enterprise transformation success" },
        { name: "Autonomous Enterprise Success", url: "/case-studies/autonomous-enterprise-2-billion-success", description: "95% automation achievement" },
        { name: "Quantum Neural Superintelligence", url: "/case-studies/ai-2026-quantum-neural-superintelligence-25-billion-success", description: "1000x performance gains" },
        { name: "Healthcare AI Diagnostics", url: "/case-studies/ai-2026-neural-architecture-1-trillion-success", description: "Medical AI breakthroughs" },
        { name: "Financial Intelligence Platform", url: "/case-studies/ai-2026-ultimate-autonomous-revolution-100-billion-success", description: "Financial AI success" },
        { name: "Supply Chain Optimization", url: "/case-studies/ai-2026-ultimate-consciousness-breakthrough-847-billion-success", description: "Logistics AI transformation" }
      ]
    },
    {
      title: "Blog & Resources",
      icon: BookOpen,
      links: [
        { name: "Blog Home", url: "/blog", description: "Latest AI insights and trends" },
        { name: "AI 2026 Quantum Computing", url: "/blog/ai-2026-quantum-computing-breakthrough", description: "Quantum AI breakthroughs" },
        { name: "Autonomous Enterprise Systems", url: "/blog/ai-2026-autonomous-enterprise-operations", description: "Enterprise automation" },
        { name: "Neural Architecture Breakthroughs", url: "/blog/ai-2026-neural-architecture-breakthrough", description: "Next-gen AI systems" },
        { name: "AI ROI Optimization", url: "/blog/ai-2026-cost-optimization-blueprint", description: "Maximizing AI returns" },
        { name: "Quantum Consciousness", url: "/blog/ai-2026-quantum-consciousness-breakthrough", description: "AI consciousness research" },
        { name: "Edge AI Revolution", url: "/blog/ai-2026-edge-computing-revolution", description: "Edge computing AI" },
        { name: "Multimodal AI Integration", url: "/blog/ai-multimodal-integration-2025", description: "Multimodal AI systems" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "About Us", url: "/about", description: "Our mission and vision" },
        { name: "Partners", url: "/partners", description: "Strategic partnerships" },
        { name: "Portfolio", url: "/portfolio", description: "Project showcase" },
        { name: "Pricing", url: "/pricing", description: "Service pricing" },
        { name: "Support", url: "/support", description: "Customer support" },
        { name: "Contact", url: "/contact", description: "Get in touch" }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { name: "All Resources", url: "/resources", description: "Resource center" },
        { name: "Guides", url: "/guides", description: "Implementation guides" },
        { name: "Content Hub", url: "/content-hub", description: "Educational content" },
        { name: "Enhanced Services Catalog", url: "/enhanced-services-catalog", description: "Detailed service catalog" },
        { name: "Privacy Policy", url: "/privacy", description: "Privacy and data protection" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Security", url: "/security", description: "Security information" },
        { name: "Sitemap", url: "/sitemap", description: "Website navigation" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Website Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Navigate our website easily with our comprehensive sitemap. 
              Find all pages, services, and resources organized for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-l-2 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
                      <Link
                        to={link.url}
                        className="block group"
                      >
                        <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {link.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popular pages and frequently accessed resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-blue-100">Get in touch with our team</p>
              <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <Settings className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Services</h3>
              <p className="text-green-100">Explore our AI solutions</p>
              <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/case-studies"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <FileText className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <p className="text-purple-100">View success stories</p>
              <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/blog"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <BookOpen className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Latest Blog</h3>
              <p className="text-orange-100">Read AI insights</p>
              <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Use our search functionality to find specific pages, services, or information
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search our website..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
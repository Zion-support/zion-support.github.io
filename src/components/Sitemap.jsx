import React from 'react';
import { Link } from 'react-router-dom';

export function Sitemap() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "FAQ", path: "/faq" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "AI & Business Solutions", path: "/services/ai-business-solutions" },
        { label: "Cybersecurity Suite", path: "/services/cybersecurity-suite" },
        { label: "Cloud Infrastructure", path: "/services/cloud-infrastructure" },
        { label: "Digital Marketing", path: "/services/digital-marketing" },
        { label: "Financial Solutions", path: "/services/financial-solutions" },
        { label: "Manufacturing Solutions", path: "/services/manufacturing-solutions" },
        { label: "IoT Services", path: "/services/iot-services" },
        { label: "Blockchain Services", path: "/services/blockchain-services" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "5G Enterprise Solutions", path: "/services/5g-enterprise-solutions" },
        { label: "Green IT", path: "/services/green-it" },
        { label: "Enterprise IT", path: "/services/enterprise-it" },
        { label: "Micro SaaS Services", path: "/services/micro-saas" },
        { label: "Onsite IT Services", path: "/services/onsite-it" },
        { label: "Dispute Management", path: "/services/dispute-management" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "All Products", path: "/products" },
        { label: "New Products", path: "/products/new" },
        { label: "Equipment", path: "/equipment" },
        { label: "Portfolio Builder", path: "/portfolio-builder" },
        { label: "Zion Hire AI", path: "/zion-hire-ai" },
        { label: "AI Research Assistant", path: "/ai-research-assistant" },
        { label: "AI Content Generator", path: "/ai-content-generator" },
        { label: "AI Code Review", path: "/ai-code-review" },
        { label: "Cloud Cost Optimizer", path: "/cloud-cost-optimizer" },
        { label: "Service Description Generator", path: "/service-description-generator" }
      ]
    },
    {
      title: "Business Solutions",
      links: [
        { label: "Business Solutions", path: "/business-solutions" },
        { label: "Enterprise Admin", path: "/enterprise" },
        { label: "Enterprise Billing", path: "/enterprise/billing" },
        { label: "Enterprise Demo", path: "/enterprise/demo" },
        { label: "Enterprise Plans", path: "/enterprise/plans" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-platform" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Partners", path: "/partners" },
        { label: "Events", path: "/events" },
        { label: "News", path: "/news" },
        { label: "Blog", path: "/blog" },
        { label: "Create Post", path: "/forum/create" },
        { label: "Post Job", path: "/jobs/post" },
        { label: "Hiring Tracker", path: "/hiring-tracker" },
        { label: "Talent Onboarding", path: "/talent-onboarding" }
      ]
    },
    {
      title: "User & Account",
      links: [
        { label: "Login", path: "/login" },
        { label: "Signup", path: "/signup" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "Profile", path: "/profile" },
        { label: "Forgot Password", path: "/forgot-password" },
        { label: "Update Password", path: "/update-password" }
      ]
    },
    {
      title: "Marketplace",
      links: [
        { label: "Cart", path: "/cart" },
        { label: "Orders", path: "/orders" },
        { label: "Search Results", path: "/search" },
        { label: "Categories", path: "/category/technology" }
      ]
    },
    {
      title: "Legal & Documentation",
      links: [
        { label: "Terms of Service", path: "/terms" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Cookie Policy", path: "/cookies" },
        { label: "Documentation", path: "/docs" },
        { label: "Developer Portal", path: "/developer" }
      ]
    },
    {
      title: "Pricing & Plans",
      links: [
        { label: "Main Pricing", path: "/pricing" },
        { label: "Pricing Guide", path: "/pricing-guide" },
        { label: "Services Pricing", path: "/services-pricing" },
        { label: "Services Comparison", path: "/services-comparison" }
      ]
    },
    {
      title: "Specialized Services",
      links: [
        { label: "Next Gen Services 2025", path: "/next-gen-services-2025" },
        { label: "Cutting Edge Services 2025", path: "/cutting-edge-services-2025" },
        { label: "Enhanced Innovative Services", path: "/enhanced-innovative-services" },
        { label: "Enhanced Services", path: "/enhanced-services" },
        { label: "Enhanced Services Showcase", path: "/enhanced-services-showcase" },
        { label: "Comprehensive Services", path: "/comprehensive-services" },
        { label: "Comprehensive Contact", path: "/comprehensive-contact" },
        { label: "Advanced Services", path: "/advanced-services" },
        { label: "Services Overview", path: "/services-overview" },
        { label: "New Services Overview", path: "/new-services-overview" },
        { label: "Micro SaaS Services", path: "/micro-saas-services" },
        { label: "Micro SaaS Showcase", path: "/micro-saas-showcase" },
        { label: "Content Generator", path: "/content-generator" },
        { label: "Service Onboarding", path: "/service-onboarding" },
        { label: "Token Integrations", path: "/token-integrations" },
        { label: "How It Works", path: "/how-it-works" },
        { label: "Get Started", path: "/get-started" }
      ]
    }
  ];

  return (
    <div className="bg-zion-slate-dark py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Site Map</h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Complete overview of all pages and services available on Zion Tech Group
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sitemapData.map((section, index) => (
            <div key={index} className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-cyan/20">
              <h3 className="text-lg font-semibold text-zion-cyan mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-zion-slate-light text-sm">
            Can't find what you're looking for? <Link to="/contact" className="text-zion-cyan hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
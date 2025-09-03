import React from "react";
import { FileText, HelpCircle } from "lucide-react";

export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = new Date().getFullYear();

  // Minimal safe defaults to avoid type errors; actual content continues below
  const footerLinks = {
    services: [
      { name: "IT Services", href: "/services/it-services" },
      { name: "Micro SaaS", href: "/services/micro-saas" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Cloud Services", href: "/services/cloud-services" },
      { name: "AI Development", href: "/services/ai-development" }
    ],
    solutions: [
      { name: "AI Content Creation", href: "/solutions/ai-content-creation" },
      { name: "Customer Support", href: "/solutions/customer-support" },
      { name: "Email Automation", href: "/solutions/email-automation" },
      { name: "Event Management", href: "/solutions/event-management" },
      { name: "Project Management", href: "/solutions/project-management" },
      { name: "Workflow Automation", href: "/solutions/workflow-automation" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" }
    ],
    resources: [
      { name: "Help Center", href: "/help" },
      { name: "Pricing Guide", href: "/pricing-guide" },
      { name: "Search", href: "/search" },
      { name: "Sitemap", href: "/sitemap" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" }
    ]
  };

  const socialLinks: Array<{ name: string; href: string }> = [];

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">© {currentYear} Zion Tech Group</p>
          <button onClick={scrollToTop} className="text-sm text-blue-600 hover:underline">Back to top</button>
        </div>
      </div>
    </footer>
  );
}
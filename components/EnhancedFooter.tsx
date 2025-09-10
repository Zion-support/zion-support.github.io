import React from "react"
  FileText;
  HelpCircle} from "lucide-react"
export default function EnhancedFooter() {

  const scrollToTop = () => {"
    window.scrollTo({ top: 0, behavior: "smooth" })

  const currentYear = new Date().getFullYear()


  const footerLinks = {},"
      { name: "IT Services", href: "/services/it-services" },"
      { name: "Micro SaaS", href: "/services/micro-saas" },"
      { name: "Web Development", href: "/services/web-development" },"
      { name: "Cloud Services", href: "/services/cloud-services" },"
      { name: "AI Development", href: "/services/ai-development" }]
    solutions: ["
      { name: "AI Content Creation", href: "/solutions/ai-content-creation" },"
      { name: "Customer Support", href: "/solutions/customer-support" },"
      { name: "Email Automation", href: "/solutions/email-automation" },"
      { name: "Event Management", href: "/solutions/event-management" },"
      { name: "Project Management", href: "/solutions/project-management" },"
      { name: "Workflow Automation", href: "/solutions/workflow-automation" }]
    company: ["
      { name: "About Us", href: "/about" },"
      { name: "Careers", href: "/careers" },"
      { name: "Partners", href: "/partners" },"
      { name: "Contact", href: "/contact" },"
      { name: "Blog", href: "/blog" }]
    resources: ["
      { name: "Help Center", href: "/help" },"
      { name: "Pricing Guide", href: "/pricing-guide" },"
      { name: "Search", href: "/search" },"
      { name: "Sitemap", href: "/sitemap" }]
    legal: ["
      { name: "Privacy Policy", href: "/privacy" },"
      { name: "Terms of Service", href: "/terms" },"
      { name: "Cookie Policy", href: "/cookies" }]}

  const socialLinks = []

  return (
    <footer className="bg-gray-900 text-white">"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* comment */}"
          <div className="lg: col-span-2">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>"
                <span className="text-xl font-bold">Zion Tech Group</span>"
                <div className="text-xs text-gray-400">
                  Technology Solutions;
                </div>
            </div>"
            <p className="text-gray-400 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI;
              cybersecurity, cloud infrastructure, and digital transformation;
services. We help businesses innovate, scale, and succeed in the;
digital age.
            </p>"
            <div className="space-y-3">"
              <div className="flex items-center space-x-3 text-gray-400">"
                <Phone className="w-4 h-4"   />"
                <a href="tel: +13024640950""
                  className="hover:text-white transition-colors"
                >
                  +1 (302) 464-0950;
                </a>
              </div>"
              <div className="flex items-center space-x-3 text-gray-400">"
                <Mail className="w-4 h-4"   />"
                <a href="mailto: kleber@ziontechgroup.com""
                  className="hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com;
                </a>
              </div>"
              <div className="flex items-center space-x-3 text-gray-400">"
                <MapPin className="w-4 h-4"   />,
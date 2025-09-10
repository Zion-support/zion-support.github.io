import React from "react"
  ArrowRight;
  Heart;
} from "lucide-react"
const ImprovedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const footerLinks = {},"
      { name: "IT Services", href: "/it-services" },"
      { name: "Micro SaaS", href: "/micro-saas" },"
      { name: "Cloud Solutions", href: "/cloud-solutions" },"
      { name: "Web Development", href: "/web-development" },"
      { name: "Mobile Development", href: "/mobile-development" }

    ]
    solutions: ["
      { name: "Enterprise", href: "/solutions/enterprise" },"
      { name: "Small Business", href: "/solutions/small-business" },"
      { name: "Startups", href: "/solutions/startups" },"
      { name: "Healthcare", href: "/solutions/healthcare" },"
      { name: "Finance", href: "/solutions/finance" },"
      { name: "E-commerce", href: "/solutions/ecommerce" }

    ]
    company: ["
      { name: "About Us", href: "/about" },"
      { name: "Our Team", href: "/team" },"
      { name: "Careers", href: "/careers" },"
      { name: "Contact", href: "/contact" },"
      { name: "Blog", href: "/blog" },"
      { name: "Case Studies", href: "/case-studies" }

    ]
    resources: ["
      { name: "Documentation", href: "/docs" },"
      { name: "White Papers", href: "/white-papers" },"
      { name: "Webinars", href: "/webinars" },"
      { name: "Support", href: "/support" },"
      { name: "API Reference", href: "/api" },"
      { name: "Sitemap", href: "/sitemap" }

    ]
    legal: ["
      { name: "Privacy Policy", href: "/privacy" },"
      { name: "Terms of Service", href: "/terms" },"
      { name: "Cookie Policy", href: "/cookies" },"
      { name: "GDPR Compliance", href: "/gdpr" }

    ]


  const socialLinks = []

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* comment */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* comment */}"
          <div className="lg: col-span-2">"
            <div className="flex items-center space-x-2 mb-6">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <span className="text-white font-bold text-xl">Z</span>
              </div>"
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>"
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital presence;
with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            {/* comment */}"
            <div className="space-y-3">"
              <div className="flex items-center text-gray-300">"
                <Mail className="h-5 w-5 mr-3 text-blue-400"   />"
                <a href="mailto: info@ziontechgroup.com" className="hover:text-white transition-colors">
                  info@ziontechgroup.com;
                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <Phone className="h-5 w-5 mr-3 text-blue-400"   />"
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567;
                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <MapPin className="h-5 w-5 mr-3 text-blue-400"   />,
import NextLink from "next/link";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  FileText as FileTextIcon,
  HelpCircle as HelpCircleIcon,
  ArrowUp as ArrowUpIcon,
} from "lucide-react";

export default function EnhancedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="text-xl font-bold">Zion Tech Group</span>
                <div className="text-xs text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,
              and digital transformation services. We help businesses innovate, scale, and succeed.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MailIcon className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPinIcon className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <GlobeIcon className="w-5 h-5 mr-2 text-blue-400" />
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <NextLink href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <ShieldIcon className="w-5 h-5 mr-2 text-green-400" />
              Solutions
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map(link => (
                <li key={link.name}>
                  <NextLink href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileTextIcon className="w-5 h-5 mr-2 text-purple-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <NextLink href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources and Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <HelpCircleIcon className="w-5 h-5 mr-2 text-yellow-400" />
              Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <NextLink href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
            <h4 className="text-md font-semibold mb-3 text-gray-300">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.name}>
                  <NextLink href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Zion Tech Group. All rights reserved.</div>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50" aria-label="Scroll to top">
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    </footer>
  );
}
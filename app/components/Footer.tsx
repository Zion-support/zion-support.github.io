import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud    } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const aiServices = [{ name: "AI Analytics & BI", url: "/ai-analytics", description: "Business intelligence" },
    { name: "AI Automation", url: "/ai-automation", description: "Process automation" },
    { name: "AI Chatbots & NLP", url: "/ai-chatbot-builder", description: "Conversational AI" },
    { name: "AI Content Generation", url: "/ai-content-generation", description: "Automated content" },
    { name: "AI Cybersecurity", url: "/ai-cybersecurity", description: "AI security" },
    { name: "Computer Vision", url: "/computer-vision", description: "Image recognition" },
    { name: "Predictive Analytics", url: "/predictive-analytics", description: "Forecasting" },
    { name: "Speech & Voice AI", url: "/ai-voice-assistant", description: "Voice technology" }

  ]
  const itServices = [{ name: "Web Development", url: "/web-development", description: "Custom websites" },
    { name: "Mobile Development", url: "/mobile-development", description: "iOS & Android apps" },
    { name: "Cloud Migration", url: "/cloud-migration", description: "Cloud solutions" },
    { name: "DevOps & CI/CD", url: "/devops", description: "Automation & deployment" },
    { name: "Cybersecurity", url: "/cybersecurity", description: "Security solutions" },
    { name: "Data Analytics", url: "/data-analytics", description: "Business insights" },
    { name: "Blockchain", url: "/blockchain", description: "Distributed systems" },
    { name: "IoT Solutions", url: "/iot", description: "Connected devices" }

  ]
  const companyLinks = [{ name: "About Us", url: "/about" },
    { name: "Our Team", url: "/team" },
    { name: "Careers", url: "/careers" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "Blog", url: "/blog" },
    { name: "Press", url: "/press" }

  ]
  const supportLinks = [{ name: "Help Center", url: "/help" },
    { name: "Documentation", url: "/docs" },
    { name: "API Reference", url: "/api-docs" },
    { name: "Community", url: "/community" },
    { name: "Contact", url: "/contact" },
    { name: "Status", url: "/status" }

  ]
  return (<footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info*/}
          <div className="space-y-4">
            <div className="flex items-center space-x-2"> <Brain className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions and cutting-edge technology services 
              for modern businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors"> <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors"> <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"> <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI Services*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (<li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  > <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              )
  )
}
            </ul>
          </div>

          {/* IT Services*/}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (<li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  > <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              )
  )
}
            </ul>
          </div>

          {/* Company & Support*/}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (<li key={index}>
                    <Link 
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm
                    >
                      {link.name}
                    </Link>
                  </li>
                )
  )
}"
              </ul></div><div><h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (<li key={index}>
                    <Link 
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm
                    >
                      {link.name}
                    </Link>
                  </li>
                )
  )
}
              </ul>
            </div>
          </div>"
        </div>"
        {/* Contact Info*/}<div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3"> <Mail className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3"> <Phone className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3"> <MapPin className="h-5 w-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar*/}
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
;
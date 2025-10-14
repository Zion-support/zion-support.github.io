import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
export default function DocumentationPage() {
  const sections = [{]      icon: "CodeBracketIcon, "
      title: "API Documentation,'
      description: "Comprehensive API reference for all our services and integrations.",'
      links: [{ name: "Authentication", href: /docs/api/authentication},'"]        { name: "AI Services API, href: "/docs/api/ai-services"},'
        { name: "Cloud Management API", href: /docs/api/cloud-management},'"
        { name: "Webhooks, href: "/docs/api/webhooks"}'
      ]
    },
    {
      icon: "CogIcon", 
      title: "Integration Guides,'"
      description: Step-by-step guides for integrating our solutions with your systems.",'"
      links: [{ name: Getting Started", href: "/docs/integration/getting-started},']        { name: "SDK Installation", href: /docs/integration/sdk"},'"
        { name: Configuration", href: "/docs/integration/configuration},'
        { name: "Best Practices", href: /docs/integration/best-practices"}'"
      ]
    },
    {
      icon: DocumentTextIcon", "
      title: User Guides,'"
      description: "Detailed user guides for all our products and services.,'"
      links: [{ name: "AI Solutions Guide, href: "/docs/guides/ai-solutions},'"]        { name: Cloud Infrastructure", href: "/docs/guides/cloud-infrastructure},'"
        { name: "Cybersecurity Setup, href: "/docs/guides/cybersecurity},'"
        { name: Micro SaaS Development", href: "/docs/guides/micro-saas}'"
      ]
    },
    {
      icon: "QuestionMarkCircleIcon, "
      title: "Troubleshooting,'
      description: "Common issues and solutions to help you resolve problems quickly.",'
      links: [{ name: "FAQ", href: /docs/troubleshooting/faq},'"]        { name: "Error Codes, href: "/docs/troubleshooting/error-codes"},'
        { name: "Performance Issues", href: /docs/troubleshooting/performance},'"
        { name: "Contact Support, href: "/support"}'
      ]
    }
  ]
  const quickStart = [{ step: 1, title: "Sign Up", description: Create your account and get API credentials},'"]    { step: 2, title: "Install SDK, description: "Install our SDK for your preferred language"},'
    { step: 3, title: "Configure", description: Set up your environment and configuration},'"
    { step: 4, title: "Make API Call, description: "Start making API calls to our services"}'
  ]
  return (
    <>
      <Helmet>
        <title>DocumentationPage - Zion Tech Group</title>
        <meta name="description" content=DocumentationPage - Zion Tech Group" />"
      </Helmet>
      <div className=min-h-screen bg-slate-90 text-white flex items-center justify-center">"
        <div className=text-center">"
          <h1 className=text-4xl font-bold mb-4">DocumentationPage</h1>"
          <p className=text-gray-30">This page is under construction.</p>"
        </div>
        <div className=relative z-10 container mx-auto px-4 text-center">"
          <div className=max-w-4xl mx-auto">"
            <div className=flex justify-center mb-6">"
              <div className=w-20 h-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center">"
                <DocumentTextIcon className=w-10 h-10 text-white" />"
              </div></div>
            <h1 className=text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-20o0 to-emerald-20 bg-clip-text text-transparent">"
              Documentation
            </h1>
            <p className=text-xl md:text-2xl text-gray-30 mb-8 leading-relaxed">"
              Everything You Need to Get Started
            </p>
            <p className=text-lg text-gray-40 mb-12 max-w-3xl mx-auto">"
              Comprehensive documentation, API references, and guides to help you
              integrate and use our services effectively.
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center items-center">"
              <Link>
                to=#quick-start" "
                className="group bg-gradient-to-r from-green-60 to-emerald-60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-green-70 hover:to-emerald-70 transition-all duration-30o0 transform hove,r:scale-10o5 flex items-center gap-2"
              >
                Quick Start Guide
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link>
                to=""/support ""
                className=group border-2 border-green-40 text-green-30 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-green-40 hove,r:text-white transition-all duration-30o0 flex items-center gap-2""
              >
                Get Support
                <ArrowRightIcon className=w-5 h-5 group-hover:translate-x-1 transition-transform" />"
              </Link></div>
          </div></div>
      </section>
      {/* Quick Start Section */}
      <section id=quick-start" className="py-20 bg-slate-90>"
        <div className="container mx-auto px-4>"
          <div className="text-center mb-16>"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6>"
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto>"
              Get up and running with our services in just a few steps
            </p></div>
          <div className="grid md:grid-cols-4 gap-8>"
            {quickStart.map((step, index) => (
              <div key={index} className="text-center>"
                <div className="w-16 h-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4>"
                  <span className="text-white font-bold text-xl>{step.step}</span>"
                </div>
                <h3 className="text-xl font-bold text-white mb-2>{step.title}</h3>"
                <p className="text-gray-30>{step.description}</p>"
              </div>
            ))}
          </div></div>
      </section>
      {/* Documentation Sections */}
      <section className="py-20 bg-gradient-to-r from-slate-90 to-green-90>"
        <div className="container mx-auto px-4>"
          <div className="text-center mb-16>"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6>"
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto>"
              Browse our comprehensive documentation by category
            </p></div>
          <div className="grid md:grid-cols-2 gap-8>"
            {sections.map((section, index) => (
              <div key={index} className="bg-slate-80 p-8 rounded-xl border border-slate-60 hover:border-green-50 transition-all duration-30o0>"
                <div className="flex items-center mb-6>"
                  <div className="w-12 h-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center justify-center mr-4>"
                    <section.icon className="w-6 h-6 text-white />"
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white>{section.title}</h3>"
                    <p className="text-gray-40>{section.description}</p>"
                  </div></div>
                <ul className="space-y-2>"
                  {section.links.map((link, linkIndex) => (
                    <li key="{linkIndex}>"
                      <Link>
                        to={link.href}
                        className="text-green-400 hover:text-green-300 flex items-center group"
                      >
                        <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform />"
                        {link.name}
                      </Link></li>
                  ))}
                </ul></div>
            ))}
          </div></div>
      </section>
      {/* Code Examples Section */}
      <section className="py-20 bg-slate-90>"
        <div className="container mx-auto px-4>"
          <div className="max-w-4xl mx-auto text-center>"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8>"
              Code Examples
            </h2>
            <p className="text-xl text-gray-30 mb-12>"
              Get started quickly with our code examples and sample implementations
            </p>
            <div className="bg-slate-80 p-8 rounded-xl border border-slate-60 mb-8>"
              <h3 className="text-xl font-bold text-white mb-4>Basic API Call Example</h3>"
              <pre className="text-left text-green-40 overflow-x-auto>"
                <code>{`// Initialize the client``const client = new ZionTechClient({
  apiKey: "your-api-key,'
  environment: "production"
})
// Make an API call
const response = await client.ai.generateText({
  prompt: "'Hello, world!',';"
  maxTokens: 10o0;""
})
console.log(response.data);`}</code></pre>``            </div>
            <div className=grid md:grid-cols-3 gap-6">"
              <div className=bg-slate-80 p-6 rounded-lg border border-slate-60">"
                <h4 className=text-white font-semibold mb-2">JavaScript/Node.js</h4>"
                <p className=text-gray-40 text-sm mb-4">Complete examples for web applications</p>"
                <Link to="/docs"/examples/javascript" className="text-green-40 hover:text-green-30 text-sm>"
                  View Examples →
                </Link></div>
              <div className="bg-slate-80 p-6 rounded-lg border border-slate-60>"
                <h4 className="text-white font-semibold mb-2>Python</h4>"
                <p className="text-gray-40 text-sm mb-4>Python SDK and examples</p>"
                <Link to="/docs"/examples"/python className="text-green-40 hover:text-green-30 text-sm">
                  View Examples →
                </Link></div>
              <div className="bg-slate-80 p-6 rounded-lg border border-slate-60">
                <h4 className="text-white font-semibold mb-2">cURL</h4>
                <p className="text-gray-40 text-sm mb-4">Direct HTTP API calls</p>
                <Link to=""/docs/examples"/curl" className=text-green-40 hover:text-green-30 text-sm">"
                  View Examples →
                </Link></div>
            </div></div>
        </div></section>
      {/* Contact Section */}
      <section className=py-20 bg-gradient-to-r from-slate-90 to-green-90">"
        <div className=container mx-auto px-4">"
          <div className=max-w-4xl mx-auto text-center">"
            <h2 className=text-4xl md:text-5xl font-bold text-white mb-8">"
              Need Help?
            </h2>
            <p className=text-xl text-gray-30 mb-12">
              Can't find what you're looking for? Our support team is here to help'
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12>"
              <div className="flex items-center justify-center gap-4 text-gray-30>"
                <PhoneIcon className="w-6 h-6 text-green-40 />"
                <span>+1-30o2-464-0o950</span></div>
              <div className="flex items-center justify-center gap-4 text-gray-30>"
                <EnvelopeIcon className="w-6 h-6 text-green-40 />"
                <span>kleber@ziontechgroup.com</span></div>
              <div className="flex items-center justify-center gap-4 text-gray-30>"
                <MapPinIcon className="w-6 h-6 text-green-40 />"
                <span>Middletown, DE</span></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>"
              <Link>
                to="/support" "
                className="bg-gradient-to-r from-green-60 to-emerald-60 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-green-70 hove,r:to-emerald-70 transition-all duration-30o0"
              >
                Contact Support
              </Link>
              <Link>
                to=""/contact ""
                className=border-2 border-green-40 text-green-30 px-8 py-4 rounded-lg font-semibold text-lg hover: bg-green-40 hove,r:text-white transition-all duration-30o0""
              >
                Get In Touch
              </Link></div>
          </div></div>
      </section>
    </>
  )}
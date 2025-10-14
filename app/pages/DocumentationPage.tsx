import React from "react";
import SEO from "../components/SEO";
import { 
  DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";

export default function DocumentationPage() {
  const sections = [
    {
      icon: CodeBracketIcon,
      title: "API Documentation",
      description: "Comprehensive API reference for all our services and integrations.",
      links: [
        { name: "Authentication", href: "/docs/api/authentication" },
        { name: "AI Services API", href: "/docs/api/ai-services" },
        { name: "Cloud Management API", href: "/docs/api/cloud-management" },
        { name: "Webhooks", href: "/docs/api/webhooks" }
      ]
    },
    {
      icon: DocumentTextIcon,
      title: "User Guides",
      description: "Step-by-step guides to help you get started with our services.",
      links: [
        { name: "Getting Started", href: "/docs/guides/getting-started" },
        { name: "Configuration", href: "/docs/guides/configuration" },
        { name: "Best Practices", href: "/docs/guides/best-practices" },
        { name: "Troubleshooting", href: "/docs/guides/troubleshooting" }
      ]
    },
    {
      icon: CogIcon,
      title: "Technical Reference",
      description: "Detailed technical documentation for developers and system administrators.",
      links: [
        { name: "System Requirements", href: "/docs/technical/requirements" },
        { name: "Architecture", href: "/docs/technical/architecture" },
        { name: "Security", href: "/docs/technical/security" },
        { name: "Performance", href: "/docs/technical/performance" }
      ]
    },
    {
      icon: QuestionMarkCircleIcon,
      title: "FAQ & Support",
      description: "Frequently asked questions and support resources.",
      links: [
        { name: "Common Questions", href: "/docs/faq" },
        { name: "Contact Support", href: "/docs/support" },
        { name: "Community Forum", href: "/docs/community" },
        { name: "Release Notes", href: "/docs/releases" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group services and APIs."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation to help you get the most out of our services
            and integrate with our APIs.
          </p>
        </div>
      </section>
      
      {/* Documentation Sections */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our support team is here to help you succeed with our services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
  features?: string[];
}

function ServiceCard({ title, href, description, bullets = [], icon, price, features = [] }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      {price && (
        <div className="text-lg font-bold text-blue-600 mb-4">Starting at {price}</div>
      )}
      {bullets.length > 0 && (
        <ul className="text-gray-600 space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span> {bullet}
            </li>
          ))}
        </ul>
      )}
      {features.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {features.map((feature, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive solutions for modern businesses. From AI-powered tools to complete IT infrastructure, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three main service categories designed to meet all your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="End-to-end product development with billing, auth, and analytics"
            bullets={[
              "Foundational architecture",
              "Billing + subscriptions",
              "Growth analytics",
            ]}
            icon="🚀"
          />
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="LLM applications, RAG systems, and AI automation"
            bullets={[
              'Custom LLM development',
              'RAG systems',
              'AI agents & automation'
            ]}
            icon="🤖"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Cloud migration, DevOps, and security solutions"
            bullets={[
              "Cloud migration",
              "DevOps & CI/CD",
              "Security solutions"
            ]}
            icon="💻"
          />
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Micro SaaS Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-deploy SaaS applications that solve real business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/ai-analytics-dashboard"
            title="AI Analytics Dashboard"
            description="Transform data into actionable insights with AI-powered analytics"
            bullets={["Real-time visualization", "Predictive analytics", "Automated reporting"]}
            icon="📊"
          />
          <ServiceCard
            href="/services/social-media-automation"
            title="Social Media Automation"
            description="Automate your social presence with AI-powered content creation"
            bullets={["Auto-generated posts", "Smart scheduling", "Engagement analytics"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/smart-invoice-generator"
            title="Smart Invoice Generator"
            description="Automate invoicing with AI-powered generation and payment tracking"
            bullets={["Auto-populate invoices", "Payment automation", "Financial analytics"]}
            icon="💰"
          />
          <ServiceCard
            href="/services/customer-feedback-analyzer"
            title="Customer Feedback Analyzer"
            description="Transform feedback into insights with AI sentiment analysis"
            bullets={["Sentiment analysis", "Trend detection", "Automated reporting"]}
            icon="💬"
          />
          <ServiceCard
            href="/services/ai-project-management"
            title="AI Project Management"
            description="Streamline projects with AI-powered task management and optimization"
            bullets={["Smart task assignment", "Team collaboration", "Project analytics"]}
            icon="📋"
          />
          <ServiceCard
            href="/services/email-marketing-automation"
            title="Email Marketing Automation"
            description="Boost ROI with AI-powered email campaigns and personalization"
            bullets={["Personalized campaigns", "Advanced segmentation", "Comprehensive analytics"]}
            icon="📧"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free consultation and custom quote for your project. No commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
import React from 'react'
export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services for modern businesses.',
  keywords: 'services, technology, business, solutions'
}
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology services for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI solutions for business automation and intelligence.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300">
              Professional web development services for modern applications.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300">
              Scalable cloud services for business growth and efficiency.
            </p>

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, financial technology, healthcare technology, and educational technology. Transform your business with cutting-edge solutions.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation'

};

import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}"
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">"
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            number="500+"
            label="Successful Projects"
            description="Delivered worldwide"
          />
          <StatCard
            number="$2B+"
            label="Combined Market Value"
            description="Generated for clients"
          />
          <StatCard
            number="99.9%"
            label="Uptime Guarantee"
            description="Enterprise reliability"
          />
          <StatCard
            number="300%"
            label="Average ROI"
            description="Client return on investment"
          />
        </div>
      </div>

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      {" "}
      <div className="text-center mb-16">
        {" "}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>{" "}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {" "}
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.{" "}
        </p>{" "}
      </div>{" "}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">

          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"

            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"

            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling",

            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling"

          ]}
          icon="🚀"

"
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard"
          href="/services/micro-saas""
          title="Micro SaaS Solutions""
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[]
          ]}"
          icon="🚀""

          pricing="From $2,999/month"

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
            "Multi-tenant systems"
          ]}
          icon="🚀"

        />
        <ServiceCard"
          href="/services/ai-services""
          title="AI Services"

          description="LLM applications, RAG systems, and AI automation"
          bullets={[
            'Custom LLM development',
            'RAG systems',
            'AI agents & automation'
          ]}

description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          description="Advanced AI solutions including LLM applications, RAG systems, and enterprise AI platforms"
          bullets={[
            "15+ AI service categories",
            "Custom LLM development",
            "Enterprise AI integration"
          ]}

          icon="🤖"

"
          icon="🤖""

          pricing="From $5,000/project"

          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Custom AI solutions"]}
          icon="🤖"

        />
        <ServiceCard"
          href="/services/it-services""
          title="IT Services"

          description="Cloud migration, DevOps, and security solutions"

          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security"
          bullets={[
            "Smart contracts development",
            "DeFi protocols & DApps",
            "Web3 integration & consulting"
          ]}
          icon="⛓️"
          pricing="From $15,000/project"
        />
        <ServiceCard
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency"
          bullets={[
            "Process automation",
            "Workflow optimization",
            "AI-powered automation"
          ]}
          icon="⚡"

          pricing="From $2,500/month"

        />
        <ServiceCard"
          href="/services/blockchain-solutions""
          title="Blockchain Solutions""
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security""
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}"
          icon="⛓️""
          pricing="From $15,000/project"
        />
        <ServiceCard"
          href="/services/automation-solutions""
          title="Automation Solutions""
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency""
          bullets={["Process automation", "Workflow optimization", "AI automation"]}"
          icon="⚡"

        />
        <ServiceCard"
          href="/services/data-analytics""

          pricing="From $2,500/month"
        />
<ServiceCard
          href="/services/data-analytics"

          title="Data Analytics"
          description="Business intelligence, predictive analytics, and data engineering for data-driven decisions"
          bullets={[
            "BI dashboards",
            "Predictive analytics",
            "Data engineering"
          ]}
          icon="📊"
          pricing="From $4,000/month"
        />
      </div>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-specific solutions and cutting-edge technologies to address unique business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              href="/services/ai-chatbot"
              title="AI Chatbot Platform"
              description="Intelligent conversational AI for customer support and engagement"
              bullets={[
                "Natural language processing",
                "Multi-channel integration",
                "Custom training & deployment"
              ]}
              icon="💬"
              pricing="From $1,500/month"
            />
            <ServiceCard
              href="/services/ai-content-generation"
              title="AI Content Generation"
              description="Automated content creation for marketing, blogs, and social media"
              bullets={[
                "SEO-optimized content",
                "Multi-language support",
                "Brand voice customization"
              ]}
              icon="✍️"
              pricing="From $800/month"
            />
            <ServiceCard
              href="/services/ai-analytics-dashboard"
              title="AI Analytics Dashboard"
              description="Real-time business intelligence with predictive insights"
              bullets={[
                "Real-time data visualization",
                "Predictive analytics",
                "Custom KPI tracking"
              ]}
              icon="📈"
              pricing="From $2,200/month"
            />
            <ServiceCard
              href="/services/ai-project-management"
              title="AI Project Management"
              description="Intelligent project tracking and resource optimization"
              bullets={[
                "Smart task prioritization",
                "Resource allocation AI",
                "Progress prediction"
              ]}
              icon="📋"
              pricing="From $1,800/month"
            />
            <ServiceCard
              href="/services/ai-customer-support"
              title="AI Customer Support"
              description="Automated customer service with human-like interactions"
              bullets={[
                "24/7 automated support",
                "Sentiment analysis",
                "Escalation management"
              ]}
              icon="🎧"
              pricing="From $1,200/month"
            />
            <ServiceCard
              href="/services/ai-marketing-automation"
              title="AI Marketing Automation"
              description="Intelligent marketing campaigns and lead nurturing"
              bullets={[
                "Behavioral targeting",
                "A/B testing automation",
                "ROI optimization"
              ]}
              icon="📢"
              pricing="From $2,500/month"
            />
            <ServiceCard
              href="/services/ai-financial-analytics"
              title="AI Financial Analytics"
              description="Advanced financial modeling and risk assessment"
              bullets={[
                "Risk prediction models",
                "Fraud detection",
                "Investment analysis"
              ]}
              icon="💰"
              pricing="From $3,500/month"
            />
            <ServiceCard
              href="/services/ai-inventory-management"
              title="AI Inventory Management"
              description="Smart inventory optimization and demand forecasting"
              bullets={[
                "Demand forecasting",
                "Automated reordering",
                "Waste reduction"
              ]}
              icon="📦"
              pricing="From $1,600/month"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scalable, secure, and robust solutions designed for large organizations and enterprise needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              href="/services/cloud-migration"
              title="Cloud Migration"
              description="Seamless migration to AWS, Azure, or GCP with zero downtime"
              bullets={[
                "Multi-cloud strategy",
                "Data migration automation",
                "Cost optimization"
              ]}
              icon="☁️"
              pricing="From $15,000/project"
            />
            <ServiceCard
              href="/services/cybersecurity"
              title="Cybersecurity Suite"
              description="Comprehensive security solutions and compliance management"
              bullets={[
                "Security assessment",
                "Threat detection",
                "Compliance automation"
              ]}
              icon="🔒"
              pricing="From $8,000/month"
            />
            <ServiceCard
              href="/services/devops-automation"
              title="DevOps Automation"
              description="CI/CD pipelines, infrastructure as code, and automated deployments"
              bullets={[
                "CI/CD pipeline setup",
                "Infrastructure automation",
                "Monitoring & alerting"
              ]}
              icon="🔄"
              pricing="From $5,000/month"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for
              businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              number="500+"
              label="Successful Projects"
              description="Delivered across 15+ industries"
            />
            <StatCard
              number="$2B+"
              label="Combined Market Value"
              description="Generated for our clients"
            />
            <StatCard
              number="99.9%"
              label="Uptime Guarantee"
              description="With 24/7 monitoring & support"
            />
            <StatCard
              number="300%"
              label="Average ROI"
              description="For our technology solutions"
            />
          </div>
        </div>
      </section>

      <CTA />

      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your project and how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </Link>
          <a
            href="https://ziontechgroup.com"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Visit Main Site
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
  href: string; 
  title: string; 
  description: string; 
  bullets: string[]; 
  icon: string; 

    </div>
  );
}

function ServiceCard({}
  href,
  title,
  description,
  bullets,
  icon,

  pricing
}: {

}: {}

  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;

  pricing: string;

      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function StatCard({ 
  number, 
  label, 
  description;
}: {}
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">

}) {}
  return ("
    <div className="text-center">"
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>"
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>"
      <div className="text-sm text-gray-600">{description}</div>
    </div>

  );
}

function CTA() {}
  return ("
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">"

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>"
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">

        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
      </p>

"

        {" "}
Talk to our experts about your project. We&apos;ll help you choose the right
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a"
          href="tel:+13024640950""
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >

          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}

        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >

        </a>

      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>

    </div>
  );

        </a>
      </div>
    </div>
  );

}

import React from 'react';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page solutions for your business needs.',
  keywords: 'page',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Solutions</h3>
              <p className="text-gray-600">We specialize in delivering targeted solutions that address your specific business challenges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver high-quality solutions quickly without compromising on performance or security.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">We work closely with you as a trusted technology partner for long-term success.</p>
            </div>

          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and discover how our solutions can accelerate your business growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered automation to complete IT infrastructure, we provide end-to-end solutions for your business needs.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
          <p className="text-sm mt-8 opacity-80">
            364 E Main St STE 1008, Middletown DE 19709
          </p>

        </div>
      </div>
    </div>
  )
}


import { Metadata } from 'next';
import Link from "next/link";
import React from 'react';

export const metadata: Metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI development, micro SaaS solutions, FinTech applications, HealthTech innovations, and EdTech platforms. Transform your business with cutting-edge technology."
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Projects Delivered"
            description="Successful implementations"
          />
          <StatCard 
            number="$2B+" 
            label="Market Value Created"
            description="For our clients"
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee"
            description="Reliable performance"
          />
          <StatCard 
            number="24/7" 
            label="Expert Support"
            description="Always available"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="Custom AI solutions including LLMs, RAG systems, and automation"
          bullets={[
            "Custom LLM development",
            "RAG systems",
            "AI automation",
          ]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech"
          description="Financial technology solutions with compliance and security"
          bullets={[
            "Payment processing",
            "Compliance solutions",
            "Risk management",
          ]}
          icon="💰"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Comprehensive security solutions and threat protection"
          bullets={[
            "Security assessments",
            "Threat detection",
            "Compliance audits",
          ]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Business intelligence and data-driven insights"
          bullets={[
            "Real-time dashboards",
            "Predictive analytics",
            "Data visualization",
          ]}
          icon="📊"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Complete IT infrastructure and support solutions"
          bullets={[
            "Cloud migration",
            "System administration",
            "Technical support",
          ]}
          icon="💻"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a custom solution that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label, description }: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
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
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
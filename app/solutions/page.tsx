import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions - Comprehensive Technology Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations and drive growth.",
  keywords: "AI solutions, technology solutions, business transformation, digital innovation, automation, cloud solutions",
};

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

function SolutionCard({ title, description, icon, features, href }: SolutionCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link href={href} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
        Learn More
      </Link>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SolutionCard
            title="AI-Powered Solutions"
            description="Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making."
            icon="🤖"
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
            href="/services/ai-services"
          />
          <SolutionCard
            title="Micro SaaS Development"
            description="Build and launch revenue-generating micro SaaS products with our comprehensive development services."
            icon="💼"
            features={["AI-Powered Tools", "Analytics & BI", "Productivity Apps", "Financial Tools"]}
            href="/services/micro-saas"
          />
          <SolutionCard
            title="Cloud & Infrastructure"
            description="Scalable cloud solutions and infrastructure management to support your growing business needs."
            icon="☁️"
            features={["Cloud Migration", "DevOps Automation", "Containerization", "Monitoring & Security"]}
            href="/services/it-services"
          />
          <SolutionCard
            title="Data & Analytics"
            description="Transform your data into actionable insights with advanced analytics and business intelligence solutions."
            icon="📊"
            features={["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reporting"]}
            href="/services/data-analytics"
          />
          <SolutionCard
            title="Cybersecurity"
            description="Comprehensive security solutions to protect your business from cyber threats and ensure compliance."
            icon="🔒"
            features={["Threat Detection", "Compliance Management", "Security Audits", "Incident Response"]}
            href="/services/cybersecurity"
          />
          <SolutionCard
            title="Blockchain Solutions"
            description="Innovative blockchain and Web3 solutions for secure, decentralized applications and services."
            icon="🔗"
            features={["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Cross-Chain Solutions"]}
            href="/services/blockchain"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement the right technology solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}
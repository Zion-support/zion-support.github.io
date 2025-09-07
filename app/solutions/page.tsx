import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
  keywords: "AI solutions, technology solutions, business transformation, automation, digital innovation",
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: "Solutions | Zion Tech Group",
    description: "Comprehensive AI and technology solutions designed to transform your business operations.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Solutions | Zion Tech Group",
    description: "Comprehensive AI and technology solutions designed to transform your business operations.",
  },
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
    <Link
      href={href}
      className="group block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
    >
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              • {feature}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making.",
      icon: "🤖",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      href: "/services/ai-services"
    },
    {
      title: "Micro SaaS Development",
      description: "Build scalable, revenue-generating software products that solve specific business problems.",
      icon: "🚀",
      features: ["Full-Stack Development", "Payment Integration", "User Management", "Analytics"],
      href: "/services/micro-saas"
    },
    {
      title: "IT Infrastructure",
      description: "Modernize your IT infrastructure with cloud migration, DevOps, and security solutions.",
      icon: "⚙️",
      features: ["Cloud Migration", "DevOps & SRE", "Cybersecurity", "Infrastructure Management"],
      href: "/services/it-services"
    },
    {
      title: "Blockchain Solutions",
      description: "Implement decentralized solutions including DeFi, NFTs, and Web3 applications.",
      icon: "⛓️",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Apps"],
      href: "/services/blockchain-solutions"
    },
    {
      title: "AI Automation",
      description: "Automate business processes with intelligent workflows and robotic process automation.",
      icon: "⚡",
      features: ["RPA", "Workflow Automation", "Process Mining", "Cognitive Automation"],
      href: "/services/ai-automation-suite"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence.",
      icon: "📊",
      features: ["Business Intelligence", "Predictive Analytics", "Data Warehousing", "Real-time Dashboards"],
      href: "/services/data-analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  pricing?: string;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
  pricing,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon && <span className="text-2xl mr-3" aria-hidden="true">{icon}</span>}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {pricing && (
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {pricing}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
        Learn more →
      </div>
    </Link>
  );
}

export default function ServicesGrid() {
  const services = [
    {
      title: "AI Code Assistant",
      href: "/services/ai-code-assistant",
      description: "Intelligent code generation, debugging, and optimization powered by advanced AI models.",
      icon: "🤖",
      pricing: "From $99/month",
      bullets: [
        "Automated code generation",
        "Real-time debugging assistance",
        "Code optimization suggestions",
        "Multi-language support"
      ]
    },
    {
      title: "Business Automation",
      href: "/services/business-automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      icon: "⚡",
      pricing: "Custom pricing",
      bullets: [
        "Workflow automation",
        "Process optimization",
        "Integration solutions",
        "Custom automation scripts"
      ]
    },
    {
      title: "Cloud Security Audit",
      href: "/services/cloud-security-audit",
      description: "Comprehensive security assessment and hardening for your cloud infrastructure.",
      icon: "🔒",
      pricing: "From $299/audit",
      bullets: [
        "Security vulnerability assessment",
        "Compliance checking",
        "Penetration testing",
        "Security recommendations"
      ]
    },
    {
      title: "AI Project Manager",
      href: "/services/ai-project-manager",
      description: "AI-powered project management tools to optimize team productivity and project delivery.",
      icon: "📊",
      pricing: "From $199/month",
      bullets: [
        "Intelligent task scheduling",
        "Resource optimization",
        "Risk assessment",
        "Progress tracking"
      ]
    },
    {
      title: "AI Meeting Transcriber",
      href: "/services/ai-meeting-transcriber",
      description: "Advanced AI transcription and analysis for meetings and conferences.",
      icon: "🎤",
      pricing: "From $49/month",
      bullets: [
        "Real-time transcription",
        "Speaker identification",
        "Action item extraction",
        "Meeting summaries"
      ]
    },
    {
      title: "Consulting Services",
      href: "/services/consulting",
      description: "Expert technology consulting to guide your digital transformation journey.",
      icon: "💡",
      pricing: "Custom pricing",
      bullets: [
        "Technology strategy",
        "Digital transformation",
        "Architecture design",
        "Implementation guidance"
      ]
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            href={service.href}
            description={service.description}
            bullets={service.bullets}
            icon={service.icon}
            pricing={service.pricing}
          />
        ))}
      </div>
    </div>
  );
}
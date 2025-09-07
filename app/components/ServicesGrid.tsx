<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Micro SaaS',
    description: 'End-to-end product engineering with billing, auth, analytics and growth.',
    href: '/services/micro-saas',
    icon: '🚀'
  },
  {
    title: 'AI Services',
    description: 'LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps.',
    href: '/services/ai-services',
    icon: '🤖'
  },
  {
    title: 'IT Services',
    description: 'Cloud migration, DevOps, SRE, security hardening and cost optimization.',
    href: '/services/it-services',
    icon: '⚙️'
  },
  {
    title: 'Blockchain Solutions',
    description: 'Smart contracts, DeFi protocols, NFT platforms, and Web3 applications.',
    href: '/services/blockchain',
    icon: '⛓️'
  },
  {
    title: 'Automation Services',
    description: 'RPA, workflow automation, and AI-powered business process optimization.',
    href: '/services/automation',
    icon: '⚡'
  },
  {
    title: 'Technology Consulting',
    description: 'Digital transformation, technology strategy, and architecture consulting.',
    href: '/services/consulting',
    icon: '📋'
  }
];

export default function ServicesGrid() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    </div>
  );
}
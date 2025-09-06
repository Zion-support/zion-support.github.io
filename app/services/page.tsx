import React from 'react';
import Link from 'next/link';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  const allServices = [
    {
      title: "AI Services",
      href: "/services/ai-services",
      description: "Cutting-edge artificial intelligence solutions for your business needs.",
      icon: "🤖",
      bullets: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Assistants"
      ]
    },
    {
      title: "Micro SaaS Solutions",
      href: "/services/micro-saas",
      description: "Scalable software-as-a-service solutions for modern businesses.",
      icon: "🚀",
      bullets: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "Cloud Integration",
        "User Authentication"
      ]
    },
    {
      title: "IT Services",
      href: "/services/it-services",
      description: "Comprehensive IT infrastructure and support services.",
      icon: "💻",
      bullets: [
        "Cloud Migration",
        "DevOps & SRE",
        "System Administration",
        "Network Security",
        "Infrastructure Management"
      ]
    },
    {
      title: "Blockchain Solutions",
      href: "/services/blockchain-solutions",
      description: "Smart contracts, DeFi protocols, NFT platforms and Web3 solutions.",
      icon: "⛓️",
      bullets: [
        "Smart Contract Development",
        "DeFi Protocol Design",
        "NFT Marketplace Creation",
        "Web3 Integration",
        "Blockchain Consulting"
      ]
    },
    {
      title: "DevOps Automation",
      href: "/services/devops-automation",
      description: "Streamline your development workflow with automated CI/CD pipelines.",
      icon: "🔧",
      bullets: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Monitoring & Logging",
        "Performance Optimization"
      ]
    },
    {
      title: "Smart Invoice Generator",
      href: "/services/smart-invoice-generator",
      description: "Automated invoice generation with AI-powered data extraction and processing.",
      icon: "📄",
      bullets: [
        "AI-powered Data Extraction",
        "Automated Invoice Creation",
        "Payment Tracking",
        "Multi-currency Support",
        "Integration Capabilities"
      ]
    },
    {
      title: "AI Code Reviewer",
      href: "/services/ai-code-reviewer",
      description: "Automated code review and quality assurance using AI technology.",
      icon: "🔍",
      bullets: [
        "Automated Code Analysis",
        "Security Vulnerability Detection",
        "Performance Optimization Suggestions",
        "Code Quality Metrics",
        "Integration with CI/CD"
      ]
    },
    {
      title: "AI Customer Insights",
      href: "/services/ai-customer-insights",
      description: "Advanced analytics and insights to understand your customers better.",
      icon: "📊",
      bullets: [
        "Customer Behavior Analysis",
        "Predictive Analytics",
        "Sentiment Analysis",
        "Personalization Engine",
        "Real-time Dashboards"
      ]
    },
    {
      title: "AI Meeting Assistant",
      href: "/services/ai-meeting-assistant",
      description: "Intelligent meeting management and transcription services.",
      icon: "🎤",
      bullets: [
        "Real-time Transcription",
        "Meeting Summaries",
        "Action Item Extraction",
        "Calendar Integration",
        "Multi-language Support"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs. 
            From AI-powered tools to complete digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                href={service.href}
                description={service.description}
                bullets={service.bullets}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating 
            custom solutions that perfectly match your unique business requirements.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
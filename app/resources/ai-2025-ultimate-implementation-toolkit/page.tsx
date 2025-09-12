import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI 2025 Ultimate Implementation Toolkit | Zion Tech Group',
  description: 'Complete toolkit for AI implementation in 2025. Includes guides, templates, calculators, and step-by-step instructions for successful AI transformation.',
  keywords: ['AI 2025', 'Implementation Toolkit', 'AI Guide', 'AI Resources', 'AI Templates', 'AI Calculator'],
  openGraph: {
    title: 'AI 2025 Ultimate Implementation Toolkit',
    description: 'Complete toolkit for AI implementation with proven methodologies and tools.',
    type: 'article',
  },
};

export default function AI2025UltimateImplementationToolkit() {
  const toolkitSections = [
    {
      title: "📋 Assessment & Planning",
      description: "Evaluate your AI readiness and create a comprehensive implementation plan",
      items: [
        {
          title: "AI Readiness Assessment",
          description: "Comprehensive evaluation of your organization's AI readiness",
          type: "Assessment",
          link: "/tools/ai-readiness-assessment"
        },
        {
          title: "ROI Calculator",
          description: "Calculate potential return on investment for AI projects",
          type: "Calculator",
          link: "/tools/ai-2025-roi-calculator"
        },
        {
          title: "Implementation Roadmap Template",
          description: "Step-by-step roadmap template for AI implementation",
          type: "Template",
          link: "/resources/ai-implementation-roadmap-template"
        },
        {
          title: "Stakeholder Analysis Framework",
          description: "Framework for identifying and engaging key stakeholders",
          type: "Framework",
          link: "/resources/stakeholder-analysis-framework"
        }
      ]
    },
    {
      title: "🏗️ Technical Implementation",
      description: "Technical guides and tools for implementing AI solutions",
      items: [
        {
          title: "AI Architecture Guide",
          description: "Comprehensive guide to AI system architecture design",
          type: "Guide",
          link: "/resources/ai-architecture-guide"
        },
        {
          title: "Data Preparation Checklist",
          description: "Complete checklist for preparing data for AI implementation",
          type: "Checklist",
          link: "/resources/data-preparation-checklist"
        },
        {
          title: "Model Selection Framework",
          description: "Framework for selecting the right AI models for your use case",
          type: "Framework",
          link: "/resources/model-selection-framework"
        },
        {
          title: "Integration Best Practices",
          description: "Best practices for integrating AI with existing systems",
          type: "Guide",
          link: "/resources/ai-integration-best-practices"
        }
      ]
    },
    {
      title: "📊 Monitoring & Optimization",
      description: "Tools and guides for monitoring and optimizing AI performance",
      items: [
        {
          title: "Performance Monitoring Dashboard",
          description: "Template for monitoring AI system performance",
          type: "Template",
          link: "/tools/ai-performance-monitoring-dashboard"
        },
        {
          title: "Model Drift Detection Guide",
          description: "Guide to detecting and addressing model drift",
          type: "Guide",
          link: "/resources/model-drift-detection-guide"
        },
        {
          title: "Optimization Strategies",
          description: "Strategies for optimizing AI model performance",
          type: "Guide",
          link: "/resources/ai-optimization-strategies"
        },
        {
          title: "A/B Testing Framework",
          description: "Framework for A/B testing AI models",
          type: "Framework",
          link: "/resources/ai-ab-testing-framework"
        }
      ]
    },
    {
      title: "👥 Change Management",
      description: "Resources for managing organizational change during AI implementation",
      items: [
        {
          title: "Change Management Playbook",
          description: "Complete playbook for managing AI-driven change",
          type: "Playbook",
          link: "/resources/ai-change-management-playbook"
        },
        {
          title: "Training Program Templates",
          description: "Templates for training employees on AI systems",
          type: "Template",
          link: "/resources/ai-training-program-templates"
        },
        {
          title: "Communication Strategy Guide",
          description: "Guide for communicating AI changes to stakeholders",
          type: "Guide",
          link: "/resources/ai-communication-strategy-guide"
        },
        {
          title: "Resistance Management Framework",
          description: "Framework for managing resistance to AI adoption",
          type: "Framework",
          link: "/resources/ai-resistance-management-framework"
        }
      ]
    }
  ];

  const quickStartGuides = [
    {
      title: "Getting Started with AI",
      description: "Begin your AI journey with this comprehensive starter guide",
      duration: "30 min read",
      difficulty: "Beginner",
      link: "/resources/ai-getting-started-guide"
    },
    {
      title: "AI Project Planning",
      description: "Plan your AI projects for maximum success and ROI",
      duration: "45 min read",
      difficulty: "Intermediate",
      link: "/resources/ai-project-planning-guide"
    },
    {
      title: "Advanced AI Strategies",
      description: "Advanced strategies for enterprise AI implementation",
      duration: "60 min read",
      difficulty: "Advanced",
      link: "/resources/advanced-ai-strategies-guide"
    }
  ];

  const templates = [
    {
      title: "AI Project Charter Template",
      description: "Template for creating comprehensive AI project charters",
      type: "Document Template",
      link: "/resources/ai-project-charter-template"
    },
    {
      title: "AI Requirements Document",
      description: "Template for documenting AI system requirements",
      type: "Document Template",
      link: "/resources/ai-requirements-document-template"
    },
    {
      title: "AI Testing Checklist",
      description: "Comprehensive checklist for testing AI systems",
      type: "Testing Template",
      link: "/resources/ai-testing-checklist"
    },
    {
      title: "AI Security Assessment",
      description: "Template for assessing AI system security",
      type: "Security Template",
      link: "/resources/ai-security-assessment-template"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              AI 2025 Ultimate Implementation Toolkit
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Everything you need to successfully implement AI in your organization. 
              Comprehensive guides, templates, calculators, and frameworks for AI transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">50+ Resources</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">25+ Templates</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">15+ Calculators</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-semibold">10+ Frameworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{guide.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Start Guide</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Toolkit Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Complete Toolkit Sections
          </h2>
          <div className="space-y-12">
            {toolkitSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  <p className="text-blue-100">{section.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.link}
                        className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                          <span className="text-sm font-medium">Access Resource</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ready-to-Use Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Link
                key={index}
                href={template.link}
                className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {template.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {template.description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Download Template</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Implementation Timeline
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Planning (Weeks 1-4)</h3>
                  <p className="text-gray-700 mb-4">
                    Use our assessment tools to evaluate your AI readiness and create a comprehensive implementation plan.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">AI Readiness Assessment</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">ROI Calculator</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Roadmap Template</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Implementation (Weeks 5-12)</h3>
                  <p className="text-gray-700 mb-4">
                    Follow our technical guides to implement AI solutions with proper architecture and integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Architecture Guide</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Data Preparation</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Model Selection</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Change Management (Weeks 13-16)</h3>
                  <p className="text-gray-700 mb-4">
                    Manage organizational change with our proven change management frameworks and training programs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Change Playbook</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Training Templates</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Communication Guide</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Optimization (Ongoing)</h3>
                  <p className="text-gray-700 mb-4">
                    Continuously monitor and optimize your AI systems using our monitoring tools and optimization strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">Performance Dashboard</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">Drift Detection</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">A/B Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8">
            Get started with our comprehensive toolkit and join thousands of companies 
            already achieving breakthrough results with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/ai-2025-content-showcase"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
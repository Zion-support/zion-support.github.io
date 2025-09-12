import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Card from '../../components/ui/Card';
import FeatureCard from '../../components/FeatureCard';

export default function AIResources2025() {
  const resources = [
    {
      title: "AI Implementation Masterclass 2025",
      description: "Comprehensive guide to implementing AI solutions in enterprise environments with real-world case studies.",
      type: "Course",
      duration: "8 hours",
      level: "Advanced",
      href: "/webinars/ai-2025-implementation-masterclass",
      featured: true
    },
    {
      title: "AI Governance Blueprint",
      description: "Complete framework for establishing AI governance, ethics, and compliance in your organization.",
      type: "Guide",
      duration: "2 hours",
      level: "Intermediate",
      href: "/blog/ai-2025-ai-governance-blueprint",
      featured: true
    },
    {
      title: "AI Cost Optimization Playbook",
      description: "Strategies and techniques for optimizing AI infrastructure costs while maintaining performance.",
      type: "Playbook",
      duration: "1.5 hours",
      level: "Intermediate",
      href: "/blog/ai-2025-cost-guardrails",
      featured: true
    },
    {
      title: "AI Security Hardening Guide",
      description: "Comprehensive security measures and best practices for protecting AI systems and data.",
      type: "Guide",
      duration: "3 hours",
      level: "Advanced",
      href: "/blog/ai-2025-ai-security-hardening-blueprint",
      featured: false
    },
    {
      title: "AI Ethics Framework",
      description: "Ethical guidelines and frameworks for responsible AI development and deployment.",
      type: "Framework",
      duration: "2 hours",
      level: "All Levels",
      href: "/blog/ai-2025-ethical-ai-framework",
      featured: false
    },
    {
      title: "AI ROI Calculator Guide",
      description: "Step-by-step guide to calculating and maximizing ROI from AI investments.",
      type: "Guide",
      duration: "1 hour",
      level: "Beginner",
      href: "/tools/ai-roi-calculator",
      featured: false
    },
    {
      title: "AI Readiness Assessment",
      description: "Comprehensive assessment tool to evaluate your organization's AI readiness.",
      type: "Assessment",
      duration: "30 minutes",
      level: "All Levels",
      href: "/tools/ai-readiness-assessment",
      featured: false
    },
    {
      title: "AI Trends 2025 Report",
      description: "In-depth analysis of AI trends, predictions, and market insights for 2025.",
      type: "Report",
      duration: "45 minutes",
      level: "All Levels",
      href: "/blog/ai-2025-trends-predictions",
      featured: false
    }
  ];

  const categories = [
    { name: "All Resources", count: resources.length },
    { name: "Courses", count: resources.filter(r => r.type === "Course").length },
    { name: "Guides", count: resources.filter(r => r.type === "Guide").length },
    { name: "Playbooks", count: resources.filter(r => r.type === "Playbook").length },
    { name: "Frameworks", count: resources.filter(r => r.type === "Framework").length },
    { name: "Assessments", count: resources.filter(r => r.type === "Assessment").length },
    { name: "Reports", count: resources.filter(r => r.type === "Report").length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <SEO
        title="AI Resources 2025 - Zion Tech Group"
        description="Access our comprehensive collection of AI resources, guides, courses, and tools to accelerate your AI journey in 2025."
        keywords="AI resources, AI courses, AI guides, AI frameworks, AI assessments, AI training"
        url="/ai-resources-2025"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Resources 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Access our comprehensive collection of AI resources, guides, courses, and tools 
            designed to accelerate your AI journey and maximize your success in 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              📚 Comprehensive Library
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              🎓 Expert Content
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              🚀 Latest 2025 Updates
            </span>
          </div>
        </div>

        {/* Resource Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{resources.length}</div>
            <div className="text-gray-600">Total Resources</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {resources.filter(r => r.featured).length}
            </div>
            <div className="text-gray-600">Featured Resources</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-pink-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600">Resource Categories</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Access Available</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.name === "All Resources"
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.filter(resource => resource.featured).map((resource) => (
              <Card key={resource.title} className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">
                      {resource.type === "Course" ? "🎓" : 
                       resource.type === "Guide" ? "📖" :
                       resource.type === "Playbook" ? "📋" :
                       resource.type === "Framework" ? "🏗️" :
                       resource.type === "Assessment" ? "📊" : "📄"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {resource.duration}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {resource.level}
                    </span>
                  </div>
                  <Link 
                    href={resource.href}
                    className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Access Resource
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Resources Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">
                      {resource.type === "Course" ? "🎓" : 
                       resource.type === "Guide" ? "📖" :
                       resource.type === "Playbook" ? "📋" :
                       resource.type === "Framework" ? "🏗️" :
                       resource.type === "Assessment" ? "📊" : "📄"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                          {resource.type}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {resource.duration}
                        </span>
                      </div>
                      <Link 
                        href={resource.href}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                      >
                        Access →
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beginner Path</h3>
              <p className="text-gray-600 mb-6">
                Start your AI journey with foundational concepts and basic tools.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AI Readiness Assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AI Trends 2025 Report
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  AI ROI Calculator Guide
                </li>
              </ul>
              <Link 
                href="/ai-resources-2025?level=beginner"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Start Learning Path →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intermediate Path</h3>
              <p className="text-gray-600 mb-6">
                Build on your foundation with practical implementation guides and frameworks.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI Governance Blueprint
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI Cost Optimization Playbook
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  AI Ethics Framework
                </li>
              </ul>
              <Link 
                href="/ai-resources-2025?level=intermediate"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Start Learning Path →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Path</h3>
              <p className="text-gray-600 mb-6">
                Master advanced AI concepts with comprehensive courses and expert guidance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  AI Implementation Masterclass
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  AI Security Hardening Guide
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Advanced AI Tools
                </li>
              </ul>
              <Link 
                href="/ai-resources-2025?level=advanced"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Start Learning Path →
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your AI Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Access our comprehensive AI resources library and start your journey to AI mastery today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Resources
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Personalized Recommendations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
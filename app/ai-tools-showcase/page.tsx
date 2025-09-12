import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Card from '../../components/ui/Card';
import FeatureCard from '../../components/FeatureCard';

export default function AIToolsShowcase() {
  const tools = [
    {
      title: "AI ROI Calculator",
      description: "Calculate the return on investment for your AI implementation projects with our comprehensive ROI calculator.",
      icon: "💰",
      href: "/tools/ai-roi-calculator",
      category: "Business Tools",
      featured: true
    },
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's readiness for AI implementation with our comprehensive assessment tool.",
      icon: "📊",
      href: "/tools/ai-readiness-assessment",
      category: "Assessment Tools",
      featured: true
    },
    {
      title: "AI Security Assessment",
      description: "Assess and strengthen your AI systems' security posture with our advanced security evaluation tool.",
      icon: "🔒",
      href: "/tools/ai-security-assessment",
      category: "Security Tools",
      featured: true
    },
    {
      title: "AI Model Monitor",
      description: "Monitor your AI models' performance in real-time with comprehensive analytics and alerting.",
      icon: "📈",
      href: "/tools/ai-model-monitor",
      category: "Monitoring Tools",
      featured: false
    },
    {
      title: "AI Cost Optimizer",
      description: "Optimize your AI infrastructure costs with intelligent resource allocation and scaling recommendations.",
      icon: "⚡",
      href: "/tools/ai-cost-optimizer",
      category: "Optimization Tools",
      featured: false
    },
    {
      title: "AI Ethics Checker",
      description: "Ensure your AI systems meet ethical standards with our comprehensive ethics evaluation framework.",
      icon: "⚖️",
      href: "/tools/ai-ethics-checker",
      category: "Ethics Tools",
      featured: false
    },
    {
      title: "AI Strategy Planner",
      description: "Plan your AI strategy with our comprehensive planning tool that considers all aspects of AI implementation.",
      icon: "🎯",
      href: "/tools/ai-strategy-planner",
      category: "Strategy Tools",
      featured: false
    },
    {
      title: "AI Analytics Dashboard",
      description: "Get comprehensive insights into your AI systems with our advanced analytics dashboard.",
      icon: "📊",
      href: "/tools/ai-analytics-dashboard",
      category: "Analytics Tools",
      featured: false
    },
    {
      title: "AI Training Simulator",
      description: "Train your team on AI concepts and best practices with our interactive training simulator.",
      icon: "🎓",
      href: "/tools/ai-training-simulator",
      category: "Training Tools",
      featured: false
    }
  ];

  const categories = [
    "All Tools",
    "Business Tools",
    "Assessment Tools",
    "Security Tools",
    "Monitoring Tools",
    "Optimization Tools",
    "Ethics Tools",
    "Strategy Tools",
    "Analytics Tools",
    "Training Tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO
        title="AI Tools Showcase - Zion Tech Group"
        description="Discover our comprehensive collection of AI tools, calculators, and assessment platforms designed to accelerate your AI journey."
        keywords="AI tools, AI calculators, AI assessment, AI monitoring, AI optimization, AI strategy"
        url="/ai-tools-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Tools Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of AI tools, calculators, and assessment platforms 
            designed to accelerate your AI journey and maximize your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              🛠️ Professional Tools
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              📊 Analytics & Insights
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              🎯 Strategic Planning
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All Tools"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.filter(tool => tool.featured).map((tool) => (
              <Card key={tool.title} className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{tool.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <Link 
                    href={tool.href}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Try Tool
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{tool.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {tool.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tool.category}
                      </span>
                      <Link 
                        href={tool.href}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Try Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tool Categories Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tool Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {category.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category}
                </h3>
                <p className="text-sm text-gray-600">
                  {tools.filter(tool => tool.category === category).length} tools
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your AI Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start using our professional AI tools today and unlock the full potential of artificial intelligence for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/tools"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Tools
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Custom Tools
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
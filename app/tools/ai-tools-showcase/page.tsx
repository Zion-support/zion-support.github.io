import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import Card from '../../../components/ui/Card';

export default function AIToolsShowcase() {
  const aiTools = [
    {
      title: "AI ROI Calculator",
      description: "Calculate the return on investment for your AI implementations with our comprehensive ROI calculator.",
      features: ["Cost analysis", "Time savings calculation", "Revenue impact assessment", "Custom metrics"],
      link: "/tools/ai-roi-calculator",
      category: "Analytics",
      rating: 4.9
    },
    {
      title: "AI Readiness Assessment",
      description: "Evaluate your organization's readiness for AI transformation with our comprehensive assessment tool.",
      features: ["Technical readiness", "Data quality analysis", "Team capability assessment", "Strategic alignment"],
      link: "/tools/ai-readiness-assessment",
      category: "Assessment",
      rating: 4.8
    },
    {
      title: "AI Implementation Roadmap Generator",
      description: "Generate personalized AI implementation roadmaps based on your organization's specific needs.",
      features: ["Custom roadmaps", "Timeline planning", "Resource allocation", "Risk assessment"],
      link: "/tools/ai-roadmap-generator",
      category: "Planning",
      rating: 4.7
    },
    {
      title: "AI Model Performance Monitor",
      description: "Monitor and optimize your AI model performance with real-time analytics and insights.",
      features: ["Real-time monitoring", "Performance metrics", "Alert system", "Optimization suggestions"],
      link: "/tools/ai-model-monitor",
      category: "Monitoring",
      rating: 4.9
    },
    {
      title: "AI Ethics Compliance Checker",
      description: "Ensure your AI implementations comply with ethical guidelines and regulatory requirements.",
      features: ["Bias detection", "Fairness assessment", "Transparency evaluation", "Compliance reporting"],
      link: "/tools/ai-ethics-checker",
      category: "Compliance",
      rating: 4.6
    },
    {
      title: "AI Cost Optimizer",
      description: "Optimize your AI infrastructure costs while maintaining performance and reliability.",
      features: ["Cost analysis", "Resource optimization", "Performance tuning", "Budget forecasting"],
      link: "/tools/ai-cost-optimizer",
      category: "Optimization",
      rating: 4.8
    }
  ];

  const categories = ["All", "Analytics", "Assessment", "Planning", "Monitoring", "Compliance", "Optimization"];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Tools Showcase - Zion Tech Group"
        description="Explore our comprehensive collection of AI tools and calculators to optimize your AI implementations and drive business success."
        keywords="AI tools, AI calculator, AI assessment, AI monitoring, AI optimization, business intelligence"
        url="/tools/ai-tools-showcase"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🚀 AI Tools & Calculators
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Empower your AI journey with our comprehensive suite of tools, calculators, and assessment frameworks designed to maximize your AI success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/ai-roi-calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                🧮 Try ROI Calculator
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                💬 Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {tool.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={tool.link}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Launch Tool
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our AI tools are just the beginning. Get personalized consultation and implementation support from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              🔧 View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
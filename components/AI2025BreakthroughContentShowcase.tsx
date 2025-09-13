import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, Zap, Target } from 'lucide-react';

export default function AI2025BreakthroughContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Revolution",
      description: "Discover the revolutionary AI breakthroughs of 2025 that are transforming industries and creating unprecedented opportunities for growth and innovation.",
      href: "/ai-2025-breakthrough-revolution",
      type: "Featured Page",
      metrics: "5000% ROI",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "How a Fortune 500 company achieved 10,000% ROI through AI 2025 breakthrough technologies, transforming their entire operation in just 6 months.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      type: "Case Study",
      metrics: "10,000% ROI",
      badge: "SUCCESS",
      badgeColor: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Ultimate Implementation Guide",
      description: "The complete blueprint for successfully implementing AI 2025 breakthrough technologies in your organization with proven strategies and real-world examples.",
      href: "/blog/ai-2025-ultimate-implementation-guide",
      type: "Implementation Guide",
      metrics: "50+ Pages",
      badge: "COMPREHENSIVE",
      badgeColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human thought and AI systems, achieving 10x faster decision-making.",
      href: "/blog/neural-interface-revolution-2025",
      type: "Technology Report",
      metrics: "10x Faster",
      badge: "NEW",
      badgeColor: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      title: "Quantum AI Acceleration",
      description: "Quantum-enhanced machine learning algorithms that process complex data 1000x faster than traditional systems, enabling real-time analysis.",
      href: "/blog/quantum-ai-acceleration-2025",
      type: "Technology Report",
      metrics: "1000x Speed",
      badge: "BREAKTHROUGH",
      badgeColor: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Autonomous Enterprise Agents",
      description: "Self-managing AI agents that handle complex business processes autonomously, reducing operational costs by 80% while improving accuracy.",
      href: "/blog/autonomous-enterprise-agents-2025",
      type: "Solution Guide",
      metrics: "-80% Costs",
      badge: "HOT",
      badgeColor: "from-orange-500 to-red-500"
    },
    {
      id: 7,
      title: "Healthcare AI Transformation",
      description: "Revolutionary AI applications in healthcare that are improving patient outcomes by 95% while reducing treatment costs by 60%.",
      href: "/case-studies/healthcare-ai-transformation-breakthrough",
      type: "Case Study",
      metrics: "95% Improvement",
      badge: "BREAKTHROUGH",
      badgeColor: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Financial Services AI Revolution",
      description: "Advanced AI systems transforming financial services with 99.9% accuracy in fraud detection and 50% faster transaction processing.",
      href: "/case-studies/financial-ai-transformation-2025",
      type: "Case Study",
      metrics: "99.9% Accuracy",
      badge: "PROVEN",
      badgeColor: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Manufacturing AI Optimization",
      description: "AI-powered manufacturing systems that increase production efficiency by 300% while reducing waste by 90% and improving quality control.",
      href: "/case-studies/manufacturing-ai-optimization-2025",
      type: "Case Study",
      metrics: "300% Efficiency",
      badge: "OPTIMIZED",
      badgeColor: "from-teal-500 to-green-500"
    },
    {
      id: 10,
      title: "Retail AI Personalization",
      description: "Advanced AI personalization engines that increase customer engagement by 400% and boost sales by 250% through hyper-targeted experiences.",
      href: "/case-studies/retail-ai-personalization-2025",
      type: "Case Study",
      metrics: "400% Engagement",
      badge: "PERSONALIZED",
      badgeColor: "from-cyan-500 to-blue-500"
    },
    {
      id: 11,
      title: "AI-Powered Supply Chain",
      description: "Intelligent supply chain management systems that reduce costs by 70% while improving delivery times by 85% through predictive analytics.",
      href: "/case-studies/ai-supply-chain-optimization-2025",
      type: "Case Study",
      metrics: "70% Cost Reduction",
      badge: "OPTIMIZED",
      badgeColor: "from-emerald-500 to-teal-500"
    },
    {
      id: 12,
      title: "Enterprise AI Transformation Framework",
      description: "Comprehensive transformation methodology delivering consistent, measurable results.",
      href: "/resources/ai-2025-enterprise-transformation-framework",
      type: "Implementation Guide",
      metrics: "500+ Companies Served",
      badge: "PROVEN",
      badgeColor: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full text-red-700 font-semibold mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI 2025 Breakthrough Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Showcase 2025
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2025 breakthrough content, 
            featuring revolutionary technologies, success stories, and implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <div 
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Content Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.badgeColor} text-white`}>
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500">{content.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {content.metrics}
                  </div>
                  <Link
                    href={content.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:underline"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI 2025?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already implementing our revolutionary AI solutions and achieving unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
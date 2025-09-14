import React from 'react';
import Link from 'next/link';

const ComprehensiveContentShowcase2025 = () => {
  const contentSections = [
    {
      title: "Latest AI Insights",
      description: "Cutting-edge AI strategies and implementation guides",
      icon: "🚀",
      content: [
        {
          title: "AI 2025 Enterprise Integration Mastery",
          description: "Complete implementation guide with 340% average ROI increase",
          href: "/blog/ai-2025-enterprise-integration-mastery",
          new: true,
          featured: true,
          readingTime: "12 min read"
        },
        {
          title: "Quantum AI Business Revolution 2025",
          description: "Discover exponential improvements with quantum AI",
          href: "/blog/quantum-ai-business-revolution-2025",
          new: true,
          featured: true,
          readingTime: "15 min read"
        },
        {
          title: "AI Autonomous Business Operations 2025",
          description: "Self-managing enterprises with 500% productivity increases",
          href: "/blog/ai-autonomous-business-operations-2025",
          new: true,
          featured: true,
          readingTime: "18 min read"
        }
      ]
    },
    {
      title: "Implementation Resources",
      description: "Practical guides and frameworks for AI adoption",
      icon: "📚",
      content: [
        {
          title: "AI Implementation Enterprise Guide 2025",
          description: "Complete roadmap with real-world case studies",
          href: "/resources/ai-implementation-enterprise-guide-2025",
          new: true,
          featured: true,
          readingTime: "25 min read"
        },
        {
          title: "AI ROI Calculator 2025",
          description: "Calculate your potential AI investment returns",
          href: "/tools/ai-roi-calculator",
          new: false,
          featured: false,
          readingTime: "5 min read"
        },
        {
          title: "AI Readiness Assessment Tool",
          description: "Evaluate your organization's AI readiness",
          href: "/tools/ai-readiness-assessment",
          new: false,
          featured: false,
          readingTime: "10 min read"
        }
      ]
    },
    {
      title: "Success Stories",
      description: "Real-world case studies and transformation stories",
      icon: "📊",
      content: [
        {
          title: "Manufacturing: 400% Efficiency Increase",
          description: "How AI transformed production operations",
          href: "/case-studies/manufacturing-ai-success",
          new: false,
          featured: false,
          readingTime: "8 min read"
        },
        {
          title: "Financial Services: $2B Autonomous Trading",
          description: "Bank achieves 300% ROI with AI trading",
          href: "/case-studies/financial-ai-transformation",
          new: false,
          featured: false,
          readingTime: "10 min read"
        },
        {
          title: "Healthcare: Life-Saving AI Implementation",
          description: "Hospital system saves 2,000+ lives annually",
          href: "/case-studies/healthcare-ai-breakthrough",
          new: false,
          featured: false,
          readingTime: "12 min read"
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "AI Projects Delivered", color: "text-purple-600" },
    { number: "340%", label: "Average ROI Increase", color: "text-green-600" },
    { number: "98%", label: "Client Satisfaction", color: "text-blue-600" },
    { number: "24/7", label: "Expert Support", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 COMPREHENSIVE CONTENT LIBRARY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for AI Success
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access our complete library of AI insights, implementation guides, 
            success stories, and practical tools to transform your business
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {contentSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4">{section.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {item.new && (
                          <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.featured && (
                          <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{item.readingTime}</span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm group-hover:underline"
                    >
                      Read More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Proven Results Across Industries
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our AI solutions have delivered measurable results for organizations 
              worldwide, from startups to Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already leveraging our AI solutions 
              to achieve unprecedented growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;
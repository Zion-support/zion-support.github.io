import React from 'react';
// Removed react-helmet-async for Next.js compatibility
import { Download, FileText, Calendar, User, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

const WhitePapersPage: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Enterprise: A Comprehensive Guide",
      description: "Explore the latest trends, challenges, and opportunities in enterprise AI implementation. This comprehensive guide covers everything from strategy to execution.",
      author: "Dr. Sarah Johnson, AI Research Director",
      date: "2025-01-15",
      category: "Artificial Intelligence",
      pages: 45,
      downloads: 1250,
      views: 3200,
      fileSize: "2.3 MB",
      image: "/images/whitepapers/ai-enterprise.jpg",
      slug: "future-ai-enterprise-guide"
    },
    {
      id: 2,
      title: "Cloud Security Best Practices: Protecting Your Digital Assets",
      description: "Learn essential cloud security strategies and best practices to protect your organization's data and infrastructure in today's threat landscape.",
      author: "Mike Chen, Cybersecurity Expert",
      date: "2025-01-12",
      category: "Cybersecurity",
      pages: 32,
      downloads: 980,
      views: 2100,
      fileSize: "1.8 MB",
      image: "/images/whitepapers/cloud-security.jpg",
      slug: "cloud-security-best-practices"
    },
    {
      id: 3,
      title: "Digital Transformation Roadmap: A Strategic Framework",
      description: "Navigate your digital transformation journey with our proven framework. Includes case studies, implementation strategies, and ROI measurement techniques.",
      author: "Alex Rodriguez, Digital Strategy Consultant",
      date: "2025-01-10",
      category: "Digital Transformation",
      pages: 38,
      downloads: 1150,
      views: 2800,
      fileSize: "2.1 MB",
      image: "/images/whitepapers/digital-transformation.jpg",
      slug: "digital-transformation-roadmap"
    },
    {
      id: 4,
      title: "Micro SaaS Development: Building Profitable Small-Scale Solutions",
      description: "Discover the secrets to building successful micro SaaS products. Learn about market validation, development strategies, and scaling techniques.",
      author: "Emily Watson, SaaS Product Manager",
      date: "2025-01-08",
      category: "SaaS Development",
      pages: 28,
      downloads: 750,
      views: 1800,
      fileSize: "1.5 MB",
      image: "/images/whitepapers/micro-saas.jpg",
      slug: "micro-saas-development-guide"
    },
    {
      id: 5,
      title: "Data Analytics and Business Intelligence: Turning Data into Decisions",
      description: "Master the art of data-driven decision making. This guide covers analytics frameworks, tools, and implementation strategies for modern businesses.",
      author: "David Kim, Data Analytics Director",
      date: "2025-01-05",
      category: "Data Analytics",
      pages: 42,
      downloads: 890,
      views: 2200,
      fileSize: "2.0 MB",
      image: "/images/whitepapers/data-analytics.jpg",
      slug: "data-analytics-business-intelligence"
    },
    {
      id: 6,
      title: "DevOps Automation: Streamlining Development and Operations",
      description: "Learn how to implement effective DevOps practices to accelerate development cycles, improve quality, and reduce operational overhead.",
      author: "Lisa Thompson, DevOps Engineer",
      date: "2025-01-03",
      category: "DevOps",
      pages: 35,
      downloads: 650,
      views: 1600,
      fileSize: "1.7 MB",
      image: "/images/whitepapers/devops-automation.jpg",
      slug: "devops-automation-guide"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Cybersecurity", "Digital Transformation", "SaaS Development", "Data Analytics", "DevOps"];

  return (
    <>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Research & Insights
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Access our comprehensive white papers and research reports on the latest technology trends, best practices, and industry insights.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* White Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FileText className="w-16 h-16 mx-auto mb-2" />
                    <div className="text-lg font-bold">{paper.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {paper.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(paper.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{paper.pages} pages</span>
                    <span>{paper.fileSize}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{paper.downloads.toLocaleString()} downloads</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{paper.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <Link
                      href={`/white-papers/${paper.slug}`}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new white papers, research reports, and industry insights.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhitePapersPage;
import React from 'react';
import Link from 'next/link';

const AnalyticsContentShowcase2025 = () => {
  const analyticsContent = [
    {
      title: "Advanced Data Visualization",
      description: "Interactive dashboards with 3D visualizations and real-time updates",
      image: "📈",
      link: "/analytics/visualization",
      category: "Visualization"
    },
    {
      title: "Machine Learning Pipelines",
      description: "End-to-end ML pipelines for automated model training and deployment",
      image: "🤖",
      link: "/analytics/ml-pipelines",
      category: "Machine Learning"
    },
    {
      title: "Business Intelligence Suite",
      description: "Comprehensive BI tools with natural language querying capabilities",
      image: "💼",
      link: "/analytics/business-intelligence",
      category: "Business Intelligence"
    },
    {
      title: "Data Governance Framework",
      description: "Enterprise-grade data governance with compliance and security controls",
      image: "🛡️",
      link: "/analytics/data-governance",
      category: "Governance"
    },
    {
      title: "Real-Time Streaming Analytics",
      description: "Process and analyze streaming data with Apache Kafka and Spark",
      image: "🌊",
      link: "/analytics/streaming",
      category: "Streaming"
    },
    {
      title: "AI-Powered Data Quality",
      description: "Automated data quality assessment and cleansing using AI algorithms",
      image: "✨",
      link: "/analytics/data-quality",
      category: "Data Quality"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Analytics Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of analytics contentoolsand resources 
            designed to help you master the data revolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsContent.map((contentindex) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{content.image}</div>
                <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {content.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <Link
                  href={content.link}
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/analytics"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            View All Analytics Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsContentShowcase2025;
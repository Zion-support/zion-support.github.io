import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI Transformation Case Studies - Success Stories & ROI Results | Zion Tech Group',
  description: 'Explore real-world AI transformation success stories from Fortune 500 companies. Discover how organizations achieved 2,500% ROI and $50M+ in savings.',
  keywords: [
    'AI case studies', 'transformation success', 'Fortune 500 AI', 'ROI results', 
    'enterprise AI', 'business transformation', 'AI implementation', 'success stories'
  ],
};

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation: 2,500% ROI Success Story",
      description: "How a Fortune 500 company achieved unprecedented success through comprehensive AI transformation, delivering 2,500% ROI and $50M+ in annual savings.",
      slug: "fortune-500-ai-transformation-success",
      industry: "Global Manufacturing",
      revenue: "$15+ billion",
      employees: "50,000+",
      roi: "2,500%",
      savings: "$50.2M",
      featured: true,
      image: "/images/fortune-500-ai-success.jpg"
    },
    {
      title: "Financial Services AI Revolution: 78% Efficiency Gains",
      description: "A major bank deployed AI-powered customer service solutions achieving 78% reduction in response time and $8.7M in operational savings.",
      slug: "financial-services-ai-revolution",
      industry: "Financial Services",
      revenue: "$8+ billion",
      employees: "25,000+",
      roi: "1,800%",
      savings: "$8.7M",
      featured: true,
      image: "/images/financial-ai-success.jpg"
    },
    {
      title: "Healthcare AI Implementation: 95% Accuracy in Diagnostics",
      description: "Leading healthcare provider implemented AI diagnostic systems achieving 95% accuracy and 60% faster patient diagnosis.",
      slug: "healthcare-ai-diagnostics",
      industry: "Healthcare",
      revenue: "$3+ billion",
      employees: "15,000+",
      roi: "1,200%",
      savings: "$12.5M",
      featured: false,
      image: "/images/healthcare-ai-success.jpg"
    }
  ];

  const industries = [
    { name: "Manufacturing", count: 8, icon: "🏭" },
    { name: "Financial Services", count: 6, icon: "🏦" },
    { name: "Healthcare", count: 5, icon: "🏥" },
    { name: "Retail", count: 4, icon: "🛍️" },
    { name: "Technology", count: 7, icon: "💻" }
  ];

  return (
    <div>
      <SEO
        title="AI Transformation Case Studies - Success Stories & ROI Results"
        description="Explore real-world AI transformation success stories from Fortune 500 companies. Discover how organizations achieved 2,500% ROI and $50M+ in savings."
        keywords="AI case studies, transformation success, Fortune 500 AI, ROI results, enterprise AI, business transformation, AI implementation, success stories"
        url="/case-studies"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Transformation Success Stories
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Real results from real companies. Discover how organizations achieved unprecedented success through AI transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold">2,500%</div>
                  <div className="text-sm">Maximum ROI Achieved</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold">$50M+</div>
                  <div className="text-sm">Average Annual Savings</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Across Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <div className="text-sm text-gray-600">{industry.count} Case Studies</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Success Stories</h2>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <span className="text-8xl">📈</span>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {study.industry}
                        </span>
                        {study.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {study.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{study.revenue}</div>
                          <div className="text-xs text-gray-600">Annual Revenue</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{study.employees}</div>
                          <div className="text-xs text-gray-600">Employees</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">{study.roi}</div>
                          <div className="text-xs text-gray-600">ROI Achieved</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{study.savings}</div>
                          <div className="text-xs text-gray-600">Annual Savings</div>
                        </div>
                      </div>
                      
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                      >
                        Read Full Case Study →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let our experts help you create your own AI transformation success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
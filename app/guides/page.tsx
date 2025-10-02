import React from 'react';

export const metadata = {
  title: 'Implementation Guides | Zion Tech Group',
  description: 'Comprehensive guides for AI implementation, micro SaaS development, and IT transformation.',
  keywords: 'AI implementation guides, micro SaaS development, IT transformation, technology guides',
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'AI Implementation Guide',
      description: 'Step-by-step guide to implementing AI in your organization',
      category: 'AI Services',
      readTime: '15 min read',
      href: '/guides/ai-implementation'
    },
    {
      title: 'Micro SaaS Development Best Practices',
      description: 'Complete guide to building scalable micro SaaS platforms',
      category: 'Micro SaaS',
      readTime: '20 min read',
      href: '/guides/micro-saas-development'
    },
    {
      title: 'Cloud Migration Strategy',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud',
      category: 'IT Services',
      readTime: '25 min read',
      href: '/guides/cloud-migration'
    },
    {
      title: 'DevOps Implementation',
      description: 'Best practices for implementing DevOps in your organization',
      category: 'IT Services',
      readTime: '18 min read',
      href: '/guides/devops-implementation'
    },
    {
      title: 'AI Security Best Practices',
      description: 'Essential security considerations for AI implementations',
      category: 'AI Services',
      readTime: '12 min read',
      href: '/guides/ai-security'
    },
    {
      title: 'SaaS Scaling Strategies',
      description: 'How to scale your SaaS platform for growth',
      category: 'Micro SaaS',
      readTime: '22 min read',
      href: '/guides/saas-scaling'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Implementation Guides
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive guides to help you implement AI, micro SaaS, and IT solutions successfully
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                  <a
                    href={guide.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                  >
                    Read Guide
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Need Custom Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts can provide personalized guidance for your specific implementation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export default function ContentDiscoveryHub() {
  const contentCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Latest insights on AI trends, implementation, and breakthroughs',
      icon: '🤖',
      color: 'blue',
      links: [
        { href: '/blog/ai-2025-workforce-transformation', title: 'AI Workforce Transformation 2025' },
        { href: '/blog/ai-enterprise-transformation-2025', title: 'AI Enterprise Transformation' },
        { href: '/blog/ai-automation-enterprise-2025', title: 'AI Automation in Enterprise' },
        { href: '/blog/ai-data-privacy-compliance-2025', title: 'AI Data Privacy & Compliance' },
      ]
    },
    {
      title: 'Sustainability & Green Tech',
      description: 'Build sustainable AI systems and reduce environmental impact',
      icon: '🌱',
      color: 'green',
      links: [
        { href: '/case-studies/ai-sustainability-transformation-2025', title: 'AI Sustainability Success Story' },
        { href: '/blog/ai-sustainability-green-tech-2025', title: 'AI Sustainability & Green Tech' },
        { href: '/resources/green-ai-implementation-guide-2025', title: 'Green AI Implementation Guide' },
      ]
    },
    {
      title: 'Implementation Guides',
      description: 'Step-by-step guides and frameworks for successful AI adoption',
      icon: '📚',
      color: 'purple',
      links: [
        { href: '/resources/ai-workforce-transformation-playbook-2025', title: 'AI Workforce Transformation Playbook' },
        { href: '/resources/ai-implementation-checklist-2025', title: 'AI Implementation Checklist' },
        { href: '/blog/ai-implementation-master-guide-2026', title: 'AI Implementation Master Guide' },
      ]
    },
    {
      title: 'Case Studies & Success Stories',
      description: 'Real-world examples of AI transformation and business impact',
      icon: '🏆',
      color: 'orange',
      links: [
        { href: '/case-studies/ai-automation-manufacturing-2025', title: 'AI Manufacturing Success' },
        { href: '/case-studies/ai-retail-transformation-breakthrough-2025', title: 'AI Retail Transformation' },
        { href: '/case-studies/ai-financial-services-transformation-2025', title: 'Financial Services AI Success' },
      ]
    },
    {
      title: 'Startup & Growth',
      description: 'Strategies for AI startups and business growth',
      icon: '🚀',
      color: 'indigo',
      links: [
        { href: '/blog/ai-startup-funding-masterclass-2025', title: 'AI Startup Funding Masterclass' },
        { href: '/blog/startup-pricing-strategy-2025', title: 'Startup Pricing Strategy 2025' },
        { href: '/blog/ai-go-to-market-2025', title: 'AI Go-To-Market 2025' },
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'AI security, governance, and regulatory compliance',
      icon: '🛡️',
      color: 'red',
      links: [
        { href: '/blog/llm-guardrails-in-production-2025', title: 'LLM Guardrails in Production' },
        { href: '/blog/ai-governance-in-practice-2025', title: 'AI Governance in Practice' },
        { href: '/blog/edge-ai-privacy-by-design-2025', title: 'Edge AI: Privacy by Design' },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100',
      green: 'bg-green-50 border-green-200 text-green-900 hover:bg-green-100',
      purple: 'bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100',
      orange: 'bg-orange-50 border-orange-200 text-orange-900 hover:bg-orange-100',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-900 hover:bg-indigo-100',
      red: 'bg-red-50 border-red-200 text-red-900 hover:bg-red-100',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6'>
            <span className='text-sm font-medium'>📚 CONTENT HUB</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Discover Expert AI Content & Resources
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore our comprehensive library of AI insights, implementation guides, case studies, 
            and free resources. Everything you need to succeed with AI in 2025.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {contentCategories.map((category, index) => (
            <div key={index} className={`border-2 rounded-xl p-6 transition-all duration-300 ${getColorClasses(category.color)}`}>
              <div className='flex items-center mb-4'>
                <div className='text-3xl mr-3'>{category.icon}</div>
                <h3 className='text-xl font-bold'>{category.title}</h3>
              </div>
              <p className='text-sm opacity-80 mb-6'>{category.description}</p>
              
              <div className='space-y-3'>
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className='block text-sm font-medium hover:underline opacity-90 hover:opacity-100 transition-opacity'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              
              <div className='mt-6 pt-4 border-t border-current border-opacity-20'>
                <Link
                  href={category.title.includes('AI & Machine Learning') ? '/blog' : 
                        category.title.includes('Sustainability') ? '/case-studies' :
                        category.title.includes('Implementation') ? '/resources' :
                        category.title.includes('Case Studies') ? '/case-studies' :
                        category.title.includes('Startup') ? '/blog' :
                        '/blog'}
                  className='text-sm font-semibold hover:underline'
                >
                  View All {category.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <div className='bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              🎯 Can't Find What You're Looking For?
            </h3>
            <p className='text-lg text-gray-600 mb-6'>
              Our team of AI experts is here to help. Get personalized recommendations, 
              custom implementation strategies, or schedule a consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Get Expert Help
              </Link>
              <Link
                href='/resources'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
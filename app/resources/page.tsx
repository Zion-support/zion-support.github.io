import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-implementation-checklist',
      title: 'AI Implementation Checklist: Complete Success Guide',
      description: 'Comprehensive step-by-step checklist covering every phase of AI implementation, from planning to optimization. Includes templates and expert tips.',
      type: 'Checklist',
      downloadCount: '3,247',
      size: '1.8 MB',
      category: 'AI & Technology',
      featured: true,
      icon: '✅',
    },
    {
      id: 'cloud-migration-playbook',
      title: 'Cloud Migration Playbook',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud successfully',
      category: 'Cloud & DevOps',
      type: 'Playbook',
      downloadCount: '1.8K',
      rating: 4.8,
      icon: '☁️',
      color: 'green',
      features: [
        'Migration strategy planning',
        'Cost optimization techniques',
        'Security considerations',
        'Performance monitoring',
        'Disaster recovery planning'
      ]
    },
    {
      id: 'startup-funding-guide',
      title: 'Startup Funding Guide 2025',
      description: 'Complete guide to securing funding for AI and tech startups in the current market',
      category: 'Startup Strategy',
      type: 'Guide',
      downloadCount: '3.1K',
      rating: 4.9,
      icon: '💰',
      color: 'purple',
      features: [
        'Investor pitch templates',
        'Valuation frameworks',
        'Due diligence checklist',
        'Term sheet negotiation',
        'Post-funding planning'
      ]
    },
    {
      id: 'growth-hacking-toolkit',
      title: 'Growth Hacking Toolkit',
      description: 'Essential tools and frameworks for scaling your startup from 0 to 10K users',
      category: 'Growth & Marketing',
      type: 'Toolkit',
      downloadCount: '2.7K',
      rating: 4.7,
      icon: '🚀',
      color: 'orange',
      features: [
        'Growth metrics dashboard',
        'A/B testing templates',
        'User acquisition strategies',
        'Retention optimization',
        'Viral growth mechanics'
      ]
    },
    {
      id: 'cybersecurity-checklist',
      title: 'Cybersecurity Checklist 2025',
      description: 'Essential security measures every business should implement to protect their data',
      category: 'Security',
      type: 'Checklist',
      downloadCount: '1.9K',
      rating: 4.8,
      icon: '🛡️',
      color: 'red',
      features: [
        'Security audit framework',
        'Incident response plan',
        'Employee training checklist',
        'Compliance requirements',
        'Technology safeguards'
      ]
    },
    {
      id: 'data-analytics-framework',
      title: 'Data Analytics Framework',
      description: 'Complete framework for building a data-driven culture and analytics infrastructure',
      category: 'Data & Analytics',
      type: 'Framework',
      downloadCount: '2.1K',
      rating: 4.6,
      icon: '📊',
      color: 'indigo',
      features: [
        'Data strategy planning',
        'Analytics tool selection',
        'KPI definition framework',
        'Reporting automation',
        'Data governance policies'
      ]
    },
    {
      id: 'micro-saas-launch-guide',
      title: 'Micro SaaS Launch Guide',
      description: 'Step-by-step guide to launching and scaling a successful micro SaaS business',
      category: 'Business Strategy',
      type: 'Guide',
      downloadCount: '2.5K',
      rating: 4.9,
      icon: '💼',
      color: 'teal',
      features: [
        'Market validation process',
        'MVP development roadmap',
        'Pricing strategy framework',
        'Customer acquisition tactics',
        'Scaling operations guide'
      ]
    },
    {
      id: 'devops-best-practices',
      title: 'DevOps Best Practices',
      description: 'Comprehensive guide to implementing DevOps practices for faster, more reliable deployments',
      category: 'Cloud & DevOps',
      type: 'Guide',
      downloadCount: '1.7K',
      rating: 4.7,
      icon: '⚙️',
      color: 'gray',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Monitoring and alerting',
        'Security integration',
        'Team collaboration practices'
      ]
    },
    {
      id: 'ai-cost-optimization-toolkit',
      title: 'AI Cost Optimization Toolkit 2025',
      description: 'Complete toolkit to reduce AI infrastructure costs by 40-70% while improving performance',
      category: 'AI & Automation',
      type: 'Toolkit',
      downloadCount: '3.2K',
      rating: 4.9,
      icon: '💰',
      color: 'purple',
      features: [
        'Model selection framework',
        'Prompt optimization techniques',
        'Caching implementation guide',
        'Cost monitoring dashboard',
        'ROI calculation templates'
      ]
    },
    {
      id: 'enterprise-rag-implementation-guide',
      title: 'Enterprise RAG Implementation Guide',
      description: 'Step-by-step guide to building production-ready RAG systems with governance and cost controls',
      category: 'AI & Automation',
      type: 'Guide',
      downloadCount: '2.8K',
      rating: 4.8,
      icon: '📚',
      color: 'indigo',
      features: [
        'Reference architecture patterns',
        'Hybrid retrieval strategies',
        'Governance and compliance controls',
        'Cost optimization techniques',
        'Monitoring and evaluation framework'
      ]
    },
    {
      id: 'ai-automation-roi-calculator',
      title: 'AI Automation ROI Calculator',
      description: 'Interactive calculator to estimate potential savings and ROI from AI automation projects',
      category: 'Business Strategy',
      type: 'Calculator',
      downloadCount: '4.1K',
      rating: 4.9,
      icon: '🧮',
      color: 'green',
      features: [
        'Customizable cost inputs',
        'Multiple scenario modeling',
        'Payback period calculations',
        'Risk assessment framework',
        'Executive summary templates'
      ]
    },
    {
      id: 'startup-funding-ai-era-guide',
      title: 'Startup Funding in the AI Era: Complete Guide',
      description: 'Navigate the new funding landscape and position your AI startup for success in 2025',
      category: 'Startup Strategy',
      type: 'Guide',
      downloadCount: '2.9K',
      rating: 4.8,
      icon: '🚀',
      color: 'orange',
      features: [
        'AI startup valuation frameworks',
        'Investor pitch templates',
        'Due diligence preparation',
        'Term sheet negotiation guide',
        'Post-funding growth strategies'
      ]
    }
  ];

  const categories = [
    { name: 'All', count: resources.length },
    { name: 'AI & Automation', count: resources.filter(r => r.category === 'AI & Automation').length },
    { name: 'Cloud & DevOps', count: resources.filter(r => r.category === 'Cloud & DevOps').length },
    { name: 'Startup Strategy', count: resources.filter(r => r.category === 'Startup Strategy').length },
    { name: 'Growth & Marketing', count: resources.filter(r => r.category === 'Growth & Marketing').length },
    { name: 'Security', count: resources.filter(r => r.category === 'Security').length },
    { name: 'Data & Analytics', count: resources.filter(r => r.category === 'Data & Analytics').length },
    { name: 'Business Strategy', count: resources.filter(r => r.category === 'Business Strategy').length }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      red: 'bg-red-50 border-red-200 text-red-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800',
      gray: 'bg-gray-50 border-gray-200 text-gray-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Free Resources & Tools
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Download our comprehensive guides, checklists, and frameworks to accelerate 
              your business growth and technology implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href='#resources'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                Browse Resources
              </a>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Request Custom Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>25K+</div>
              <div className='text-gray-600'>Downloads</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>50+</div>
              <div className='text-gray-600'>Free Resources</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>4.9</div>
              <div className='text-gray-600'>Average Rating</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-blue-600 mb-2'>15K+</div>
              <div className='text-gray-600'>Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section id="resources" className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              All Resources
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Browse our complete library of free resources, tools, and guides
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {resources.map((resource) => (
              <div key={resource.id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                <div className='p-8'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-4xl'>{resource.icon}</div>
                    <div className='flex items-center gap-1'>
                      <span className='text-yellow-400'>★</span>
                      <span className='text-sm text-gray-600'>{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{resource.title}</h3>
                  <p className='text-gray-600 mb-4'>{resource.description}</p>
                  <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                    <span>{resource.downloadCount} downloads</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(resource.color)}`}>
                      {resource.type}
                    </span>
                  </div>
                  <button className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Get New Resources First
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Be the first to access our latest guides, templates, and tools. 
            Join 10,000+ professionals who get our exclusive resources.
          </p>
          <div className='max-w-md mx-auto flex gap-4'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300'
            />
            <button className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Need a Custom Resource?
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Can't find what you're looking for? Our team can create custom guides, 
              checklists, and frameworks tailored to your specific needs and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href='/contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
              >
                Request Custom Resource
              </Link>
              <Link
                href='/services'
                className='border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors'
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getColorClasses(color: string) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800',
    teal: 'bg-teal-50 border-teal-200 text-teal-800',
    gray: 'bg-gray-50 border-gray-200 text-gray-800'
  };
  return colors[color as keyof typeof colors] || colors.blue;
}

import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-implementation-checklist-2025',
      title: 'AI Implementation Checklist 2025',
      description: 'A comprehensive step-by-step guide to successfully implementing AI in your organization. Avoid common pitfalls and maximize your AI ROI.',
      category: 'AI Implementation',
      type: 'Checklist',
      downloadCount: '2,500+',
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'ai-security-hardening-checklist',
      title: 'AI Security Hardening Checklist',
      description: 'Essential security measures for AI systems and data protection. Ensure your AI implementation is secure and compliant.',
      category: 'Security',
      type: 'Checklist',
      downloadCount: '1,800+',
      rating: 4.8,
      featured: true,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'ai-roi-calculator',
      title: 'AI ROI Calculator',
      description: 'Calculate the potential return on investment for your AI projects. Make data-driven decisions about AI investments.',
      category: 'Business Tools',
      type: 'Calculator',
      downloadCount: '3,200+',
      rating: 4.9,
      featured: true,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'ai-governance-framework',
      title: 'AI Governance Framework',
      description: 'Complete framework for responsible AI governance and compliance. Ensure ethical and compliant AI implementation.',
      category: 'Governance',
      type: 'Framework',
      downloadCount: '1,500+',
      rating: 4.7,
      featured: false,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'cloud-native-checklist',
      title: 'Cloud-Native Architecture Checklist',
      description: 'Essential checklist for building scalable, resilient cloud-native applications. Follow industry best practices.',
      category: 'Cloud Architecture',
      type: 'Checklist',
      downloadCount: '2,100+',
      rating: 4.8,
      featured: false,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'startup-funding-checklist',
      title: 'Startup Funding Checklist 2025',
      description: 'Complete guide to securing funding for your AI startup. Navigate the funding landscape with confidence.',
      category: 'Startup Strategy',
      type: 'Checklist',
      downloadCount: '1,900+',
      rating: 4.9,
      featured: false,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'microservices-best-practices',
      title: 'Microservices Best Practices Guide',
      description: 'Comprehensive guide to building scalable microservices architectures. Learn from real-world implementations.',
      category: 'Architecture',
      type: 'Guide',
      downloadCount: '1,600+',
      rating: 4.6,
      featured: false,
      image: '/api/placeholder/400/300',
    },
    {
      id: 'devops-transformation-playbook',
      title: 'DevOps Transformation Playbook',
      description: 'Step-by-step guide to implementing DevOps culture and practices in your organization.',
      category: 'DevOps',
      type: 'Playbook',
      downloadCount: '1,400+',
      rating: 4.7,
      featured: false,
      image: '/api/placeholder/400/300',
    },
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-indigo-50 to-purple-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Free Resources & Tools
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Download our collection of free resources, checklists, and tools to accelerate your 
              AI and technology implementation. Everything you need to succeed in 2025.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='#featured-resources'
                className='bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg'
              >
                Browse Resources
              </Link>
              <Link
                href='/contact'
                className='border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors text-lg'
              >
                Request Custom Resource
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>25K+</div>
              <div className='text-gray-600'>Downloads</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>50+</div>
              <div className='text-gray-600'>Free Resources</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>4.8</div>
              <div className='text-gray-600'>Average Rating</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>100%</div>
              <div className='text-gray-600'>Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id='featured-resources' className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Featured Resources
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our most popular and highly-rated resources that have helped thousands of professionals
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              All Resources
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore our complete library of free resources, tools, and guides
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {regularResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className='py-16 bg-gradient-to-r from-indigo-50 to-purple-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-xl p-8 text-center shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Get New Resources First
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Be the first to know about new resources, tools, and guides. Join 10,000+ professionals 
              who get our weekly resource updates.
            </p>
            <div className='max-w-md mx-auto flex gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
              />
              <button className='bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors'>
                Subscribe
              </button>
            </div>
            <p className='text-sm text-gray-500 mt-4'>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ resource }: { resource: any }) {
  return (
    <Link href={`/resources/${resource.id}`} className='group'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
        <div className='aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center'>
          <div className='text-4xl'>📄</div>
        </div>
        <div className='p-6'>
          <div className='flex items-center gap-2 mb-3'>
            <span className='bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full'>
              {resource.type}
            </span>
            <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
              {resource.category}
            </span>
          </div>
          <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors'>
            {resource.title}
          </h3>
          <p className='text-gray-600 text-sm mb-4'>{resource.description}</p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(resource.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
                <span className='text-sm text-gray-600 ml-1'>{resource.rating}</span>
              </div>
              <span className='text-sm text-gray-500'>•</span>
              <span className='text-sm text-gray-500'>{resource.downloadCount} downloads</span>
            </div>
            <span className='text-indigo-600 text-sm font-medium group-hover:underline'>
              Download →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
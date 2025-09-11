import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide 2025',
      description:
        'A comprehensive 50-page guide covering everything from AI strategy to implementation, including ROI calculations and best practices.',
      type: 'Whitepaper',
      downloadCount: '2,847',
      size: '2.3 MB',
      category: 'AI & Technology',
      featured: true,
      icon: '📊',
    },
    {
      id: 'micro-saas-playbook',
      title: 'Micro SaaS Success Playbook',
      description:
        'Step-by-step playbook for building and scaling micro SaaS businesses, including market research, development, and growth strategies.',
      type: 'Playbook',
      downloadCount: '1,923',
      size: '1.8 MB',
      category: 'Business Strategy',
      featured: true,
      icon: '🚀',
    },
    {
      id: 'cloud-migration-checklist',
      title: 'Cloud Migration Checklist & Templates',
      description:
        'Comprehensive checklist and templates for successful cloud migration projects, including risk assessment and timeline planning.',
      type: 'Template',
      downloadCount: '3,156',
      size: '850 KB',
      category: 'Cloud & DevOps',
      featured: false,
      icon: '☁️',
    },
    {
      id: 'cybersecurity-framework',
      title: 'Enterprise Cybersecurity Framework',
      description:
        'Detailed framework for implementing enterprise-grade cybersecurity measures, including policies, procedures, and monitoring.',
      type: 'Framework',
      downloadCount: '1,456',
      size: '1.2 MB',
      category: 'Security',
      featured: false,
      icon: '🔒',
    },
    {
      id: 'data-analytics-roi-calculator',
      title: 'Data Analytics ROI Calculator',
      description:
        'Interactive Excel calculator to measure the ROI of data analytics investments and justify budget allocations.',
      type: 'Tool',
      downloadCount: '2,134',
      size: '650 KB',
      category: 'Data & Analytics',
      featured: false,
      icon: '📈',
    },
    {
      id: 'blockchain-business-cases',
      title: 'Blockchain Business Use Cases',
      description:
        'Real-world examples and case studies of blockchain implementations across different industries and business functions.',
      type: 'Case Study',
      downloadCount: '987',
      size: '1.5 MB',
      category: 'Blockchain',
      featured: false,
      icon: '⛓️',
    },
    {
      id: 'devops-best-practices',
      title: 'DevOps Best Practices Guide',
      description:
        'Comprehensive guide covering CI/CD pipelines, infrastructure as code, monitoring, and team collaboration best practices.',
      type: 'Guide',
      downloadCount: '2,789',
      size: '1.9 MB',
      category: 'Cloud & DevOps',
      featured: false,
      icon: '⚙️',
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development Roadmap',
      description:
        'Complete roadmap for mobile app development, from planning and design to deployment and maintenance strategies.',
      type: 'Roadmap',
      downloadCount: '1,678',
      size: '1.1 MB',
      category: 'Mobile Development',
      featured: false,
      icon: '📱',
    },
    {
      id: 'quantum-computing-implementation-guide',
      title: 'Quantum Computing Implementation Guide 2025',
      description:
        'Comprehensive 60-page guide covering quantum computing fundamentals, business applications, and step-by-step implementation strategies for enterprises.',
      type: 'Implementation Guide',
      downloadCount: '3,247',
      size: '3.2 MB',
      category: 'Quantum Computing',
      featured: true,
      icon: '⚛️',
    },
    {
      id: 'edge-computing-iot-playbook',
      title: 'Edge Computing & IoT Implementation Playbook',
      description:
        'Detailed playbook for implementing edge computing and IoT solutions, including architecture design, security considerations, and deployment strategies.',
      type: 'Playbook',
      downloadCount: '2,891',
      size: '2.1 MB',
      category: 'Edge Computing & IoT',
      featured: true,
      icon: '🌐',
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework & Governance Toolkit',
      description:
        'Complete framework for implementing ethical AI practices, including governance structures, bias testing protocols, and compliance checklists.',
      type: 'Framework',
      downloadCount: '2,156',
      size: '1.8 MB',
      category: 'AI Ethics & Responsible Innovation',
      featured: true,
      icon: '⚖️',
    },
    {
      id: 'sustainable-tech-assessment',
      title: 'Sustainable Technology Assessment Tool',
      description:
        'Interactive assessment tool to evaluate your organization\'s current sustainability practices and identify opportunities for Green IT implementation.',
      type: 'Assessment Tool',
      downloadCount: '1,934',
      size: '950 KB',
      category: 'Green IT & Sustainability',
      featured: true,
      icon: '🌱',
    },
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);

  const categories = [
    { name: 'All', count: resources.length },
    {
      name: 'AI & Technology',
      count: resources.filter(r => r.category === 'AI & Technology').length,
    },
    {
      name: 'Business Strategy',
      count: resources.filter(r => r.category === 'Business Strategy').length,
    },
    {
      name: 'Cloud & DevOps',
      count: resources.filter(r => r.category === 'Cloud & DevOps').length,
    },
    {
      name: 'Security',
      count: resources.filter(r => r.category === 'Security').length,
    },
    {
      name: 'Data & Analytics',
      count: resources.filter(r => r.category === 'Data & Analytics').length,
    },
    {
      name: 'Blockchain',
      count: resources.filter(r => r.category === 'Blockchain').length,
    },
    {
      name: 'Mobile Development',
      count: resources.filter(r => r.category === 'Mobile Development').length,
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Resources & Insights
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
              Access our comprehensive library of guides, templates, and tools
              designed to help you succeed in your technology initiatives.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#newsletter'
                className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
              >
                Get Free Resources
              </a>
              <Link
                href='/contact'
                className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
              >
                Request Custom Content
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
              <div className='text-3xl font-bold text-blue-600 mb-2'>50+</div>
              <div className='text-gray-600'>Free Resources</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>25K+</div>
              <div className='text-gray-600'>Downloads</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>15+</div>
              <div className='text-gray-600'>Industries Covered</div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>4.9/5</div>
              <div className='text-gray-600'>User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Featured Resources
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Our most popular and valuable resources, downloaded by thousands
              of professionals
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredResources.map(resource => (
              <FeaturedResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap gap-2 justify-center'>
            {categories.map(category => (
              <button
                key={category.name}
                className='px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors'
              >
                {category.name} ({category.count})
              </button>
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
              Browse our complete library of guides, templates, and tools
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
      <section
        id='newsletter'
        className='py-16 bg-gradient-to-r from-blue-50 to-indigo-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-xl p-8 text-center shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              Get Exclusive Resources & Updates
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Join our newsletter to receive new resources, industry insights,
              and exclusive content delivered directly to your inbox. Plus, get
              early access to our latest guides and tools.
            </p>
            <div className='max-w-md mx-auto flex gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                Subscribe
              </button>
            </div>
            <p className='text-sm text-gray-500 mt-4'>
              Join 15,000+ professionals. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white'>
            <h2 className='text-3xl font-bold mb-4'>
              Need Custom Resources for Your Organization?
            </h2>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              We create tailored guides, templates, and frameworks specifically
              designed for your industry, technology stack, and business
              objectives.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                Request Custom Content
              </Link>
              <a
                href='tel:+13024640950'
                className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedResourceCard({ resource }: { resource: any }) {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
      <div className='p-8'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='text-4xl'>{resource.icon}</div>
          <div>
            <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
              {resource.type}
            </span>
            <span className='ml-2 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full'>
              {resource.category}
            </span>
          </div>
        </div>

        <h3 className='text-2xl font-bold text-gray-900 mb-4'>
          {resource.title}
        </h3>
        <p className='text-gray-600 mb-6'>{resource.description}</p>

        <div className='flex items-center justify-between mb-6'>
          <div className='text-sm text-gray-500'>
            <span className='font-medium'>{resource.downloadCount}</span>{' '}
            downloads • {resource.size}
          </div>
        </div>

        <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
          Download Free
        </button>
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: any }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
      <div className='p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <div className='text-2xl'>{resource.icon}</div>
          <div>
            <span className='bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
              {resource.type}
            </span>
            <span className='ml-1 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
              {resource.category}
            </span>
          </div>
        </div>

        <h3 className='text-lg font-semibold text-gray-900 mb-3'>
          {resource.title}
        </h3>
        <p className='text-gray-600 text-sm mb-4'>{resource.description}</p>

        <div className='flex items-center justify-between mb-4'>
          <div className='text-xs text-gray-500'>
            <span className='font-medium'>{resource.downloadCount}</span>{' '}
            downloads • {resource.size}
          </div>
        </div>

        <button className='w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors'>
          Download
        </button>
      </div>
    </div>
  );
}

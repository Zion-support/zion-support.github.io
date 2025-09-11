import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      id: 'ai-implementation-checklist',
      title: 'AI Implementation Checklist: Complete 2025 Guide',
      description: 'A comprehensive 50-point checklist covering everything from planning to deployment and optimization.',
      type: 'Checklist',
      downloadCount: '25,000+',
      rating: 4.9,
      icon: '📋',
      featured: true,
      category: 'Implementation',
    },
    {
      id: 'ai-roi-calculator',
      title: 'AI ROI Calculator & Business Case Template',
      description: 'Calculate the potential return on investment for your AI projects with our interactive calculator.',
      type: 'Tool',
      downloadCount: '15,000+',
      rating: 4.8,
      icon: '💰',
      featured: true,
      category: 'Business',
    },
    {
      id: 'startup-funding-checklist',
      title: 'Startup Funding Checklist: AI Era Edition',
      description: 'Complete checklist for AI startups preparing for funding rounds in 2025.',
      type: 'Checklist',
      downloadCount: '8,500+',
      rating: 4.7,
      icon: '🚀',
      featured: true,
      category: 'Startup',
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics & Governance Framework',
      description: 'Comprehensive framework for implementing responsible AI practices in your organization.',
      type: 'Framework',
      downloadCount: '12,000+',
      rating: 4.9,
      icon: '🛡️',
      featured: false,
      category: 'Governance',
    },
    {
      id: 'micro-saas-playbook',
      title: 'Micro SaaS Success Playbook',
      description: 'Step-by-step guide to building and scaling micro SaaS businesses from idea to $1M ARR.',
      type: 'Playbook',
      downloadCount: '18,000+',
      rating: 4.8,
      icon: '📈',
      featured: false,
      category: 'Business',
    },
    {
      id: 'cloud-migration-guide',
      title: 'Cloud Migration Best Practices Guide',
      description: 'Complete guide to migrating your infrastructure to the cloud with minimal downtime.',
      type: 'Guide',
      downloadCount: '22,000+',
      rating: 4.6,
      icon: '☁️',
      featured: false,
      category: 'Infrastructure',
    },
    {
      id: 'cybersecurity-checklist',
      title: 'Cybersecurity Checklist for 2025',
      description: 'Essential security measures every organization needs to implement this year.',
      type: 'Checklist',
      downloadCount: '30,000+',
      rating: 4.9,
      icon: '🔒',
      featured: false,
      category: 'Security',
    },
    {
      id: 'data-analytics-roi',
      title: 'Data Analytics ROI Framework',
      description: 'Framework for measuring and maximizing ROI from your data analytics investments.',
      type: 'Framework',
      downloadCount: '14,000+',
      rating: 4.7,
      icon: '📊',
      featured: false,
      category: 'Analytics',
    },
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Free Resources & Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access our comprehensive library of guides, checklists, and tools to accelerate your 
              AI and technology implementation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#featured"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Browse Resources
              </a>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Request Custom Resource
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our resources have been downloaded over 150,000 times by professionals worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map(resource => (
              <FeaturedResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete library of guides, tools, and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get New Resources First
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be the first to access our latest resources, guides, and tools. 
              Join 10,000+ professionals who get our weekly resource updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Resource?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team can create custom resources, 
              guides, and tools tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Custom Resource
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
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
    <Link href={`/resources/${resource.id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl">{resource.icon}</div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600">{resource.rating}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {resource.type}
            </span>
            <span className="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
              {resource.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {resource.title}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {resource.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {resource.downloadCount} downloads
            </span>
            <span className="text-blue-600 font-medium group-hover:underline">
              Download →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ResourceCard({ resource }: { resource: any }) {
  return (
    <Link href={`/resources/${resource.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="text-3xl">{resource.icon}</div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-xs text-gray-600">{resource.rating}</span>
            </div>
          </div>
          
          <div className="mb-3">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
              {resource.type}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {resource.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3">
            {resource.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {resource.downloadCount} downloads
            </span>
            <span className="text-blue-600 text-sm font-medium group-hover:underline">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
import React from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  ChartBarIcon, 
  CogIcon, 
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  href: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-automation-2025',
    title: 'AI Automation Revolution 2025',
    description: 'Comprehensive guide to implementing AI automation across enterprise operations with real-world case studies.',
    category: 'Automation',
    readTime: '12 min read',
    featured: true,
    href: '/ai-2025-automation-revolution',
    icon: CogIcon,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'neural-architectures-2025',
    title: 'Advanced Neural Architectures',
    description: 'Deep dive into cutting-edge neural network architectures and their applications in modern AI systems.',
    category: 'AI Research',
    readTime: '15 min read',
    featured: true,
    href: '/neural-architectures-2025',
    icon: CpuChipIcon,
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'quantum-ai-breakthrough',
    title: 'Quantum AI Breakthrough',
    description: 'Exploring the intersection of quantum computing and artificial intelligence for unprecedented capabilities.',
    category: 'Quantum Computing',
    readTime: '18 min read',
    featured: true,
    href: '/quantum-ai-breakthrough-2025',
    icon: RocketLaunchIcon,
    gradient: 'from-green-500 to-blue-600'
  },
  {
    id: 'business-intelligence-2025',
    title: 'AI-Powered Business Intelligence',
    description: 'Transform your business intelligence with AI-driven analytics and predictive modeling techniques.',
    category: 'Business Intelligence',
    readTime: '10 min read',
    featured: false,
    href: '/ai-business-intelligence-2025',
    icon: ChartBarIcon,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'cloud-ai-infrastructure',
    title: 'Cloud AI Infrastructure',
    description: 'Build scalable AI infrastructure on the cloud with best practices and optimization strategies.',
    category: 'Infrastructure',
    readTime: '14 min read',
    featured: false,
    href: '/cloud-ai-infrastructure-2025',
    icon: CloudIcon,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'ai-security-best-practices',
    title: 'AI Security Best Practices',
    description: 'Essential security measures for AI systems and protecting against emerging threats.',
    category: 'Security',
    readTime: '8 min read',
    featured: false,
    href: '/ai-security-best-practices-2025',
    icon: ShieldCheckIcon,
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 'ai-innovation-trends',
    title: 'AI Innovation Trends 2025',
    description: 'Latest trends and emerging technologies shaping the future of artificial intelligence.',
    category: 'Trends',
    readTime: '11 min read',
    featured: false,
    href: '/ai-innovation-trends-2025',
    icon: LightBulbIcon,
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'enterprise-ai-transformation',
    title: 'Enterprise AI Transformation',
    description: 'Complete roadmap for transforming enterprise operations with AI implementation strategies.',
    category: 'Enterprise',
    readTime: '16 min read',
    featured: true,
    href: '/enterprise-ai-transformation-2025',
    icon: RocketLaunchIcon,
    gradient: 'from-indigo-500 to-purple-600'
  }
];

const NewContent2025UltimateShowcase: React.FC = () => {
  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = contentItems.filter(item => !item.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI Content Collection
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              2025 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of AI insights, breakthrough technologies, 
            and revolutionary solutions that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">{item.category}</span>
                        <div className="text-xs text-gray-400">{item.readTime}</div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Regular Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Complete Collection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularContent.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} text-white mr-3`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">{item.category}</span>
                      <div className="text-xs text-gray-400">{item.readTime}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm"
                  >
                    Read More
                    <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;
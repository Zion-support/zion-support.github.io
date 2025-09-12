import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import EnhancedContentPromotionBanner from '../../components/EnhancedContentPromotionBanner';

export const metadata = {
  title: 'AI Content Showcase 2025 - Latest Resources, Guides & Case Studies',
  description: 'Explore our comprehensive collection of AI resources, implementation guides, case studies, and cutting-edge insights. Stay ahead with the latest in AI technology.',
  keywords: 'AI resources, AI guides, AI case studies, AI implementation, artificial intelligence, machine learning, AI trends',
  openGraph: {
    title: 'AI Content Showcase 2025 - Latest Resources, Guides & Case Studies',
    description: 'Explore our comprehensive collection of AI resources, implementation guides, case studies, and cutting-edge insights. Stay ahead with the latest in AI technology.',
    type: 'website',
    url: '/content-showcase'
  }
=======
import React, { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, ArrowRight, BookOpen, BarChart3, Play, Settings, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Showcase | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, webinars, and resources.',
  keywords: 'AI content, AI resources, AI insights, AI case studies, AI webinars, AI blog',
};

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service' | 'resource' | 'webinar';
  category: string;
  readTime: string;
  isNew: boolean;
  featured: boolean;
  tags: string[];
  publishDate: string;
}

const ContentShowcase = () => {
  const contentItems: ContentItem[] = [
    // Featured Content
    {
      id: '1',
      title: 'AI Neural Architecture Revolution 2025',
      description: 'Discover how revolutionary neural architectures are transforming AI capabilities with 40% improvement in long-context understanding and exponential speedup potential.',
      href: '/blog/ai-2025-neural-architecture-revolution',
      type: 'blog',
      category: 'AI Architecture',
      readTime: '25 min',
      isNew: true,
      featured: true,
      tags: ['Neural Networks', 'AI Architecture', 'Machine Learning', '2025 Trends'],
      publishDate: '2025-01-17'
    },
    {
      id: '2',
      title: 'Quantum Machine Learning 2025',
      description: 'Explore how quantum computing is revolutionizing machine learning with exponential speedup potential, quantum neural networks, and breakthrough applications.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      category: 'Quantum AI',
      readTime: '28 min',
      isNew: true,
      featured: true,
      tags: ['Quantum Computing', 'Machine Learning', 'AI', '2025 Trends'],
      publishDate: '2025-01-17'
    },
    {
      id: '3',
      title: 'AI Ethical Governance Framework 2025',
      description: 'Comprehensive guide to building trustworthy AI systems with bias mitigation, transparency, regulatory compliance, and responsible AI development.',
      href: '/blog/ai-2025-ethical-governance-framework',
      type: 'blog',
      category: 'AI Ethics',
      readTime: '32 min',
      isNew: true,
      featured: true,
      tags: ['AI Ethics', 'AI Governance', 'Responsible AI', 'AI Regulation'],
      publishDate: '2025-01-17'
    },
    {
      id: '4',
      title: 'AI Manufacturing Transformation: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved 300% ROI and $200M savings through comprehensive AI transformation.',
      href: '/case-studies/ai-manufacturing-transformation-2025',
      type: 'case-study',
      category: 'Case Study',
      readTime: '35 min',
      isNew: true,
      featured: true,
      tags: ['Case Study', 'Manufacturing', 'AI Transformation', 'ROI'],
      publishDate: '2025-01-17'
    },
    // Additional Content
    {
      id: '5',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains across all business functions.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      category: 'Automation',
      readTime: '22 min',
      isNew: false,
      featured: true,
      tags: ['Enterprise AI', 'Automation', 'Business Transformation', 'ROI'],
      publishDate: '2025-01-15'
    },
    {
      id: '6',
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our comprehensive 200+ page AI implementation guide with templates, best practices, real-world examples, and step-by-step instructions.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'resource',
      category: 'Implementation',
      readTime: '200+ pages',
      isNew: false,
      featured: true,
      tags: ['Implementation', 'Guide', 'Best Practices', 'Templates'],
      publishDate: '2025-01-10'
    },
    {
      id: '7',
      title: 'AI Cybersecurity Threats 2025',
      description: 'Protect your organization from emerging AI cybersecurity threats with comprehensive defense strategies and real-world attack scenarios.',
      href: '/blog/ai-2025-cybersecurity-threats',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '20 min',
      isNew: false,
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threats', 'Defense'],
      publishDate: '2025-01-12'
    },
    {
      id: '8',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs across healthcare systems.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      category: 'Healthcare',
      readTime: '18 min',
      isNew: false,
      featured: false,
      tags: ['Healthcare', 'Medical AI', 'Diagnosis', 'Innovation'],
      publishDate: '2025-01-08'
    },
    {
      id: '9',
      title: 'AI Financial Services Transformation Success',
      description: 'Complete case study: How a major bank achieved 300% ROI through strategic AI implementation in customer service and risk management.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      category: 'Finance',
      readTime: '30 min',
      isNew: false,
      featured: false,
      tags: ['Finance', 'Banking', 'Case Study', 'ROI'],
      publishDate: '2025-01-05'
    },
    {
      id: '10',
      title: 'AI Automation Services',
      description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction, and measurable ROI.',
      href: '/services/ai-automation',
      type: 'service',
      category: 'Services',
      readTime: '5 min',
      isNew: false,
      featured: false,
      tags: ['Services', 'Automation', 'AI Solutions', 'Consulting'],
      publishDate: '2025-01-03'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      case 'resource':
        return '📚';
      case 'webinar':
        return '🎥';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'service':
        return 'from-purple-500 to-pink-500';
      case 'resource':
        return 'from-orange-500 to-red-500';
      case 'webinar':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Architecture':
        return 'bg-blue-100 text-blue-800';
      case 'Quantum AI':
        return 'bg-purple-100 text-purple-800';
      case 'AI Ethics':
        return 'bg-green-100 text-green-800';
      case 'Case Study':
        return 'bg-emerald-100 text-emerald-800';
      case 'Automation':
        return 'bg-orange-100 text-orange-800';
      case 'Implementation':
        return 'bg-indigo-100 text-indigo-800';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-800';
      case 'Healthcare':
        return 'bg-pink-100 text-pink-800';
      case 'Finance':
        return 'bg-yellow-100 text-yellow-800';
      case 'Services':
        return 'bg-gray-100 text-gray-800';
=======
  type: 'blog' | 'case-study' | 'webinar' | 'service';
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  featured: boolean;
  tags: string[];
}

const ContentShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Generative AI Enterprise Revolution',
      description: 'Discover how generative AI is revolutionizing enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-generative-ai-enterprise-revolution',
      type: 'blog',
      category: 'Enterprise AI',
      readTime: '12 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Generative AI', 'Enterprise', 'ROI', 'Automation']
    },
    {
      id: '2',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'Explore how AI is revolutionizing cybersecurity with 99.7% threat detection accuracy and automated response systems.',
      href: '/blog/ai-2025-cybersecurity-revolution',
      type: 'blog',
      category: 'Cybersecurity',
      readTime: '15 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Automation']
    },
    {
      id: '3',
      title: 'AI Retail Transformation: 400% Revenue Growth',
      description: 'Complete case study: How a major retail chain achieved 400% revenue growth through AI-powered personalization.',
      href: '/case-studies/ai-2025-retail-transformation-breakthrough',
      type: 'case-study',
      category: 'Retail',
      readTime: '18 min',
      publishDate: '2025-01-17',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Retail', 'Personalization', 'Revenue Growth', 'AI Implementation']
    },
    {
      id: '4',
      title: 'AI 2025 Implementation Masterclass: Advanced Strategies',
      description: 'Join our exclusive 6-hour masterclass on advanced AI implementation strategies with industry experts.',
      href: '/webinars/ai-2025-implementation-masterclass-advanced',
      type: 'webinar',
      category: 'Education',
      readTime: '6 hours',
      publishDate: '2025-02-15',
      author: 'Zion Tech Group',
      featured: true,
      tags: ['Masterclass', 'Implementation', 'Strategy', 'Training']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'webinar':
        return <Play className="w-5 h-5" />;
      case 'service':
        return <Settings className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'webinar':
        return 'bg-orange-100 text-orange-800';
      case 'service':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const featuredContent = contentItems.filter(item => item.featured);
  const regularContent = contentItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Content Showcase 2025 - Latest Resources, Guides & Case Studies"
        description="Explore our comprehensive collection of AI resources, implementation guides, case studies, and cutting-edge insights. Stay ahead with the latest in AI technology."
        keywords="AI resources, AI guides, AI case studies, AI implementation, artificial intelligence, machine learning, AI trends"
        url="/content-showcase"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🚀 AI Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Discover the latest AI resources, implementation guides, case studies, and cutting-edge insights 
              to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Featured Content
              </Link>
              <Link
                href="#all-content"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">AI Resources</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Implementation Guides</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">Webinars</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ⭐ Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful AI resources, carefully curated to help you stay ahead 
              of the curve in artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className={`h-2 bg-gradient-to-r ${getTypeColor(item.type)} rounded-t-2xl`}></div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {getTypeIcon(item.type)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        {item.isNew && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>⏱️ {item.readTime}</span>
                      <span>📅 {item.publishDate}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800 transition-colors">
                      {item.type === 'resource' ? 'Download Now' : 'Read More'}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Content Section */}
      <section id="all-content" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📚 All Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of AI resources, organized by category and type 
              for easy discovery and navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {getTypeIcon(item.type)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        {item.isNew && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>⏱️ {item.readTime}</span>
                      <span>📅 {item.publishDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Our expert team provides comprehensive AI consulting, implementation, and support services 
            to help you achieve measurable results and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/ai-consulting"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Get AI Consulting
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
=======

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Content Showcase
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive collection of AI insights, case studies, webinars, and resources.
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="blog">Blog</option>
                    <option value="case-study">Case Study</option>
                    <option value="webinar">Webinar</option>
                    <option value="service">Service</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-t-xl">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Featured Content</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-2 capitalize">{item.type.replace('-', ' ')}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{item.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl mb-8">
            Get the latest AI trends, case studies, and implementation strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
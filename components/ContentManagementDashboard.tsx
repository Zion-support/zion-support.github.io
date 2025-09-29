import React, { useState } from 'react';
import { 
  blogPosts, 
  caseStudies, 
  services, 
  promotionalBanners,
  getFeaturedContent,
  getActiveBanners,
  getContentByTag,
  getRecentContent,
  BlogPost,
  CaseStudy,
  Service,
  PromotionalBanner
} from '../src/content/content-config';

interface ContentManagementDashboardProps {
  className?: string;
}

export default function ContentManagementDashboard({ className = '' }: ContentManagementDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'blog' | 'case-studies' | 'services' | 'banners'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const featuredContent = getFeaturedContent();
  const activeBanners = getActiveBanners();
  const recentContent = getRecentContent(6);

  const allTags = Array.from(new Set([
    ...blogPosts.flatMap(post => post.tags),
    ...caseStudies.flatMap(study => study.tags),
    ...services.flatMap(service => service.tags)
  ])).sort();

  const filteredContent = selectedTag ? getContentByTag(selectedTag) : {
    blogPosts: blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    caseStudies: caseStudies.filter(study => 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.company.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    services: services.filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  };

  const TabButton = ({ tab, label, count }: { tab: string; label: string; count?: number }) => (
    <button
      onClick={() => setActiveTab(tab as any)}
      className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
        activeTab === tab
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label} {count && `(${count})`}
    </button>
  );

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Management Dashboard</h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          <TabButton tab="overview" label="Overview" />
          <TabButton tab="blog" label="Blog Posts" count={blogPosts.length} />
          <TabButton tab="case-studies" label="Case Studies" count={caseStudies.length} />
          <TabButton tab="services" label="Services" count={services.length} />
          <TabButton tab="banners" label="Banners" count={promotionalBanners.length} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{blogPosts.length}</div>
                <div className="text-sm text-gray-600">Blog Posts</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{caseStudies.length}</div>
                <div className="text-sm text-gray-600">Case Studies</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{services.length}</div>
                <div className="text-sm text-gray-600">Services</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{activeBanners.length}</div>
                <div className="text-sm text-gray-600">Active Banners</div>
              </div>
            </div>

            {/* Featured Content */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Content</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Blog Posts</h4>
                  <div className="space-y-2">
                    {featuredContent.blogPosts.map(post => (
                      <div key={post.id} className="text-sm text-gray-600">
                        • {post.title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Case Studies</h4>
                  <div className="space-y-2">
                    {featuredContent.caseStudies.map(study => (
                      <div key={study.id} className="text-sm text-gray-600">
                        • {study.title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Services</h4>
                  <div className="space-y-2">
                    {featuredContent.services.map(service => (
                      <div key={service.id} className="text-sm text-gray-600">
                        • {service.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Content */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Content</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentContent.map((content, index) => (
                  <div key={`${content.type}-${content.id}`} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        content.type === 'blog' ? 'bg-blue-100 text-blue-800' :
                        content.type === 'case-study' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {content.type === 'blog' ? 'Blog' : content.type === 'case-study' ? 'Case Study' : 'Service'}
                      </span>
                      <span className="text-xs text-gray-500">{content.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{content.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{content.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-4">
            {filteredContent.blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div className="space-y-4">
            {filteredContent.caseStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4">
            {filteredContent.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {activeTab === 'banners' && (
          <div className="space-y-4">
            {promotionalBanners.map(banner => (
              <BannerCard key={banner.id} banner={banner} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Component for individual content cards
function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
              Blog Post
            </span>
            {post.featured && (
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
                Featured
              </span>
            )}
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Category: {post.category}</span>
            <span>Read Time: {post.readTime}</span>
            <span>Tags: {post.tags.join(', ')}</span>
          </div>
        </div>
        <div className="ml-4 text-2xl">{post.image}</div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
              Case Study
            </span>
            {study.featured && (
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{study.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{study.excerpt}</p>
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="font-semibold text-gray-700">Company:</span>
              <div className="text-gray-600">{study.company}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Industry:</span>
              <div className="text-gray-600">{study.industry}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Result:</span>
              <div className="text-gray-600">{study.metric}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
              Service
            </span>
            {service.featured && (
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-gray-700">Category:</span>
              <div className="text-gray-600">{service.category}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Pricing:</span>
              <div className="text-gray-600">{service.pricing.starting}</div>
            </div>
          </div>
        </div>
        <div className="ml-4 text-2xl">{service.icon}</div>
      </div>
    </div>
  );
}

function BannerCard({ banner }: { banner: PromotionalBanner }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">
              Banner
            </span>
            {banner.active && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                Active
              </span>
            )}
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
              Priority: {banner.priority}
            </span>
          </div>
          <h3 className="font-bold text-gray-900 mb-2">{banner.message}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-gray-700">CTA:</span>
              <div className="text-gray-600">{banner.ctaText} → {banner.ctaLink}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Settings:</span>
              <div className="text-gray-600">
                Auto-hide: {banner.autoHide ? `Yes (${banner.hideAfter}s)` : 'No'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
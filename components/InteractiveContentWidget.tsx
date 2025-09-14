'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    satisfaction?: string;
  };
}

interface InteractiveContentWidgetProps {
  contentItems: ContentItem[];
  maxItems?: number;
}

export default function InteractiveContentWidget({ 
  contentItems, 
  maxItems = 6 
}: InteractiveContentWidgetProps) {
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Get all unique tags
  const allTags = Array.from(
    new Set(contentItems.flatMap(item => item.tags))
  ).sort();

  // Filter content based on selected tag and search query
  useEffect(() => {
    let filtered = contentItems;

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(item => item.tags.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort by featured first, then by title
    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });

    setFilteredContent(filtered.slice(0, isExpanded ? filtered.length : maxItems));
  }, [contentItems, selectedTag, searchQuery, isExpanded, maxItems]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Discover Our Latest Content
        </h3>
        <p className="text-gray-600">
          Explore our comprehensive library of AI insights, case studies, and implementation guides.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({contentItems.length})
          </button>
          {allTags.slice(0, 8).map(tag => {
            const count = contentItems.filter(item => item.tags.includes(tag)).length;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Grid */}
      <div className="space-y-4">
        {filteredContent.length > 0 ? (
          filteredContent.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    )}
                    <span className="text-sm text-gray-500">{item.readingTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    <Link href={item.url} className="hover:text-blue-600 transition-colors">
                      {item.title}
                    </Link>
                  </h4>
                  
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {item.metrics && (
                    <div className="flex gap-4 text-sm">
                      {item.metrics.roi && (
                        <span className="text-green-600 font-medium">
                          📈 {item.metrics.roi} ROI
                        </span>
                      )}
                      {item.metrics.savings && (
                        <span className="text-blue-600 font-medium">
                          💰 {item.metrics.savings} Savings
                        </span>
                      )}
                      {item.metrics.satisfaction && (
                        <span className="text-purple-600 font-medium">
                          ⭐ {item.metrics.satisfaction} Satisfaction
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No content found</h4>
            <p className="text-gray-600">
              Try adjusting your search terms or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Show More/Less Button */}
      {contentItems.length > maxItems && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {isExpanded ? 'Show Less' : `Show All ${contentItems.length} Items`}
          </button>
        </div>
      )}
    </div>
  );
}
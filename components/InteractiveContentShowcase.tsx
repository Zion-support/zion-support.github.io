import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  readTime?: string;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
  views?: number;
  likes?: number;
  tags?: string[];
}

interface InteractiveContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  variant?: 'default' | 'featured' | 'trending' | 'interactive';
  showFilters?: boolean;
  showStats?: boolean;
  showSearch?: boolean;
  className?: string;
}

export default function InteractiveContentShowcase({
  title,
  subtitle,
  items,
  variant = 'interactive',
  showFilters = true,
  showStats = true,
  showSearch = true,
  className = ''
}: InteractiveContentShowcaseProps) {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category).filter(Boolean))];

  // Filter and sort items
  useEffect(() => {
    let filtered = items;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort items
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'trending':
        filtered = filtered.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'likes':
        filtered = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  }, [items, selectedCategory, searchTerm, sortBy]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-white opacity-90',
          itemTitle: 'text-white',
          itemDesc: 'text-white opacity-90',
          meta: 'text-white opacity-75'
        };
      case 'trending':
        return {
          container: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
          card: 'bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20',
          cardHover: 'hover:bg-opacity-20',
          title: 'text-white',
          subtitle: 'text-white opacity-90',
          itemTitle: 'text-white',
          itemDesc: 'text-white opacity-90',
          meta: 'text-white opacity-75'
        };
      default:
        return {
          container: 'bg-white',
          card: 'bg-white border border-gray-200',
          cardHover: 'hover:shadow-lg',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          itemTitle: 'text-gray-900',
          itemDesc: 'text-gray-600',
          meta: 'text-gray-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 ${styles.container} ${className} relative overflow-hidden`}>
      {variant === 'featured' && (
        <div className="absolute inset-0 bg-black opacity-10"></div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">
              {variant === 'featured' ? '✨ FEATURED CONTENT' : 
               variant === 'trending' ? '🔥 TRENDING NOW' : '📚 INTERACTIVE SHOWCASE'}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.title}`}>
            {title}
          </h2>
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.subtitle}`}>
            {subtitle}
          </p>
        </div>

        {/* Interactive Controls */}
        {(showFilters || showSearch) && (
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            {showSearch && (
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">🔍</span>
                  </div>
                </div>
              </div>
            )}

            {/* Filters and Controls */}
            {showFilters && (
              <div className="flex flex-wrap justify-center gap-4">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900"
                >
                  <option value="newest">Newest First</option>
                  <option value="trending">Trending</option>
                  <option value="popular">Most Popular</option>
                  <option value="likes">Most Liked</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 text-sm font-medium ${
                      viewMode === 'grid' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 text-sm font-medium ${
                      viewMode === 'list' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className={`text-sm ${styles.meta}`}>
            Showing {filteredItems.length} of {items.length} items
          </p>
        </div>

        {/* Content Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }>
          {filteredItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} p-6 rounded-xl transition-all duration-300 ${styles.cardHover} ${
                viewMode === 'list' ? 'flex items-center space-x-4' : ''
              }`}>
                {/* Icon */}
                <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform ${
                  viewMode === 'list' ? 'flex-shrink-0' : ''
                }`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-2">
                    {item.isNew && (
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    {item.category && (
                      <span className={`${styles.meta} text-xs font-medium`}>
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold mb-2 ${styles.itemTitle}`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-3 ${styles.itemDesc}`}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      {item.readTime && (
                        <>
                          <span className={styles.meta}>{item.readTime}</span>
                          <span className={styles.meta}>•</span>
                        </>
                      )}
                      <span className={styles.meta}>
                        {item.href.includes('/blog/') ? 'Article' : 
                         item.href.includes('/case-studies/') ? 'Case Study' : 
                         item.href.includes('/resources/') ? 'Resource' : 'Content'}
                      </span>
                    </div>

                    {/* Stats */}
                    {showStats && (
                      <div className="flex items-center gap-3">
                        {item.views && (
                          <span className={`${styles.meta} flex items-center gap-1`}>
                            👁️ {item.views}
                          </span>
                        )}
                        {item.likes && (
                          <span className={`${styles.meta} flex items-center gap-1`}>
                            ❤️ {item.likes}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>
              No content found
            </h3>
            <p className={`${styles.subtitle}`}>
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredItems.length > 0 && filteredItems.length < items.length && (
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Load More Content
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
import React from 'react';
interface ContentPreviewCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured?: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
  excerpt?: string;
}
const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  // id,
  title,
  description,
  category,
  readTime,
  date,
  path,
  image,
  featured = false,
  stats,
  excerpt
}) => {
  const _formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      'Success Story': 'from-green-500 to-emerald-600',
      'Mega Trends': 'from-blue-500 to-cyan-600',
      'Architecture': 'from-purple-500 to-pink-600',
      'AI Agents': 'from-orange-500 to-red-600',
      'Cost Optimization': 'from-yellow-500 to-orange-600',
      'Intelligence': 'from-indigo-500 to-purple-600',
      'Transformation': 'from-teal-500 to-blue-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return colors[category] || colors.default;
  };
  return (
    <article className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
      featured ? 'ring-2 ring-indigo-200' : ''
    }`}>
      {/* Image/Visual Header */}
      <div className={`h-48 bg-gradient-to-br ${getCategoryColor(category)} flex items-center justify-center relative`}>
        <div className="text-center text-white">
          <div className="text-6xl mb-2">{image}</div>
          <div className="text-sm font-medium opacity-90">{category}</div>
        </div>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </span>
          </div>
        )}
        {/* Stats Overlay */}
        {stats && (
          <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-2">
            <div className="text-center">
              <div className="text-lg font-bold text-white">
                {formatNumber(stats.views)}
              </div>
              <div className="text-xs text-white opacity-90">views</div>
            </div>
          </div>
        )}
        {/* Read Time Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {readTime}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt || description}
        </p>
        {/* Stats Row */}
        {stats && (
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-gray-600">{formatNumber(stats.views)} views</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-600 font-medium">{stats.engagement}% engagement</span>
              </div>
            </div>
          </div>
        )}
        {/* Date and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{date}</span>
          <Link
            href={path}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            Read Article
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ContentPreviewCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  Star, 
  TrendingUp,
  Eye,
  Download,
  Play
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'whitepaper' | 'webinar' | 'case-study' | 'tool';
  category: string;
  author: string;
  publishDate: string;
  readTime?: number;
  viewCount?: number;
  downloadCount?: number;
  rating?: number;
  featured?: boolean;
  image: string;
  url: string;
}

interface FeaturedContentProps {
  title?: string;
  subtitle?: string;
  items: ContentItem[];
  showCategory?: boolean;
  maxItems?: number;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({
  title = "Featured Content",
  subtitle = "Discover our latest insights, resources, and success stories",
  items,
  showCategory = true,
  maxItems = 6
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <Eye className="w-4 h-4" />;
      case 'whitepaper':
        return <Download className="w-4 h-4" />;
      case 'webinar':
        return <Play className="w-4 h-4" />;
      case 'case-study':
        return <TrendingUp className="w-4 h-4" />;
      case 'tool':
        return <Star className="w-4 h-4" />;
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-500/20 text-blue-400';
      case 'whitepaper':
        return 'bg-green-500/20 text-green-400';
      case 'webinar':
        return 'bg-purple-500/20 text-purple-400';
      case 'case-study':
        return 'bg-orange-500/20 text-orange-400';
      case 'tool':
        return 'bg-cyan-500/20 text-cyan-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const displayedItems = items.slice(0, maxItems);

  return (
    <section className="py-16 bg-zion-slate-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <article
              key={item.id}
              className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    {item.type}
                  </span>
                  {item.featured && (
                    <span className="bg-zion-cyan/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                {showCategory && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-zion-slate-light mb-4 text-sm line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-zion-slate mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  {item.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime} min</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {item.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zion-slate-light">{item.rating}</span>
                      </div>
                    )}
                    {item.viewCount && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm text-zion-slate-light">{item.viewCount.toLocaleString()}</span>
                      </div>
                    )}
                    {item.downloadCount && (
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span className="text-sm text-zion-slate-light">{item.downloadCount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  <Link
                    to={item.url}
                    className="text-zion-cyan hover:text-zion-blue-light transition-colors flex items-center gap-1 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {items.length > maxItems && (
          <div className="text-center mt-12">
            <Link
              to="/resources"
              className="bg-zion-cyan hover:bg-zion-blue-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2"
            >
              View All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedContent;
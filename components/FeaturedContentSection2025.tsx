import React from 'react';
import Link from 'next/link';
ArrowRightCalendarClockUserTrendingUpStarEyeThumbsUp

export default function FeaturedContentSection2025() {
  const featuredContent = [
    {
      type: 'blog',
      title: 'Revolutionary AI Breakthroughs Reshaping 2025',
      excerpt: 'Discover the most groundbreaking AI innovations that are transforming industries and creating unprecedented opportunities for businesses worldwide.',
      author: 'AI Research Team',
      readTime: '12 min read',
      publishDate: 'January 2025',
      views: '15.2k',
      likes: '892',
      href: '/blog/ai-2025-latest-breakthroughs',
      category: 'AI Innovation',
      featured: true
    },
    {
      type: 'case-study',
      title: 'Global Tech Giant Achieves 25,000% ROI with AI Transformation',
      excerpt: 'How a Fortune 100 technology company revolutionized their operations using our advanced AI automation solutions.',
      author: 'Success Stories Team',
      readTime: '8 min read',
      publishDate: 'January 2025',
      views: '22.8k',
      likes: '1.2k',
      href: '/case-studies/ai-2025-global-tech-transformation-mega-success',
      category: 'Success Story',
      featured: true
    },
    {
      type: 'tutorial',
      title: 'Complete AI Implementation Guide: From Zero to Success',
      excerpt: 'A comprehensivestep-by-step tutorial that will guide you through implementing AI solutions in your organization.',
      author: 'Implementation Team',
      readTime: '45 min read',
      publishDate: 'January 2025',
      views: '18.5k',
      likes: '756',
      href: '/tutorials/ai-implementation-step-by-step-guide',
      category: 'Tutorial',
      featured: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <TrendingUp className="w-5 h-5" />;
      case 'case-study':
        return <Star className="w-5 h-5" />;
      case 'tutorial':
        return <ArrowRight className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-purple-500';
      case 'case-study':
        return 'from-green-500 to-blue-500';
      case 'tutorial':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Featured Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest & Greatest Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and impactful contentcarefully curated to help you stay ahead 
            in the rapidly evolving world of AI and technology.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((contentindex) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  </div>
                )}
                
                {/* Content Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`bg-gradient-to-r ${getTypeColor(content.type)} text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
                    {getTypeIcon(content.type)}
                    {content.category}
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${getTypeColor(content.type)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-white text-center z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {getTypeIcon(content.type)}
                    </div>
                    <h3 className="text-lg font-semibold">{content.category}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{content.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{content.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{content.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h3>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest AI trendsbreakthroughsand industry insights.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Browse Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Real-world case studies showcasing remarkable AI transformation results.
            </p>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
            >
              View Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tutorials</h3>
            <p className="text-gray-600 mb-6">
              Step-by-step guides to help you implement AI solutions successfully.
            </p>
            <Link 
              href="/tutorials" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Start Learning <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">'Don', 't Miss Out on the Latest Content</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about new articlescase studiesand tutorials as soon as 'they', 're published.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/newsletter" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Subscribe Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
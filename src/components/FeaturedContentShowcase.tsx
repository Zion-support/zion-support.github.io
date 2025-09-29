import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Eye, Star, TrendingUp } from 'lucide-react';

interface FeaturedContent {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  views?: string;
  featured: boolean;
  href: string;
  tags: string[];
}

const FeaturedContentShowcase: React.FC = () => {
  const featuredContent: FeaturedContent[] = [
    {
      id: "generative-ai-enterprise",
      title: "Generative AI in Enterprise: Real Adoption Strategies for 2025",
      description: "Discover proven strategies for implementing generative AI in enterprise environments. Learn about ROI, security considerations, and successful deployment patterns.",
      category: "Generative AI",
      date: "2025-01-17",
      readTime: "11 min read",
      views: "2.3k",
      featured: true,
      href: "/blog/generative-ai-enterprise-adoption-2025",
      tags: ["Enterprise", "AI Implementation", "ROI", "Strategy"]
    },
    {
      id: "cloud-native-architecture",
      title: "Cloud-Native Architecture: Building Scalable Systems for the Future",
      description: "Explore modern cloud-native architecture patterns, microservices design, and containerization strategies that enable rapid scaling and innovation.",
      category: "Cloud Architecture",
      date: "2025-01-16", 
      readTime: "13 min read",
      views: "1.8k",
      featured: true,
      href: "/blog/cloud-native-architecture-2025",
      tags: ["Microservices", "Kubernetes", "DevOps", "Scalability"]
    },
    {
      id: "quantum-computing-business",
      title: "Quantum Computing in Business: Real Applications Beyond the Hype",
      description: "Explore practical quantum computing applications for businesses in 2025. Learn about quantum advantage, optimization problems, and when to invest in quantum solutions.",
      category: "Quantum Computing",
      date: "2025-01-17",
      readTime: "11 min read", 
      views: "1.5k",
      featured: true,
      href: "/blog/quantum-computing-business-applications-2025",
      tags: ["Quantum Computing", "Business Applications", "Optimization", "Innovation"]
    },
    {
      id: "edge-ai-revolution",
      title: "Edge AI: The Computing Revolution Happening at the Edge",
      description: "Discover how edge AI is transforming industries by bringing intelligence closer to data sources. Learn about real-time processing, reduced latency, and privacy benefits.",
      category: "Edge Computing",
      date: "2025-01-16",
      readTime: "13 min read",
      views: "1.2k", 
      featured: false,
      href: "/blog/edge-computing-ai-revolution-2025",
      tags: ["Edge AI", "Real-time Processing", "IoT", "Artificial Intelligence"]
    },
    {
      id: "zero-trust-security",
      title: "Zero Trust Security: The New Standard for Enterprise Protection",
      description: "Learn how Zero Trust architecture is revolutionizing cybersecurity. Discover implementation strategies, benefits, and real-world case studies from leading organizations.",
      category: "Cybersecurity",
      date: "2025-01-15",
      readTime: "14 min read",
      views: "2.1k",
      featured: false,
      href: "/blog/cybersecurity-zero-trust-2025", 
      tags: ["Zero Trust", "Cybersecurity", "Enterprise Security", "Network Security"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Generative AI": "bg-purple-100 text-purple-800 border-purple-200",
      "Cloud Architecture": "bg-blue-100 text-blue-800 border-blue-200",
      "Quantum Computing": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Edge Computing": "bg-green-100 text-green-800 border-green-200",
      "Cybersecurity": "bg-red-100 text-red-800 border-red-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 border border-blue-200">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            🔥 FEATURED CONTENT - TOP PICKS
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Must-Read Articles This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and impactful content, handpicked by our experts. 
            Stay ahead of the curve with these essential reads.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(featuredContent[0].category)}`}>
                      {featuredContent[0].category}
                    </div>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200">
                      ⭐ EDITOR'S CHOICE
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredContent[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredContent[0].description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredContent[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredContent[0].readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredContent[0].views} views
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredContent[0].tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md border border-blue-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={featuredContent[0].href}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-3xl font-bold mb-2">Most Popular</div>
                    <div className="text-blue-200">This Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Featured Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredContent.slice(1, 4).map((content, index) => (
            <div key={content.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(content.category)}`}>
                  {content.category}
                </div>
                {content.featured && (
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200">
                    ⭐ Featured
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {content.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(content.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {content.readTime}
                </div>
                {content.views && (
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {content.views}
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {content.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link 
                to={content.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm group"
              >
                Read More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Dive Deeper?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete library of articles, insights, and case studies. 
              Get expert guidance on the technologies shaping tomorrow's businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Explore All Articles
              </Link>
              
              <Link 
                to="/insights"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                View Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentShowcase;
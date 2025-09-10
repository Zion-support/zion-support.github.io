import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // Mock blog post data
    const mockPost = {
      id: 1,
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations and what to expect in the coming years.",
      content: "<p>Artificial intelligence is revolutionizing the way businesses operate...</p>",
      category: "AI & Technology",
      tags: ["AI", "Business", "Technology", "Future"],
      author: {
        name: "John Smith",
        title: "AI Research Lead",
        avatarUrl: "/images/authors/john-smith.jpg"
      },
      publishedDate: "December 15, 2024",
      readTime: "5 min read",
      featuredImage: "/images/blog/ai-business.jpg"
    };

    setPost(mockPost);
    
    // Mock related posts
    setRelatedPosts([
      {
        id: 2,
        title: "Machine Learning Best Practices",
        category: "AI & Technology",
        featuredImage: "/images/blog/ml-best-practices.jpg",
        slug: "machine-learning-best-practices"
      },
      {
        id: 3,
        title: "Building Scalable AI Systems",
        category: "AI & Technology", 
        featuredImage: "/images/blog/scalable-ai.jpg",
        slug: "building-scalable-ai-systems"
      }
    ]);

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) {
    return (
      <>
        <SEO title="Loading..." description="Loading blog post..." />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex justify-center items-center">
              <div className="animate-pulse text-white">Loading article...</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Helper function to get share URL
  const getShareUrl = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default:
        return '#';
    }
  };

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        keywords={post.tags.join(", ")} 
        ogImage={post.featuredImage} 
        canonical={`https://ziontechgroup.com/blog/${slug}`}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Back to blog button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4"/>
              Back to all articles
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {post.excerpt}
            </p>
            
            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-300">{post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-1"/>
                  <span className="text-sm">{post.publishedDate}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-4 w-4 mr-1"/>
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="relative">
                  <button
                    className="flex items-center text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="h-4 w-4 mr-1"/>
                    <span className="text-sm">Share</span>
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-slate-800 border border-blue-500/20 rounded-lg p-2 z-10">
                      <a
                        href={getShareUrl('facebook')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-slate-700 rounded transition-colors text-gray-300 hover:text-white"
                      >
                        <Facebook className="h-4 w-4 mr-2"/>
                        <span>Facebook</span>
                      </a>
                      <a
                        href={getShareUrl('twitter')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-slate-700 rounded transition-colors text-gray-300 hover:text-white"
                      >
                        <Twitter className="h-4 w-4 mr-2"/>
                        <span>Twitter</span>
                      </a>
                      <a
                        href={getShareUrl('linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-slate-700 rounded transition-colors text-gray-300 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4 mr-2"/>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center">
              <span className="text-6xl">📊</span>
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}/>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-300 bg-slate-700 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="border-t border-gray-600 my-12"/>
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-slate-800/50 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative bg-slate-700 flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-blue-400">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center px-4 py-2 border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4"/>
                All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

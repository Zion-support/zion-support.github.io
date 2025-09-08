
import React from 'react';
import { useParams, Link  } from 'react-router-dom';
import { motion  } from 'framer-motion';
import { Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Tag,
  Share2,
  BookOpen,
  MessageCircle,
  Heart,
  Eye,
  ArrowRight
 } from 'lucide-react';

function BlogPost(...args: any[]): any {
  const { id } = useParams();
  
  useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(p => 
        p.id !== currentPost.id && 
        (p.category === currentPost.category || 
         p.tags.some(tag => currentPost.tags.includes(tag)))
      ).slice(0, 3);
      
      <h3 class="text-xl font-semibold text-white mb-3 mt-6">Key Trends Shaping AI Adoption</h3>
      <ul class="list-disc list-inside mb-6 text-zion-slate-light space-y-2">
        <li><strong>Democratization of AI:</strong> Cloud-based AI services are making advanced capabilities accessible to small and medium businesses</li>
        <li><strong>AI-Powered Analytics:</strong> Real-time insights and predictive modeling are becoming standard business practices</li>
        <li><strong>Conversational AI:</strong> Chatbots and virtual assistants are improving customer service and engagement</li>
        <li><strong>AI in Cybersecurity:</strong> Machine learning is enhancing threat detection and response capabilities</li>
      </ul>
    `,
    author: "Kleber Santos",
    authorAvatar: "KS",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    views: "2.4k",
    likes: "156",
    comments: "23",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags["AI", "Business", "Technology", "Innovation"],
    relatedPosts[
      {
        id: "2",
        title: "AI-Powered Cybersecurity: Protecting Your Business",
        excerpt: "Learn how AI is revolutionizing cybersecurity and protecting businesses from evolving threats.",
        category: "Cybersecurity",
        readTime: "6 min read",
        publishDate: "2024-01-10",
        slug: "ai-cybersecurity"
      },
      {
        id: "3",
        title: "The Rise of Quantum Computing in Business",
        excerpt: "Explore how quantum computing will transform business operations and create new opportunities.",
        category: "Quantum Computing",
        readTime: "7 min read",
        publishDate: "2024-01-05",
        slug: "quantum-computing-business"
      }
  {/* Removed stray closing bracket */}
  };

  const formatDate = (dateString: string)  => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage={post.featuredImage}
        canonical={`https://ziontechgroup.com/blog/${post.slug}`}
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        image={post.featuredImage}
        canonical={`${window.location.origin}/blog/${slug}`}
        type="article"
        author={post.author?.name || 'Zion Tech Group'}
        publishedTime={post.publishedDate}
        tags={post.tags}
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
          
          {/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              {post.excerpt}
            </p>
            
            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/blog-placeholder.svg";
                  }}
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">{post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Author Info */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-zion-purple/80 rounded-full flex items-center justify-center text-white font-bold">
                      {blogPost.authorAvatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{blogPost.author}</p>
                      <p className="text-zion-slate-light text-sm">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light text-sm">
                    Technology visionary with 15+ years of experience in AI, cybersecurity, and digital transformation.
                  </p>
                </div>

                {/* Reading Time */}
                <div className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-6 mb-8">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-zion-cyan" />
                    <div>
                      <p className="text-white font-medium">Reading Time</p>
                      <p className="text-zion-slate-light text-sm">{blogPost.readTime}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Articles</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Continue exploring insights and trends in technology and business.
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 gap-8">
            {blogPost.relatedPosts.map((post, index)  => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-zion-cyan/60 text-xs">•</span>
                  <span className="text-zion-cyan/60 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zion-cyan/80 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan/60 text-xs">{formatDate(post.publishDate)}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>
                  
                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                      <a
                        href={getShareUrl('facebook')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on Facebook"
                        title="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={getShareUrl('twitter')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on Twitter"
                        title="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span>Twitter</span>
                      </a>
                      <a
                        href={getShareUrl('linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
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
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/blog-placeholder.svg";
                }}
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <Separator className="my-12 bg-zion-blue-light" />
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <img 
                          src={relatedPost.featuredImage} 
                          alt={relatedPost.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/images/blog-placeholder.svg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link to="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

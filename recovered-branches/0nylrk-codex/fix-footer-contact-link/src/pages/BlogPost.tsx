
import { useState, useEffect } from "react",
import { useParams, Link, useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator",
import { AppLayout } from "@/layout/AppLayout",
// Importing the sample blog posts - in a real app, you would fetch this from an API,
import { BLOGPOSTS } from "@/data/blog-posts",export default function BlogPost() {
  const { slug } = useParams() as { slug: string },
  const navigate = useNavigate(),
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState(false),
  
  useEffect(() => {
    // Find the current post by slug,
const currentPost = BLOGPOSTS.find(p => p.slug === slug),
import type {BlogPost as BlogPostType} from "@/types/blog";

// Importing the sample blog posts - in a real app, you would fetch this from an API,
export default function BlogPost() {const { slug} = useParams() as {slug: string};
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  useEffect_(() => {_// Find the current post by slug,
const currentPost = BLOGPOSTS.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost),
      
      // Find related posts (same category, excluding current post)
      const related = BLOGPOSTS.filter(p => 
        p.id !== currentPost.id && 
        (p.category === currentPost.category || 
         p.tags.some(tag => currentPost.tags.includes(tag)))
      ).slice(0, 3),
      
      setRelatedPosts(related)
    } else {
      // Post not found,
navigate("/blog", { replace: true })      ).slice(0, 3);
      
      setRelatedPosts(related)} else {_// Post not found,
navigate("/blog", _{ replace: true})
    }
    
    // Scroll to top when post changes,
window.scrollTo(0, 0)
  }, [slug, navigate]),
  
  if (!post) {return (
      <AppLayout>
        <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center&quot;>
          <div className=&quot;animate-pulse&quot;>Loading article...</div>
        </div>
      </AppLayout>
    )
  }
  
  // Helper function to get share URL,
const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href),
    const title = encodeURIComponent(post.title),    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      default: return '#'    }
  },
  
  return (
    <AppLayout>
      <SEO,
title={post.title} 
        description={post.excerpt} 
        keywords={post.tags.join(&quot;, &quot;)}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          {/* Back to blog button */}
          <div className=&quot;mb-8&quot;>            <Button,
variant=&quot;outline&quot; 
              className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
              asChild
            >
              <Link to=&quot;/blog&quot;>
                <ArrowLeft className=&quot;mr-2 h-4 w-4&quot; />
                Back to all articles
              </Link>
            </Button>
          </div>
          
          {/* Article header */}
          <div className=&quot;mb-8 max-w-4xl mx-auto&quot;>
            <span className=&quot;text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4&quot;>
              {post.category}
            </span>
            <h1 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              {post.title}
            </h1>
            <p className=&quot;text-xl text-zion-slate-light mb-8&quot;>
              {post.excerpt}
            </p>
            
            {/* Author and metadata */}
            <div className=&quot;flex flex-col sm:flex-row sm:items-center justify-between mb-8&quot;>
              <div className=&quot;flex items-center mb-4 sm:mb-0&quot;>
                <img,
src={post.author.avatarUrl} 
                  alt={post.author.name} 
                  className=&quot;w-12 h-12 rounded-full mr-3&quot;
                  onError={(e) => {
                    const target = e.target as HTMLImageElement,
                    target.src = "https: //images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"                  }}
                />
                <div>
                  <p className=&quot;text-white font-medium&quot;>{post.author.name}</p>
                  <p className=&quot;text-sm text-zion-slate-light&quot;>{post.author.title}</p>
                </div>
              </div>
              
              <div className=&quot;flex items-center space-x-4&quot;>
                <div className=&quot;flex items-center text-zion-slate-light&quot;>
                  <Calendar className=&quot;h-4 w-4 mr-1&quot; />
                  <span className=&quot;text-sm&quot;>{post.publishedDate}</span>
                </div>
                <div className=&quot;flex items-center text-zion-slate-light&quot;>
                  <Clock className=&quot;h-4 w-4 mr-1&quot; />
                  <span className=&quot;text-sm&quot;>{post.readTime}</span>
          {_/* Article header */}
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
            
            {_/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <img,
src={post.author.avatarUrl} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full mr-3"
                  onError={_(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"}}
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
                <div className=&quot;relative&quot;>
                  <Button,
variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
                    className=&quot;text-zion-slate-light hover:text-white hover:bg-zion-blue-dark&quot;
                    onClick={() => setShowShareMenu(!showShareMenu)}                  >
                    <Share2 className=&quot;h-4 w-4 mr-1&quot; />
                    <span className=&quot;text-sm&quot;>Share</span>
                  </Button>
                  
                  {showShareMenu && (
                    <div className=&quot;absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10&quot;>                      <a,
href={getShareUrl('facebook')} 
                        target=&quot;blank&quot; 
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                      >
                        <Facebook className=&quot;h-4 w-4 mr-2&quot; />
                        <span>Facebook</span>
                      </Link>
                      <a,
href={getShareUrl('twitter')} 
                        target=&quot;blank&quot; 
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;                      >
                        <Twitter className=&quot;h-4 w-4 mr-2&quot; />
                        <span>Twitter</span>
                      </Link>
                      <a,
href={getShareUrl('linkedin')} 
                        target=&quot;blank&quot; 
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;                      >
                        <Linkedin className=&quot;h-4 w-4 mr-2&quot; />
                        <span>LinkedIn</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className=&quot;mb-12 max-w-5xl mx-auto&quot;>
            <div className=&quot;aspect-[21/9] rounded-lg overflow-hidden&quot;>
              <img,
src={post.featuredImage} 
                alt={post.title}
                className=&quot;object-cover w-full h-full&quot;
                onError={(e) => {
                  const target = e.target as HTMLImageElement,
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"                }}
          {_/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img,
src={post.featuredImage} 
                alt={post.title}
                className="object-cover w-full h-full"
                onError={_(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"}}
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div,
className=&quot;prose prose-lg prose-invert max-w-none&quot;
              dangerouslySetInnerHTML={{ _html: post.content }}
            />
            
            {/* Tags */}
            <div className=&quot;flex flex-wrap gap-2 mt-12&quot;>
              {post.tags.map(tag => (                <span,
key={tag} 
                  className=&quot;text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full&quot;
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <Separator className=&quot;my-12 bg-zion-blue-light&quot; />
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className=&quot;mt-12&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Related Articles</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                  {relatedPosts.map(relatedPost => (
                    <Link,
key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300&quot;                    >
                      <div className=&quot;aspect-[16/9] relative&quot;>
                        <img,
src={relatedPost.featuredImage} 
                          alt={relatedPost.title}
                          className=&quot;object-cover w-full h-full&quot;
                          onError={(e) => {
                            const target = e.target as HTMLImageElement,
                            target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"                          }}
                        />
                      </div>
                      <div className=&quot;p-4&quot;>
                        <span className=&quot;text-xs text-zion-cyan&quot;>{relatedPost.category}</span>
                        <h4 className=&quot;text-white font-bold mt-1 line-clamp-2&quot;>{relatedPost.title}</h4>
                          src={relatedPost.featuredImage} 
                          alt={relatedPost.title}
                          className="object-cover w-full h-full"
                          onError={_(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"}}
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
            <div className=&quot;flex justify-between items-center mt-12&quot;>              <Button,
variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"                asChild
              >
                <Link to=&quot;/blog&quot;>
                  <ChevronLeft className=&quot;mr-2 h-4 w-4&quot; />
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

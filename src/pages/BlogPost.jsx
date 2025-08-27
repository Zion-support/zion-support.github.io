import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
<<<<<<< HEAD
import { Separator } from "@/components/ui/separator";
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts";
export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [showShareMenu, setShowShareMenu] = useState(false);
    useEffect(() => {
        // Find the current post by slug
        const currentPost = BLOG_POSTS.find(p => p.slug === slug);
        if (currentPost) {
            setPost(currentPost);
            // Find related posts (same category, excluding current post)
            const related = BLOG_POSTS.filter(p => p.id !== currentPost.id &&
                (p.category === currentPost.category ||
                    p.tags.some(tag => currentPost.tags.includes(tag)))).slice(0, 3);
            setRelatedPosts(related);
        }
        else {
            // Post not found
            navigate("/blog", { replace: true });
        }
        // Scroll to top when post changes
        window.scrollTo(0, 0);
    }, [slug, navigate]);
    if (!post) {
        return (<div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>);
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
    return (<>
      <SEO title={post.title} description={post.excerpt} keywords={post.tags.join(", ")} ogImage={post.featuredImage} canonical={`https://ziontechgroup.com/blog/${post.slug}`}/>
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
          <div className="mb-8">
            <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4"/>
                Back to all articles
              </Link>
            </Button>
          </div>
=======
// Mock blog post data for now
const MOCK_BLOG_POST = {
  id: 1,
  title: "The Future of AI in Business",
  excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
  content: `
    <p>Artificial Intelligence (AI) is revolutionizing the way businesses operate, from customer service to decision-making processes. Companies that embrace AI technology are seeing significant improvements in efficiency, productivity, and customer satisfaction.</p>
    
    <h2>The Impact of AI on Business Operations</h2>
    <p>AI-powered solutions are automating routine tasks, analyzing vast amounts of data, and providing insights that were previously impossible to obtain. This transformation is happening across all industries, from healthcare to finance to retail.</p>
    
    <h2>Key Benefits of AI Implementation</h2>
    <ul>
      <li>Increased operational efficiency</li>
      <li>Better customer experiences</li>
      <li>Data-driven decision making</li>
      <li>Cost reduction through automation</li>
      <li>Improved accuracy and consistency</li>
    </ul>
    
    <h2>Looking Ahead</h2>
    <p>As AI technology continues to evolve, businesses that stay ahead of the curve will have a significant competitive advantage. The future belongs to those who can effectively integrate AI into their operations while maintaining the human touch that customers value.</p>
  `,
  category: "AI & Technology",
  publishedDate: "2024-01-15",
  readTime: "5 min read",
  author: { name: "Zion Tech Team", title: "AI Specialist", avatarUrl: "/images/avatar-placeholder.jpg" },
  featuredImage: "/images/blog-ai-future.jpg",
  slug: "future-of-ai-business",
  tags: ["AI", "Business", "Technology", "Innovation", "Digital Transformation"]
};
export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(MOCK_BLOG_POST);
  const [showShareMenu, setShowShareMenu] = useState(false);
  useEffect(() => {
    // In a real app, you would fetch the post by slug from an API
    // For now, we'll use the mock data
    if (!post) {
      navigate("/blog", { replace: true });
    }
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug, navigate, post]);
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to blog button */}
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center px-4 py-2 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Back to all articles
          </Link>
        </div>
        
        {/* Article header */}
        <div className="mb-8 max-w-4xl mx-auto">
          <span className="text-sm text-zion-cyan bg-zion-slate-dark/50 px-3 py-1 rounded-full inline-block mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-zion-slate-light mb-8">
            {post.excerpt}
          </p>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
          
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
                <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full mr-3" onError={(e) => {
            const target = e.target;
            target.src = "/images/blog-placeholder.svg";
        }}/>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">{post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1"/>
                  <span className="text-sm">{post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1"/>
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="relative">
                  <Button variant="ghost" size="sm" className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark" onClick={() => setShowShareMenu(!showShareMenu)}>
                    <Share2 className="h-4 w-4 mr-1"/>
                    <span className="text-sm">Share</span>
                  </Button>
                  
                  {showShareMenu && (<div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                      <a href={getShareUrl('facebook')} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white" aria-label="Share on Facebook" title="Share on Facebook">
                        <Facebook className="h-4 w-4 mr-2"/>
                        <span>Facebook</span>
                      </a>
                      <a href={getShareUrl('twitter')} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white" aria-label="Share on Twitter" title="Share on Twitter">
                        <Twitter className="h-4 w-4 mr-2"/>
                        <span>Twitter</span>
                      </a>
                      <a href={getShareUrl('linkedin')} target="_blank" rel="noopener noreferrer" className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white" aria-label="Share on LinkedIn" title="Share on LinkedIn">
                        <Linkedin className="h-4 w-4 mr-2"/>
                        <span>LinkedIn</span>
                      </a>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img src={post.featuredImage} alt={post.title} className="object-cover w-full h-full" onError={(e) => {
            const target = e.target;
            target.src = "/images/blog-placeholder.svg";
        }}/>
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}/>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (<span key={tag} className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full">
                  #{tag}
                </span>))}
            </div>
            
            <Separator className="my-12 bg-zion-blue-light"/>
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (<div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (<Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">
                      <div className="aspect-[16/9] relative">
                        <img src={relatedPost.featuredImage} alt={relatedPost.title} className="object-cover w-full h-full" onError={(e) => {
                    const target = e.target;
                    target.src = "/images/blog-placeholder.svg";
                }}/>
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>))}
                </div>
              </div>)}
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
                <Link to="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4"/>
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>);
}

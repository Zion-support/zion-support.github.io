import { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SEO } from &quot;@/components/SEO&quot;;
import JsonLd from &quot;@/components/JsonLd&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from &quot;@/types/blog&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import ReactMarkdown from 'react-markdown';
import {logErrorToProduction} from '@/utils/productionLogger';

// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from &quot;@/data/blog-posts&quot;;
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';

export default function BlogPost() {

  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const timedOut = useSkeletonTimeout(20000);
  
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== data.id &&
            (p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;
      } catch (err) {
        logErrorToProduction('Failed to fetch blog post', { data: err });
        setError('Failed to load article');
      }

      const currentPost = BLOG_POSTS.find((p) => p.slug === slug);
      if (currentPost) {
        setPost(currentPost);
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== currentPost.id &&
            (p.category === currentPost.category ||
              p.tags.some((tag) => currentPost.tags.includes(tag)))
        ).slice(0, 3);
        setRelatedPosts(related);
      } else {
        router.replace('/blog');
      }
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, router]);
  
  if (isLoading && !timedOut) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center&quot;>
        <div className=&quot;animate-pulse&quot;>Loading article...</div>
      </div>
    );
  }

  if (!post && (error || timedOut)) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4&quot;>
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    );
  }

  // If post is still null after loading, show not found
  if (!post) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4&quot;>
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return '';
    
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

  const articleLd = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;BlogPosting&quot;,
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
      &quot;@type&quot;: &quot;Person&quot;,
      name: post.author.name}};
  
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(&quot;, &quot;)}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <JsonLd data={articleLd} />
      <div className=&quot;min-h-screen bg-zion-blue pt-12 pb-20 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          {/* Back to blog button */}
          <div className=&quot;mb-8&quot;>
            <Button 
              variant=&quot;outline&quot; 
              className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
              asChild
            >
              <Link href=&quot;/blog&quot;>
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
                <ImageWithRetry
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className=&quot;w-12 h-12 rounded-full mr-3&quot;
                  fallbackSrc=&quot;/images/blog-placeholder.svg&quot;
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
                </div>
                <div className=&quot;relative&quot;>
                  <Button 
                    variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
                    className=&quot;text-zion-slate-light hover:text-white hover:bg-zion-blue-dark&quot;
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className=&quot;h-4 w-4 mr-1&quot; />
                    <span className=&quot;text-sm&quot;>Share</span>
                  </Button>
                  
                  {showShareMenu && (
                    <div className=&quot;absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10&quot;>
                      <a
                        href={getShareUrl('facebook')}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                        aria-label=&quot;Share on Facebook&quot;
                        title=&quot;Share on Facebook&quot;
                      >
                        <Facebook className=&quot;h-4 w-4 mr-2&quot; />
                        <span>Facebook</span>
                      </Link>
                      <a
                        href={getShareUrl('twitter')}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                        aria-label=&quot;Share on Twitter&quot;
                        title=&quot;Share on Twitter&quot;
                      >
                        <Twitter className=&quot;h-4 w-4 mr-2&quot; />
                        <span>Twitter</span>
                      </Link>
                      <a
                        href={getShareUrl('linkedin')}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                        aria-label=&quot;Share on LinkedIn&quot;
                        title=&quot;Share on LinkedIn&quot;
                      >
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
              <ImageWithRetry
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className=&quot;object-cover w-full h-full&quot;
                fallbackSrc=&quot;/images/blog-placeholder.svg&quot;
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;prose prose-lg prose-invert max-w-none&quot;>
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Tags */}
            <div className=&quot;flex flex-wrap gap-2 mt-12&quot;>
              {post.tags.map(tag => (
                <span 
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
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300&quot;
                    >
                      <div className=&quot;aspect-[16/9] relative&quot;>
                        <ImageWithRetry
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt || relatedPost.title}
                          className=&quot;object-cover w-full h-full&quot;
                          fallbackSrc=&quot;/images/blog-placeholder.svg&quot;
                        />
                      </div>
                      <div className=&quot;p-4&quot;>
                        <span className=&quot;text-xs text-zion-cyan&quot;>{relatedPost.category}</span>
                        <h4 className=&quot;text-white font-bold mt-1 line-clamp-2&quot;>{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className=&quot;mt-12 text-center&quot;>
              <p className=&quot;text-zion-slate-light&quot;>
                Ready to put these ideas into action? Explore our{' '}
                <Link href=&quot;/services&quot; className=&quot;text-zion-cyan underline&quot;>AI services</Link>{' '}
                or browse expert{' '}
                <Link href=&quot;/talent&quot; className=&quot;text-zion-cyan underline&quot;>talent</Link> to accelerate your projects.
              </p>
            </div>

            {/* Navigation */}
            <div className=&quot;flex justify-between items-center mt-12&quot;>
              <Button
                variant=&quot;outline&quot;
                className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
                asChild
              >
                <Link href=&quot;/blog&quot;>
                  <ChevronLeft className=&quot;mr-2 h-4 w-4&quot; />
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

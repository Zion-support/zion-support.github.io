<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import Link from 'next/link',
import { SEO } from "@/components/SEO",
import JsonLd from "@/components/JsonLd",
import { Button } from "@/components/ui/button",
import ImageWithRetry from '@/components/ui/ImageWithRetry',
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator",
import ReactMarkdown from 'react-markdown',
import {logErrorToProduction} from '@/utils/productionLogger',
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout',
import { fetchWithRetry } from '@/utils/fetchWithRetry',
=======
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
=======
import Link from 'next/link';
import JsonLd from "@/components/JsonLd";
import ImageWithRetry from '@/components/ui/ImageWithRetry';
import type {_BlogPost as BlogPostType} from "@/types/blog";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
import ReactMarkdown from 'react-markdown';

// Importing the sample blog posts - in a real app, you would fetch this from an API
<<<<<<< HEAD
import { BLOG_POSTS } from &quot;@/data/blog-posts&quot;;
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function BlogPost() {

  const router = useRouter(),
  const { slug } = router.query as { slug: string },
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState(false),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const timedOut = useSkeletonTimeout(20000),
  
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true),
      setError(null),
      try {
        const data = await fetchWithRetry(`/api/blog/${slug}`),
        setPost(data),
        const related = BLOG_POSTS.filter(
          (p) =>
=======

export default function BlogPost() {_const _router = useRouter();
  const { slug} = router.query as {_slug: string};
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const _timedOut = useSkeletonTimeout(20000);
  
  useEffect__(() => {_const _fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const _data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const _related = BLOG_POSTS.filter(_(p) =>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            p.id !== data.id &&
            (_p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
<<<<<<< HEAD
        ).slice(0, 3),
        setRelatedPosts(related),
        setIsLoading(false),
        return
      } catch (err) {
        logErrorToProduction('Failed to fetch blog post', { data: err }),
        setError('Failed to load article')
      }

      const currentPost = BLOG_POSTS.find((p) => p.slug === slug),
      if (currentPost) {
        setPost(currentPost),
        const related = BLOG_POSTS.filter(
          (p) =>
=======
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;
      } catch (err) {_logErrorToProduction('Failed to fetch blog post', _{ data: err});
        setError('Failed to load article');
      }

      const _currentPost = BLOG_POSTS.find(_(p) => p.slug === slug);
      if (currentPost) {_setPost(currentPost);
        const _related = BLOG_POSTS.filter(_(p) =>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            p.id !== currentPost.id &&
            (_p.category === currentPost.category ||
              p.tags.some((tag) => currentPost.tags.includes(tag)))
<<<<<<< HEAD
        ).slice(0, 3),
        setRelatedPosts(related)
      } else {
        router.replace('/blog')
      }
      setIsLoading(false)
    },

    fetchPost(),
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router]),
  
  if (isLoading && !timedOut) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center&quot;>
        <div className=&quot;animate-pulse&quot;>Loading article...</div>
      </div>
    )
  }

  if (!post && (error || timedOut)) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4&quot;>
=======
        ).slice(0, _3);
        setRelatedPosts(related);} else {_router.replace('/blog');}
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo({_top: 0, _behavior: 'smooth'});
  }, [slug, router]);
  
  if (isLoading && !timedOut) {_return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    );}

  if (!post && (error || timedOut)) {_return (_<div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    )
  }

  // If post is still null after loading, show not found
<<<<<<< HEAD
  if (!post) {
    return (
      <div className=&quot;min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4&quot;>
=======
  if (!post) {_return (_<div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    )
  }

<<<<<<< HEAD
  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return '',
    
    const url = encodeURIComponent(window.location.href),
    const title = encodeURIComponent(post.title),
=======
  // Helper function to get share window.URL
  const _getShareUrl = (_platform: string) => {_if (!post) return '';
    
    const _url = encodeURIComponent(window.location.href);
    const _title = encodeURIComponent(post.title);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      case 'twitter':
<<<<<<< HEAD
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
      default: return '#'
=======
        return `https://twitter.com/intent/tweet?url=${_url}&text=${_title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${_url}&title=${_title}`;
      default:
        return '#';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  const articleLd = {
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;BlogPosting&quot;,
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
<<<<<<< HEAD
      "@type": "Person",
      name: post.author.name}},
=======
      &quot;@type&quot;: &quot;Person&quot;,
      name: post.author.name}};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _articleLd = {_"@context": "https://schema.org", _"@type": "BlogPosting", _headline: post.title, _description: post.excerpt, _image: post.featuredImage, _datePublished: post.publishedDate, _author: {
      "@type": "Person", _name: post.author.name}};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <>
      <SEO
<<<<<<< HEAD
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
=======
        title={_post.title}
        description={_post.excerpt}
        keywords={_post.tags.join(", _")}
        ogImage={_post.featuredImage}
        canonical={_`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <JsonLd data={_articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {_/* Back to blog button */}
          <div className="mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          
<<<<<<< HEAD
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
=======
          {_/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {_post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {_post.title}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              {_post.excerpt}
            </p>
            
            {_/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <ImageWithRetry
                  src={_post.author.avatarUrl}
                  alt={_post.author.name}
                  className="w-12 h-12 rounded-full mr-3"
                  fallbackSrc="/images/blog-placeholder.svg"
                />
                <div>
                  <p className="text-white font-medium">{_post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">{_post.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{_post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{_post.readTime}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                <div className=&quot;relative&quot;>
                  <Button 
<<<<<<< HEAD
                    variant=&quot;ghost&quot; 
                    size=&quot;sm&quot;
                    className=&quot;text-zion-slate-light hover:text-white hover:bg-zion-blue-dark&quot;
                    onClick={() => setShowShareMenu(!showShareMenu)}
=======
                    variant="ghost" 
                    size="sm"
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                    onClick={_() => setShowShareMenu(!showShareMenu)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Share2 className=&quot;h-4 w-4 mr-1&quot; />
                    <span className=&quot;text-sm&quot;>Share</span>
                  </Button>
                  
<<<<<<< HEAD
                  {showShareMenu && (
                    <div className=&quot;absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10&quot;>
=======
                  {_showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
                        href={getShareUrl('twitter')}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                        aria-label=&quot;Share on Twitter&quot;
                        title=&quot;Share on Twitter&quot;
=======
                        href={_getShareUrl('twitter')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on Twitter"
                        title="Share on Twitter"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <Twitter className=&quot;h-4 w-4 mr-2&quot; />
                        <span>Twitter</span>
                      </Link>
                      <a
<<<<<<< HEAD
                        href={getShareUrl('linkedin')}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white&quot;
                        aria-label=&quot;Share on LinkedIn&quot;
                        title=&quot;Share on LinkedIn&quot;
=======
                        href={_getShareUrl('linkedin')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                        aria-label="Share on LinkedIn"
                        title="Share on LinkedIn"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          
<<<<<<< HEAD
          {/* Featured image */}
          <div className=&quot;mb-12 max-w-5xl mx-auto&quot;>
            <div className=&quot;aspect-[21/9] rounded-lg overflow-hidden&quot;>
              <ImageWithRetry
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className=&quot;object-cover w-full h-full&quot;
                fallbackSrc=&quot;/images/blog-placeholder.svg&quot;
=======
          {_/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <ImageWithRetry
                src={_post.featuredImage}
                alt={_post.featuredImageAlt || post.title}
                className="object-cover w-full h-full"
                fallbackSrc="/images/blog-placeholder.svg"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              />
            </div>
          </div>
          
<<<<<<< HEAD
          {/* Article content */}
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;prose prose-lg prose-invert max-w-none&quot;>
=======
          {_/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <ReactMarkdown>
                {_post.content}
              </ReactMarkdown>
            </div>
            
<<<<<<< HEAD
            {/* Tags */}
            <div className=&quot;flex flex-wrap gap-2 mt-12&quot;>
              {post.tags.map(tag => (
=======
            {_/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {_post.tags.map(tag => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span 
                  key={tag} 
                  className=&quot;text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full&quot;
                >
                  #{_tag}
                </span>
              ))}
            </div>
            
            <Separator className=&quot;my-12 bg-zion-blue-light&quot; />
            
<<<<<<< HEAD
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
=======
            {_/* Related articles */}
            {_relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      href={_`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <div className=&quot;aspect-[16/9] relative&quot;>
                        <ImageWithRetry
<<<<<<< HEAD
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt || relatedPost.title}
                          className=&quot;object-cover w-full h-full&quot;
                          fallbackSrc=&quot;/images/blog-placeholder.svg&quot;
                        />
                      </div>
                      <div className=&quot;p-4&quot;>
                        <span className=&quot;text-xs text-zion-cyan&quot;>{relatedPost.category}</span>
                        <h4 className=&quot;text-white font-bold mt-1 line-clamp-2&quot;>{relatedPost.title}</h4>
=======
                          src={_relatedPost.featuredImage}
                          alt={_relatedPost.featuredImageAlt || relatedPost.title}
                          className="object-cover w-full h-full"
                          fallbackSrc="/images/blog-placeholder.svg"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{_relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{_relatedPost.title}</h4>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

<<<<<<< HEAD
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
=======
            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">
                Ready to put these ideas into action? Explore our{_' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{_' '}
                or browse expert{_' '}
                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.
              </p>
            </div>

            {_/* Navigation */}
            <div className="flex justify-between items-center mt-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button
<<<<<<< HEAD
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
=======
                variant=&quot;outline&quot;
                className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
  )
}

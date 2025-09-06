
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SEO } from '@/components/SEO'
import JsonLd from '@/components/JsonLd'
import { Button } from '@/components/ui/button'
import ImageWithRetry from '@/components/ui/ImageWithRetry'
import {
  ArrowLeft
  Calendar
  Clock
  ChevronLeft
  ChevronRight
  Share2
  Facebook
  Twitter
  Linkedin
} from 'lucide-react'
import type { BlogPost as BlogPostType } from '@/types/blog'
import { Separator } from '@/components/ui/separator'
import ReactMarkdown from 'react-markdown'
import { logErrorToProduction } from '@/utils/productionLogger'
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from '@/data/blog-posts'
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout'
import { fetchWithRetry } from '@/utils/fetchWithRetry'
export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const timedOut = useSkeletonTimeout(20000)
  useEffect(() => {import { useRouter } from 'next/router'
import { SEO } from "@/components/SEO"
import JsonLd from "@/components/JsonLd"
import { Button } from "@/components/ui/button"

import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from '@/utils/productionLogger';
// Importing the sample blog posts - in a real app, you would fetch this from an API

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

export default function BlogPost() {


import { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import Link from 'next / link';
import { SEO } from '@/components / SEO';
import JsonLd from '@/components / JsonLd';
import { Button } from '@/components / ui / button';
import ImageWithRetry from '@/components / ui / ImageWithRetry';
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import type { BlogPost as BlogPostType } from '@/types / blog';
import { Separator } from '@/components / ui / separator';
import ReactMarkdown from 'react - markdown';
import { logErrorToProduction } from '@/utils / production_logger';
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from '@/data / blog - posts';
import { useSkeletonTimeout } from '@/hooks / useSkeletonTimeout';
import { fetchWithRetry } from '@/utils / fetchWithRetry';
export default /**
 * BlogPost - Function description
 */
function BlogPost() {
  const router = use_router ();
  const { slug } = router.query as { slug: string }
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const timedOut = useSkeletonTimeout(20000)
  useEffect((,) => {
    const fetchPost = async () => {

      const currentPost = BLOG_POSTS.find(p => p.slug === slug);      if (currentPost) {
        setPost(currentPost)
        const related = BLOG_POSTS.filter(
          p =>
            p.id !== currentPost.id &&
            (p.category === currentPost.category |
              p.tags.some(tag => currentPost.tags.includes(tag)))
        ).slice(0, 3)
        setRelatedPosts(related) } else {
        router.replace('/blog')
      const current_post = BLOG_POSTS.find (p => p.slug === slug);      // Check condition
if ( {) {
  $2
}
        set_post (current_post);
        const related = BLOG_POSTS.filter (
          p =>;
            p.id !== current_post.id &&;
            (p.category === current_post.category ||;
              p.tags.some (tag => current_post.tags.includes (tag)))).slice (0, 3);
        setRelatedPosts (related) } else {
        router.replace ('/blog');
      }
      setIsLoading (false);
    }

    fetchPost()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router])

      setIsLoading(true),
      setError(null),
      try {
        const data = await fetchWithRetry(`/api/blog/${slug}`),
        setPost(data),
        const related = BLOG_POSTS.filter(
          (p) =>
            p.id !== data.id &&
            (p.category === data.category ||
              p.tags.some((tag) => data.tags.includes(tag)))
        ).slice(0, 3),
        setRelatedPosts(related),
        setIsLoading(false),
        return
      } catch (err) {
        logErrorToProduction('Failed to fetch blog post', { data: err }),
        setError('Failed to load article')
import { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import Link from 'next/link',;
import { SEO } from "@/components/SEO",;
import JsonLd from "@/components/JsonLd",;
import { Button } from "@/components/ui/button",;
import ImageWithRetry from '@/components/ui/ImageWithRetry',;
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog",;
import { Separator } from "@/components/ui/separator",;
import ReactMarkdown from 'react-markdown',;
import {logErrorToProduction} from '@/utils/productionLogger',;
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from "@/data/blog-posts",;
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout',;
import { fetchWithRetry } from '@/utils/fetchWithRetry',;
export default function BlogPost() {;
  const router = useRouter(),;
  const { slug } = router.query as { slug: string },;
  const [post, setPost] = useState<BlogPostType | null>(null),;
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),;
  const [showShareMenu, setShowShareMenu] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const timedOut = useSkeletonTimeout(20000),;
  useEffect(() => {;
    const fetchPost = async () => {;
      setIsLoading(true),;
      setError(null),;
      try {;
        const data = await fetchWithRetry(`/api/blog/${slug}`),;
        setPost(data),;
        const related = BLOG_POSTS.filter(;
          (p) =>;
            p.id !== data.id &&;
            (p.category === data.category ||;
              p.tags.some((tag) => data.tags.includes(tag)));
        ).slice(0, 3),;
        setRelatedPosts(related),;
        setIsLoading(false),;
        return;
      } catch (err) {;
        logErrorToProduction('Failed to fetch blog post', { data: err }),;
        setError('Failed to load article');
      }
;
      const currentPost = BLOG_POSTS.find((p) => p.slug === slug),;
      if (currentPost) {;
        setPost(currentPost),;
        const related = BLOG_POSTS.filter(;
          (p) =>;
            p.id !== currentPost.id &&;
            (p.category === currentPost.category ||;
              p.tags.some((tag) => currentPost.tags.includes(tag)));
        ).slice(0, 3),;
        setRelatedPosts(related);
      } else {;
        router.replace('/blog');
      }
      setIsLoading(false)
    },

    fetchPost(),
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router]),

  if (isLoading && !timedOut) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    )
  }
  if (!post && (error |timedOut)) {
  if () {) {
  $2
}
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Failed to load article.</p>
        <Button onClick={() => router.reload()}>Retry</Button>
      </div>
    )
  }
  // If post is still null after loading, show not found
  if (!post) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4">
        <p>Article not found.</p>
        <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
      </div>
    )
  }

  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return ''
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post.title)
  // Helper function to get share URL;
  const getShareUrl = (platform: string) =>: any {
    // Check condition
if (return '') {
  $2
}
    const url = encodeURIComponent (window.location.href);
    const title = encodeURIComponent (post.title);
    switch (platform) {
      case 'facebook':        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
    switch (platform) {

      case 'facebook':;
        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
      case 'twitter':;
        return `https://twitter.com / intent / tweet?url=${url}&text=${title}`;
      case 'linkedin':;
        return `https://www.linkedin.com / share_article?mini = true & url=${url}&title=${title}`;
      default:;
        return '#';
  }

;
  // Helper function to get share URL;
  const getShareUrl = (platform: string) => {;
    if (!post) return '';

    const url = encodeURIComponent(window && window.location.href);
    const title = encodeURIComponent(post && post.title);
    switch (platform) {;
      case 'facebook':        return `https://www && www.facebook.com/sharer/sharer && sharer.php?u=${url}`;

    switch (platform) {;
      case 'facebook':;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {

      "@type": "Person",
      name: post.author.name}},
  
  return (
    <>
      <SEO
  },;
  const articleLd = {;
    "@context": "https://schema.org",;
    "@type": "BlogPosting",;
    headline: post.title,;
    description: post.excerpt,;
    image: post.featuredImage,;
    datePublished: post.publishedDate,;
    author: {;
      "@type": "Person";
      name: post.author.name}};
  return (;
    <>;
      <SEO;
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}

      />
      <JsonLd data={articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              asChild
            >
              <Link href="/blog">
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

                  #{tag}
                </span>
              ))}
            </div>

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (

                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">

                Ready to put these ideas into action? Explore our{' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{' '}
                or browse expert{' '}

              </p>
            </div>
                to accelerate your projects.;
              </p>;
            </div>;

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.;
              </p>;
            </div>;
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;
              <Button;
                variant="outline";
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
                asChild;
              >;
                <Link href="/blog">;
                  <ChevronLeft className="mr-2 h-4 w-4" />;

                  All Articles;
                </Link>;
              </Button>;
            </div>;

                asChild>;
                <Link href='/blog'>;
                  <ChevronLeft className='mr-2 h-4 w-4' />;
                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
;


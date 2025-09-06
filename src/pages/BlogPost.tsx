
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
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
export default function BlogPost() {;

import { BLOG_POSTS } from "@/data/blog-posts"

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
<<<<<<< HEAD


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
      setIsLoading(false)
    }

    fetchPost()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, router])
=======
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
  

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  if (isLoading && !timedOut) {
    return (
      <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
        <div className="animate-pulse">Loading article...</div>
      </div>
    )
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





>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
      case 'facebook':        return `https://www.facebook.com/sharer/sharer.php?u=${url}`
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    author: {
<<<<<<< HEAD
      '@type': 'Person',
      name: post.author.name,
    },
  }
  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.featuredImage}        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
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
          <div className='mb-8'>;
            <Button
              variant='outline'
              className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'

      <SEO;
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join (', ')}
        og_image={post.featured_image}        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      />;
      <JsonLd data={article_ld} />;
      <div className='min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4'>;
        <div className='container mx - auto'>;
          {/* Back to blog button */}
          <div className='mb - 8'>;
            <Button;
              variant='outline';
              className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';
              as_child;
            >;
              <Link href='/blog'>;
                <ArrowLeft className='mr - 2 h - 4 w - 4' />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;


          
<<<<<<< HEAD

          {/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>



                  #{tag}
                </span>;
              ))}

            </div>;

            <Separator className='my-12 bg-zion-blue-light' />;


            {/* Related articles */}
            {relatedPosts && relatedPosts.length > 0 && (;
              <div className='mt-12'>;
                <h3 className='text-2xl font-bold text-white mb-6'>;
                  Related Articles;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
                  {relatedPosts && relatedPosts.map(relatedPost => (;
                    <Link
                      key={relatedPost && relatedPost.id}                      href={`/blog/${relatedPost && relatedPost.slug}`}
                      className='bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300'>;
                      <div className='aspect-[16/9] relative'>;
                        <ImageWithRetry
                          src={relatedPost && relatedPost.featuredImage}
                          alt={

                            relatedPost && relatedPost.featuredImageAlt || relatedPost && relatedPost.title

                          }
                          className='object-cover w-full h-full'
                          fallbackSrc='/images/blog-placeholder && placeholder.svg'                        />;
                      </div>;
                      <div className='p-4'>;
                        <span className='text-xs text-zion-cyan'>;
                          {relatedPost && relatedPost.category}
                        </span>;
                        <h4 className='text-white font-bold mt-1 line-clamp-2'>;
                          {relatedPost && relatedPost.title}
                        </h4>;
                      </div>;
                    </Link>;
            </div>
            <Separator className='my-12 bg-zion-blue-light' />
            
            <Separator className="my-12 bg-zion-blue-light" />
            
<<<<<<< HEAD

                      </div>
                    </Link>
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <ImageWithRetry
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="object-cover w-full h-full"
                fallbackSrc="/images/blog-placeholder.svg"
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown>
                {post.content}
              </ReactMarkdown>;
            </div>;
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

            <div className='mt-12 text-center'>
              <p className='text-zion-slate-light'>

            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">
            <div className="mt-12 text-center">
              <p className="text-zion-slate-light">
                Ready to put these ideas into action? Explore our{' '}
                <Link href="/services" className="text-zion-cyan underline">AI services</Link>{' '}
                or browse expert{' '}
                <Link href='/talent' className='text-zion-cyan underline'>
                  talent
                </Link>{' '}
                to accelerate your projects.
                <Link href="/talent" className="text-zion-cyan underline">talent</Link> to accelerate your projects.
<<<<<<< HEAD

              </p>
            </div>
                to accelerate your projects.;
              </p>;
            </div>;

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <Button
<<<<<<< HEAD
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles
                </Link>
              </Button>

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
<<<<<<< HEAD

};
outline"className=" border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"asChild > <Link href=" /blog"> <ArrowLeft className=" mr-2 h-4 w-4"/> Back to all articles </Link> </Button> </div> </div> <div className=" relative"> <Button > <Share2 className=" h-4 w-4 mr-1"/> <span className=" text-sm">Share</span> </Button> <ahref= {'
  getShareUrl ('facebook') "
}target=" blank"rel=" noopener noreferrer"className=" flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"aria-label=" Share on Facebook"title=" Share on Facebook"> <Facebook className=" h-4 w-4 mr-2"/> <span>Facebook</span> </Link> <a > <Twitter className=" h-4 w-4 mr-2"/> <span>Twitter</span> </Link> <a > <Linkedin className=" h-4 w-4 mr-2"/> <span>LinkedIn</span> </Link> </div>) ;
}</div> </div> </div> </div> /> </div> </div> <ReactMarkdown> {;
  post && post.content ;
}</ReactMarkdown> </div> <spankey= {
  tag "
}className=" text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"> # {;
  tag ;
}</span>) ) ";
}</div> <Separator className=" my-12 bg-zion-blue-light"/> > <div className=" aspect-[16/9] relative"> <ImageWithRetry </div> </Link>) ) ;
}</div> </div>) ";
}<Button asChild > <Link href=" /blog"> <ChevronLeft className=" mr-2 h-4 w-4" /> All Articles </Link> </Button> </div> </div> </div> </div> </>) ;
}'"import React from 'react';
import { SEO } from '@/components / SEO';
export default function Page() {;
    ],,;
};
  const formatDate = (dateString: string) => {;
    return new Date(dateString) .toLocaleDateString('en - US', {;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric',,;
}) ;
};
  const getCategoryIcon = (category: string) => {;
    const categoryIcons: { [key: string]: any } = {;
      ai: Brain,;
      quantum: Cpu,;
      security: Shield,;
      cloud: Cloud,;
      business: TrendingUp,;
      iot: Network,;
      emerging: Zap,,;
};
    return categoryIcons[category] || BookOpen;
};
  const getCategoryName = (category: string) => {;
    const categoryNames: { [key: string]: string } = {;
      ai: 'Artificial Intelligence',;
      quantum: 'Quantum Computing',;
      security: 'Cybersecurity',;
      cloud: 'Cloud & DevOps',;
      business: 'Business Insights',;
      iot: 'IoT & Edge',;
      emerging: 'Emerging Tech',,;
};
    return categoryNames[category] || 'Uncategorized';
};
  return (<div className="min - h-screen bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">;
      <SEO
        title={`${blogPost && blogPost.title} - Zion Tech Group Blog`}
        description={blogPost && blogPost.excerpt}
      />;

      {/* Navigation */}
      <section className="py-6 bg-slate -800 / 50">;
        <div className="container mx - auto px-4">;
          <Link
            to="/blog"
            className="inline - flex items - center space - x-2 text-cyan - 400 hover:text-cyan - 300 transition - colors duration -200">;
            <ArrowLeft className="w-4 h-4" />;
            <span > Back to Blog</span>;
          </Link>;
        </div>;
      </section>;

      {/* Article Header */}
      <section className="py-12">;
        <div className="container mx - auto px-4">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className="max - w-4xl mx -auto">;
            {/* Category and Featured Badge */}
            <div className="flex items - center space - x-3 mb-6">;
              <span className="px-4 py-2 bg-cyan - 500 / 20 text-cyan - 400 text-sm rounded-full font - medium flex items - center space - x-2">;
                {React && React.createElement (getCategoryIcon (blogPost && blogPost.category) , {;
                  className: 'w-4 h-4',,;
}) }
                <span>{getCategoryName(blogPost && blogPost.category) }</span>;
              </span>;
              {blogPost && blogPost.featured && (<span className="px-4 py-2 bg-yellow-500 / 20 text-yellow-400 text-sm rounded-full font -medium">;
                  Featured Article;

            <div className="flex items - center space - x - 3 mb - 6">;
              <span className="px - 4 py - 2 bg - cyan - 500 / 20 text - cyan - 400 text - sm rounded - full font - medium flex items - center space - x - 2">;
                {React.create_element (getCategoryIcon (blog_post.category) , {
                  class_name: 'w - 4 h - 4', ,
}) }
                <span>{getCategoryName (blog_post.category) }</span>;
              </span>;
              {blog_post.featured && (<span className="px - 4 py - 2 bg - yellow - 500 / 20 text - yellow - 400 text - sm rounded - full font -medium">;
                  Featured Article;
                </span>) }
            </div>
            {/* Title */}

            <h1 className="text - 4xl md:text - 5xl font - bold text - white mb - 6 leading -tight">;
              {blog_post.title}
            </h1>;

            {/* Excerpt */}
            <p className="text-xl text-gray - 300 mb-8 leading -relaxed">
              {blogPost.excerpt}
            </p>
            {/* Article Meta */}
            <div className="flex flex - wrap items - center justify - between gap-4 py-6 border-t border-b border-slate -700 / 50">
              <div className="flex items - center space - x-6">
                <div className="flex items - center space - x-2">
                  <User className="w-5 h-5 text-cyan -400" />
                  <div>
                    <span className="text-white font -medium">
                      {blogPost.author}
                    </span>
                    <span className="text-gray - 400 text-sm block">
                      {blogPost.authorRole}
                    </span>
                  </div>
                </div>
                <div className="flex items - center space - x-2">
                  <Calendar className="w-5 h-5 text-cyan -400" />
                  <span className="text-gray -300">
                    {formatDate(blogPost.date) }
                  </span>
                </div>
                <div className="flex items - center space - x-2">
                  <Clock className="w-5 h-5 text-cyan -400" />
                  <span className="text-gray -300">{blogPost.readTime}</span>
                </div>
              </div>
              <div className="flex items - center space - x-4">
                <button     className="flex items - center space - x-2 text-gray - 400 hover:text-cyan - 400 transition - colors duration -200">
                  <Heart className="w-5 h-5" />
                  <span>{blogPost.likes}</span>
                </button>
                <button     className="flex items - center space - x-2 text-gray - 400 hover:text-cyan - 400 transition - colors duration -200">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button     className="flex items - center space - x-2 text-gray - 400 hover:text-cyan - 400 transition - colors duration -200">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Article Content */}
      <section className="py - 12">;
        <div className="container mx - auto px - 4">;
          <div className="max - w - 4xl mx -auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}

            <h1 className="text-4xl md:text-5xl font - bold text-white mb-6 leading -tight">;
              {blogPost && blogPost.title}
            </h1>;


            {/* Excerpt */}
            <p className="text-xl text-gray - 300 mb-8 leading -relaxed">;
              {blogPost && blogPost.excerpt}
            </p>;


              className="prose prose - invert prose - lg max - w - none">;

              {/* Featured Image */}
              <div className="w-full h-64 bg-gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 rounded-2xl border border-cyan - 400 / 30 flex items - center justify - center mb-12">
                <div className="text-center">
                  <BookOpen className="w-20 h-20 text-cyan - 400 mx - auto mb-4" />
                  <p className="text-gray -300">Featured Article Image</p>
                </div>
              </div>
              {/* Article Content */}

                // TODO: Sanitize content before using dangerouslySetInnerHTML={{ __html: blogPost && blogPost.content }}
              />;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;

      {/* Tags */}
      <section className="py-8 bg-slate -800 / 50">;
        <div className="container mx - auto px-4">;
          <div className="max - w-4xl mx -auto">;
            <div className="flex items - center space - x-3">;
              <Tag className="w-5 h-5 text-cyan -400" />;
              <span className="text-white font -medium">Tags:</span>;
              <div className="flex flex - wrap gap-2">;
                {blogPost && blogPost.tags.map(tag => (<span

              <div;
                className="text - gray - 300 leading -relaxed";
                // TODO: Sanitize content before using dangerouslySetInnerHTML={{ __html: blog_post.content }}
              />;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Tags */}
      <section className="py - 8 bg - slate -800 / 50">;
        <div className="container mx - auto px - 4">;
          <div className="max - w - 4xl mx -auto">;
            <div className="flex items - center space - x - 3">;
              <Tag className="w - 5 h - 5 text - cyan -400" />;
              <span className="text - white font -medium">Tags:</span>;
              <div className="flex flex - wrap gap - 2">;
                {blog_post.tags.map (tag => (<span;
                    key={tag}
                    className="px-3 py-1 bg-slate - 700 / 50 text-cyan - 400 text-sm rounded-full border border-slate - 600 / 50 hover:border-cyan - 400 / 50 transition - all duration -200">
                    {tag}
                  </span>) ) }
              </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </div>
          </div>
        </div>
      </div>
    </>
  )

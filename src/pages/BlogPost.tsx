import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
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
      </div>
    )
  }
  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    if (!post) return ''
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(post.title)
    switch (platform) {
      case 'facebook':        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
    switch (platform) {
    author: {
      '@type': 'Person'
      name: post.author.name
    }
  }
  const router = useRouter(),;
  const { slug } = router && router.query as { slug: string },;
  const [post, setPost] = useState<BlogPostType | null>(null),;
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),;
  const [showShareMenu, setShowShareMenu] = useState(false),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const timedOut = useSkeletonTimeout(20000),;

  useEffect((,) => {;
    const fetchPost = async () => {;
      setIsLoading(true);
      setError(null);
      try {;
        const data = await fetchWithRetry(`/api/blog/${slug}`);
        setPost(data);
        const related = BLOG_POSTS && BLOG_POSTS.filter(;
          p =>;
            p && p.id !== data && data.id &&;
            (p && p.category === data && data.category ||;
              p && p.tags.some(tag => data && data.tags.includes(tag)));
        ).slice(0, 3);
        setRelatedPosts(related);
        setIsLoading(false);
        return;      } catch (err) {;
        logErrorToProduction('Failed to fetch blog post', { data: err });
        setError('Failed to load article');
      }

      const currentPost = BLOG_POSTS && BLOG_POSTS.find(p => p && p.slug === slug);      if (currentPost) {;
        setPost(currentPost);
        const related = BLOG_POSTS && BLOG_POSTS.filter(;
          p =>;
            p && p.id !== currentPost && currentPost.id &&;
            (p && p.category === currentPost && currentPost.category ||;
              p && p.tags.some(tag => currentPost && currentPost.tags.includes(tag)));
        ).slice(0, 3);
        setRelatedPosts(related);      } else {;
        router && router.replace('/blog');
      }
      setIsLoading(false);
    };

    fetchPost();
    window && window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, router]);

  if (isLoading && !timedOut) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center'>;
        <div className='animate-pulse'>Loading article...</div>;
      </div>;
    );
  }

  if (!post && (error || timedOut)) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4'>;
        <p>Failed to load article.</p>;
        <Button onClick={(,) => router && router.reload()}>Retry</Button>;
      </div>;
    );
  }

  // If post is still null after loading, show not found;
  if (!post) {;
    return (
      <div className='min-h-screen bg-zion-blue text-white p-8 flex flex-col justify-center items-center space-y-4'>;
        <p>Article not found.</p>;
        <Button onClick={(,) => router && router.push('/blog')}>Back to Blog</Button>;
      </div>;
    );
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
      />
      <JsonLd data={articleLd} />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
            {/* Author and metadata */}
            <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-8'>;
              <div className='flex items-center mb-4 sm:mb-0'>;
                <ImageWithRetry
                  src={post && post.author.avatarUrl}
                  alt={post && post.author.name}
                  className='w-12 h-12 rounded-full mr-3'
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-zion-slate-light hover:text-white hover:bg-zion-blue-dark'
                      <a
                        href={getShareUrl('facebook')}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white'
                        aria-label='Share on Facebook'
                        title='Share on Facebook'>;
                        <Facebook className='h-4 w-4 mr-2' />;
                        <span>Facebook</span>;
                      </a>;
                      <a
                        href={getShareUrl('twitter')}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white'
                        aria-label='Share on Twitter'
                        title='Share on Twitter'>;
                        <Twitter className='h-4 w-4 mr-2' />;
                        <span>Twitter</span>;
                      </a>;
                      <a
                        href={getShareUrl('linkedin')}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white'
                        aria-label='Share on LinkedIn'
                        title='Share on LinkedIn'>;
                        <Linkedin className='h-4 w-4 mr-2' />;
                        <span>LinkedIn</span>;
                      </a>;
                    </div>;
                  )}

            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
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
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <ImageWithRetry
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt || relatedPost.title}
                          className="object-cover w-full h-full"
                          fallbackSrc="/images/blog-placeholder.svg"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                </div>;
                <div className="flex items - center space - x - 2">;
                  <Calendar className="w - 5 h - 5 text - cyan -400" />;
                  <span className="text - gray -300">;
                    {format_date (blog_post.date) }
                  </span>;
                </div>;
                <div className="flex items - center space - x - 2">;
                  <Clock className="w - 5 h - 5 text - cyan -400" />;
                  <span className="text - gray -300">{blog_post.read_time}</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

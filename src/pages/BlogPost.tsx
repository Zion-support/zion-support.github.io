import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BLOG_POSTS, BlogPost } from '@/data/blog-posts';

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      const foundPost = BLOG_POSTS.find(p => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
        // Get related posts (same category, excluding current post)
        const related = BLOG_POSTS
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      default:
        return url;
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | Zion Tech Group</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && <meta name="twitter:image" content={post.image} />}
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 mb-6"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all articles
                </Link>
              </Button>
              
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                  <p className="text-xl text-blue-100 mb-6">{post.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <Button>
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 hidden">
                    <a
                      href={getShareUrl('facebook')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-2 hover:bg-blue-50 rounded transition-colors text-gray-700 hover:text-blue-600"
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
                      className="flex items-center p-2 hover:bg-blue-50 rounded transition-colors text-gray-700 hover:text-blue-600"
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
                      className="flex items-center p-2 hover:bg-blue-50 rounded transition-colors text-gray-700 hover:text-blue-600"
                      aria-label="Share on LinkedIn"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Separator className="my-12" />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <div className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold mb-2">{relatedPost.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{relatedPost.author}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 text-center">
              <Button asChild>
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
  );
};

export default BlogPostPage;
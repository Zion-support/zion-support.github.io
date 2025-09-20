import React from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from "@/utils/productionLogger";
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BLOG_POSTS } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
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
      <SEO
        title={`${post.title} | Zion AI Blog`}
        description={post.excerpt}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-blue-400 text-sm font-medium">{post.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Share2 className="h-4 w-4 mr-1" />
                <span className="text-sm">Share</span>
              </Button>
              
              <div className="flex gap-2">
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
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <ReactMarkdown className="prose prose-invert max-w-none">
                {post.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="max-w-4xl mx-auto mt-12">
            <Separator className="bg-white/20 mb-8" />
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{post.author}</h3>
                  <p className="text-gray-400">AI & Technology Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
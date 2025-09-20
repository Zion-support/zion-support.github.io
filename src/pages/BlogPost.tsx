import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from "@/utils/productionLogger";
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from "@/hooks/useSkeletonTimeout";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showSkeleton = useSkeletonTimeout(isLoading, 1000);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!slug) {
          throw new Error('Post slug is required');
        }

        // Try to fetch from API first
        try {
          const response = await fetchWithRetry(`/api/blog-posts/${slug}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setPost(data);
            return;
          }
        } catch (apiError) {
          logErrorToProduction('API fetch failed, falling back to static data', apiError);
        }

        // Fallback to static data
        const foundPost = BLOG_POSTS.find(p => p.slug === slug);
        if (foundPost) {
          setPost(foundPost);
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load blog post';
        setError(errorMessage);
        logErrorToProduction('Failed to load blog post', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const getShareUrl = (platform: string) => {
    if (!post) return '#';
    
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
        return '#';
    }
  };

  if (showSkeleton) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Skeleton className="h-10 w-32 mb-4" />
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-6 w-64" />
            </div>
            <Skeleton className="h-96 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {error}
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share:</span>
                <div className="flex space-x-2">
                  <a
                    href={getShareUrl('facebook')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={getShareUrl('twitter')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={getShareUrl('linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <Separator className="mb-8" />

              {/* Article Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
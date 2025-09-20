import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from "@/utils/productionLogger";
// Importing the sample blog posts - in a real app you would fetch this from an API,
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from "@/hooks/useSkeletonTimeout";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import React, { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { showSkeleton } = useSkeletonTimeout(loading);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        // Simulate API call with retry
        const foundPost = await fetchWithRetry(() =>
          Promise.resolve(BLOG_POSTS.find((p) => p.slug === slug)),
          3,
          1000
        );

        if (foundPost) {
          setPost(foundPost);
          logInfo(`Blog post "${slug}" loaded successfully.`);
        } else {
          setError("Blog post not found.");
          logErrorToProduction(`Blog post "${slug}" not found.`);
        }
      } catch (err) {
        logErrorToProduction(`Failed to load blog post "${slug}"`, err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || "");
    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default:
        return "#";
    }
  };

  if (showSkeleton || loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-6"></div>
              <div className="h-48 bg-gray-700 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </main>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <p className="text-gray-400">Blog post not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
      />
      <Header />
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                </Link>
              </Button>
            </div>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-400 text-sm mb-6">
              <Calendar className="h-4 w-4 mr-2" /> {post.date}
              <span className="mx-3">|</span>
              <Clock className="h-4 w-4 mr-2" /> {post.readTime} min read
            </div>

            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <Separator className="my-10 bg-gray-700" />

            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl font-bold text-white">Share this article:</h3>
                <div className="flex space-x-3 mt-3">
                  <a
                    href={getShareUrl("facebook")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-blue-700 rounded transition-colors text-white"
                    aria-label="Share on Facebook"
                    title="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5 mr-2" /> <span>Facebook</span>
                  </a>
                  <a
                    href={getShareUrl("twitter")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-blue-400 rounded transition-colors text-white"
                    aria-label="Share on Twitter"
                    title="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5 mr-2" /> <span>Twitter</span>
                  </a>
                  <a
                    href={getShareUrl("linkedin")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-2 hover:bg-blue-600 rounded transition-colors text-white"
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 mr-2" /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
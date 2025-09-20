<<<<<<< HEAD
'use client' 
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import { logErrorToProduction } from "@/utils/productionLogger";
import { BLOG_POSTS } from "@/data/blog-posts";
import { useSkeletonTimeout } from "@/hooks/useSkeletonTimeout";
import { fetchWithRetry } from "@/utils/fetchWithRetry";

export default function BlogPost() {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you would get the slug from the URL params
    const slug = 'sample-post';
    fetchPost(slug);
  }, []);

  const fetchPost = async (slug: string) => {
    try {
      setLoading(true);
      // Mock data for now
      const mockPost: BlogPostType = {
        id: '1',
        title: 'The Future of AI in Business',
        excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
        content: '# The Future of AI in Business\n\nArtificial intelligence is revolutionizing how businesses operate...',
        author: 'John Doe',
        date: '2024-01-15',
        category: 'ai',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ccad005?w=800&h=400&fit=crop',
        slug: 'future-ai-business',
        tags: ['AI', 'Business', 'Technology']
      };
      
      setPost(mockPost);
    } catch (err) {
      logErrorToProduction('Error fetching blog post:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </a>
          </div>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <Clock className="h-4 w-4 ml-4 mr-1" />
                <span>5 min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
=======
import React from 'react';
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e

import React from 'react' 
import { ArrowLeft } from 'lucide-react' 
import Link from 'next/link' 

interface BlogPostPageProps {
  params: {
    slug: string 
  } 
}

export default function BlogPost({ params }: BlogPostPageProps) {
  return (
<<<<<<< HEAD
    <>
      <div className='min-h-screen bg-zion-blue pt-12 pb-20 px-4'>
        <div className='container mx-auto'>
          {/* Back to blog button */}
          <div className='mb-8'>
            <Link 
              href='/blog'
              className="inline-flex items-center px-4 py-2 border border-blue-300 rounded-md text-blue-300 hover:bg-blue-300 hover:text-white"
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Blog
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Blog Post</h1>
            <p className="text-zion-slate-light">
              This is a placeholder blog post. Content would be loaded here based on the slug: {params?.slug || 'default'}
            </p>
          </div>
        </div>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog Post</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
      </div>
    </>
  ) 
}
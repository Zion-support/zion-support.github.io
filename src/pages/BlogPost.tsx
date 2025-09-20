import React from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';
import { logErrorToProduction } from '@/utils/productionLogger';
import { BLOG_POSTS } from "@/data/blogPosts";
import { useSkeletonTimeout } from '@/hooks/useSkeletonTimeout';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>
          
          <article className="bg-zion-blue-dark rounded-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Sample Blog Post Title
              </h1>
              <div className="flex items-center gap-4 text-zion-cyan text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date().toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  5 min read
                </span>
              </div>
              <Separator className="mt-4 bg-zion-blue-light" />
            </header>
            
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>
                # Sample Blog Post Content
                
                This is a sample blog post to demonstrate the structure and layout.
                
                ## Key Points
                
                - Point 1
                - Point 2
                - Point 3
                
                More content would go here...
              </ReactMarkdown>
            </div>
            
            <footer className="mt-8 pt-8 border-t border-zion-blue-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href="#"
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
                    href="#"
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
                    href="#"
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
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
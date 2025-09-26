import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function BlogPost() {
  return (
    <>
      <SEO 
        title="Blog Post - Zion Tech Group" 
        description="Read our latest blog posts and insights." 
        keywords="blog post, insights, articles, Zion Tech Group"
        url="https://ziontechgroup.com/blog"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Blog Post</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Read our latest insights and technology articles
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-zion-slate-light text-lg">
                Blog post content coming soon.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
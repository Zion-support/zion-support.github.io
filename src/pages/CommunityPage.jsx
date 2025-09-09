import React, { useState } from "react";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import { useAuth } from "@/hooks/useAuth";

// Mock data for featured posts
const featuredPosts = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    author: "AI Expert",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    category: "AI/ML"
  },
  {
    id: "2", 
    title: "Building scalable web applications with Next.js",
    content: "Here's a comprehensive guide on building scalable web applications using Next.js and modern development practices...",
    author: "Web Dev",
    timestamp: "4 hours ago",
    likes: 18,
    comments: 12,
    category: "Web Development"
  }
];

const CommunityPage = () => {
  const { user } = useAuth();

  return (
    <>
      <SEO
        title="Community Forum"
        description="Join our community of developers, entrepreneurs, and tech enthusiasts"
        canonical="/community"
      />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Forum</h1>
            <p className="text-xl text-gray-600">Connect, learn, and share with our community</p>
          </div>

          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions" className="mt-6">
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="categories" className="mt-6">
              <ForumCategories />
            </TabsContent>
            
            <TabsContent value="featured" className="mt-6">
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {user && (
            <div className="mt-8 text-center">
              <CreatePostButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
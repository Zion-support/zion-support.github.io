

import { useState } from "react",
import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import ForumCategories from "@/components/community/ForumCategories",
import PostCard from "@/components/community/PostCard",
import { useAuth } from "@/hooks/useAuth";
import { ForumPost } from "@/types/community";
// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: "1";
    title: "Best practices for AI model fine-tuning";
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...";
    authorId: "user1";
    authorName: "Alex Johnson";
    authorAvatar: "https://i.pravatar.cc/150?img;

  return (
    <AppLayout>
      <SEO 
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, ask questions, and share your knowledge
            </p>
          </div>
          
          <Button asChild>
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>
              Create New Post
            </Link>
          </Button>
        </div>
        
        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
;
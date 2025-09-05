
<<<<<<< HEAD
import { useState } from "react",
import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import ForumCategories from "@/components/community/ForumCategories",
import PostCard from "@/components/community/PostCard",
import { useAuth } from "@/hooks/useAuth",
import { ForumPost } from "@/types/community",
=======
import { useState } from &quot;react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import ForumCategories from &quot;@/components/community/ForumCategories&quot;;
import PostCard from &quot;@/components/community/PostCard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { ForumPost } from &quot;@/types/community&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: &quot;1&quot;,
    title: &quot;Best practices for AI model fine-tuning&quot;,
    content: &quot;I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...&quot;,
    authorId: &quot;user1&quot;,
    authorName: &quot;Alex Johnson&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
    authorRole: &quot;Verified Talent&quot;,
    categoryId: &quot;ai-tools&quot;,
    tags: [&quot;machine-learning&quot;, &quot;fine-tuning&quot;, &quot;gpt&quot;],
    createdAt: &quot;2025-04-01T12:00:00Z&quot;,
    updatedAt: &quot;2025-04-01T12:00:00Z&quot;,
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
    isFeatured: true
  },
  {
    id: &quot;2&quot;,
    title: &quot;How to build an effective AI talent profile?&quot;,
    content: &quot;I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?&quot;,
    authorId: &quot;user2&quot;,
    authorName: &quot;Sarah Chen&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=5&quot;,
    categoryId: &quot;getting-hired&quot;,
    tags: [&quot;profile&quot;, &quot;tips&quot;, &quot;hiring&quot;],
    createdAt: &quot;2025-04-03T09:15:00Z&quot;,
    updatedAt: &quot;2025-04-03T09:15:00Z&quot;,
    upvotes: 32,
    downvotes: 0,
    replyCount: 8,
    isPinned: true,
    isFeatured: true
  }
],

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: &quot;3&quot;,
    title: &quot;Looking for feedback on my automated testing approach&quot;,
    content: &quot;I've set up a CI/CD pipeline with the following testing strategy...&quot;,
    authorId: &quot;user3&quot;,
    authorName: &quot;Michael Wong&quot;,
    categoryId: &quot;project-help&quot;,
    tags: [&quot;testing&quot;, &quot;automation&quot;, &quot;ci-cd&quot;],
    createdAt: &quot;2025-04-10T14:30:00Z&quot;,
    updatedAt: &quot;2025-04-10T14:30:00Z&quot;,
    upvotes: 5,
    downvotes: 0,
    replyCount: 2
  },
  {
    id: &quot;4&quot;,
    title: &quot;Feature request: Team collaboration tools&quot;,
    content: &quot;It would be really helpful if we could have built-in tools for team collaboration...&quot;,
    authorId: &quot;user4&quot;,
    authorName: &quot;Emma Davis&quot;,
    categoryId: &quot;feedback&quot;,
    tags: [&quot;feature-request&quot;, &quot;teams&quot;, &quot;collaboration&quot;],
    createdAt: &quot;2025-04-09T18:45:00Z&quot;,
    updatedAt: &quot;2025-04-09T18:45:00Z&quot;,
    upvotes: 12,
    downvotes: 1,
    replyCount: 3
  },
  {
    id: &quot;5&quot;,
    title: &quot;How to handle client scope creep?&quot;,
    content: &quot;I'm working on a project where the client keeps adding requirements...&quot;,
    authorId: &quot;user5&quot;,
    authorName: &quot;David Lin&quot;,
    categoryId: &quot;project-help&quot;,
    tags: [&quot;client-management&quot;, &quot;scope&quot;, &quot;projects&quot;],
    createdAt: &quot;2025-04-08T10:20:00Z&quot;,
    updatedAt: &quot;2025-04-08T10:20:00Z&quot;,
    upvotes: 24,
    downvotes: 0,
    replyCount: 7,
    isAnswered: true
  }
],

export default function CommunityPage() {
<<<<<<< HEAD
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
=======
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(&quot;categories&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <AppLayout>
      <SEO 
        title=&quot;Community Forum | Zion AI Marketplace&quot;
        description=&quot;Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.&quot;
        keywords=&quot;community, forum, discussion, AI marketplace, questions, answers&quot;
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold&quot;>Community Forum</h1>
            <p className=&quot;text-muted-foreground mt-2&quot;>
              Join the conversation, ask questions, and share your knowledge
            </p>
          </div>
          
          <Button asChild>
            <Link to={user ? &quot;/community/create&quot; : &quot;/login?next=/community/create&quot;}>
              Create New Post
            </Link>
          </Button>
        </div>
        
        <Tabs defaultValue=&quot;categories&quot; value={activeTab} onValueChange={setActiveTab} className=&quot;mb-8&quot;>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;categories&quot;>Categories</TabsTrigger>
            <TabsTrigger value=&quot;featured&quot;>Featured</TabsTrigger>
            <TabsTrigger value=&quot;recent&quot;>Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;categories&quot;>
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value=&quot;featured&quot;>
            <div className=&quot;space-y-4&quot;>
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value=&quot;recent&quot;>
            <div className=&quot;space-y-4&quot;>
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


<<<<<<< HEAD
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
=======
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Mock data for featured posts
const featuredPosts: ForumPost[] = [
<<<<<<< HEAD
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
=======
  {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 12, _isAnswered: true, _isFeatured: true},
  {_id: "2", _title: "How to build an effective AI talent profile?", _content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?", _authorId: "user2", _authorName: "Sarah Chen", _authorAvatar: "https://i.pravatar.cc/150?img=5", _categoryId: "getting-hired", _tags: ["profile", _"tips", _"hiring"], _createdAt: "2025-04-03T09:15:00Z", _updatedAt: "2025-04-03T09:15:00Z", _upvotes: 32, _downvotes: 0, _replyCount: 8, _isPinned: true, _isFeatured: true}
];

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {_id: "3", _title: "Looking for feedback on my automated testing approach", _content: "I've set up a CI/CD pipeline with the following testing strategy...", _authorId: "user3", _authorName: "Michael Wong", _categoryId: "project-help", _tags: ["testing", _"automation", _"ci-cd"], _createdAt: "2025-04-10T14:30:00Z", _updatedAt: "2025-04-10T14:30:00Z", _upvotes: 5, _downvotes: 0, _replyCount: 2},
  {_id: "4", _title: "Feature request: Team collaboration tools", _content: "It would be really helpful if we could have built-in tools for team collaboration...", _authorId: "user4", _authorName: "Emma Davis", _categoryId: "feedback", _tags: ["feature-request", _"teams", _"collaboration"], _createdAt: "2025-04-09T18:45:00Z", _updatedAt: "2025-04-09T18:45:00Z", _upvotes: 12, _downvotes: 1, _replyCount: 3},
  {_id: "5", _title: "How to handle client scope creep?", _content: "I'm working on a project where the client keeps adding requirements...", _authorId: "user5", _authorName: "David Lin", _categoryId: "project-help", _tags: ["client-management", _"scope", _"projects"], _createdAt: "2025-04-08T10:20:00Z", _updatedAt: "2025-04-08T10:20:00Z", _upvotes: 24, _downvotes: 0, _replyCount: 7, _isAnswered: true}
];

export default function CommunityPage() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (_<AppLayout>
      <SEO 
<<<<<<< HEAD
        title=&quot;Community Forum | Zion AI Marketplace&quot;
        description=&quot;Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.&quot;
        keywords=&quot;community, forum, discussion, AI marketplace, questions, answers&quot;
=======
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, _share knowledge, _and connect with other AI professionals."
        keywords="community, _forum, _discussion, _AI marketplace, _questions, _answers"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4&quot;>
          <div>
<<<<<<< HEAD
            <h1 className=&quot;text-3xl font-bold&quot;>Community Forum</h1>
            <p className=&quot;text-muted-foreground mt-2&quot;>
              Join the conversation, ask questions, and share your knowledge
=======
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, _ask questions, _and share your knowledge
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          
          <Button asChild>
<<<<<<< HEAD
            <Link to={user ? &quot;/community/create&quot; : &quot;/login?next=/community/create&quot;}>
=======
            <Link to={_user ? "/community/create" : "/login?next=/community/create"}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Create New Post
            </Link>
          </Button>
        </div>
        
<<<<<<< HEAD
        <Tabs defaultValue=&quot;categories&quot; value={activeTab} onValueChange={setActiveTab} className=&quot;mb-8&quot;>
          <TabsList className=&quot;mb-6&quot;>
            <TabsTrigger value=&quot;categories&quot;>Categories</TabsTrigger>
            <TabsTrigger value=&quot;featured&quot;>Featured</TabsTrigger>
            <TabsTrigger value=&quot;recent&quot;>Recent</TabsTrigger>
=======
        <Tabs defaultValue="categories" value={_activeTab} onValueChange={_setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </TabsList>
          
          <TabsContent value=&quot;categories&quot;>
            <ForumCategories />
          </TabsContent>
          
<<<<<<< HEAD
          <TabsContent value=&quot;featured&quot;>
            <div className=&quot;space-y-4&quot;>
              {featuredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
=======
          <TabsContent value="featured">
            <div className="space-y-4">
              {_featuredPosts.map((post) => (
                <PostCard key={post.id} post={_post} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          </TabsContent>
          
<<<<<<< HEAD
          <TabsContent value=&quot;recent&quot;>
            <div className=&quot;space-y-4&quot;>
              {recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
=======
          <TabsContent value="recent">
            <div className="space-y-4">
              {_recentPosts.map(_(post) => (
                <PostCard key={post.id} post={_post} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}

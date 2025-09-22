const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import {useAuth} from "@/hooks/useAuth";
import {ForumPost} from "@/types/community";
// Mock data for featured posts;
const featuredPosts: ForumPost[] = [;
  {;
    id: "1",;
    title: "Best practices for AI model fine-tuning",;
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
    authorId: "user1",;
    authorName: "Alex Johnson",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
    authorRole: "Verified Talent",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    categoryId: "ai-tools",;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",
import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import ForumCategories from "@/components/community/ForumCategories",
import PostCard from "@/components/community/PostCard",

<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { ForumPost } from "@/types/community",
=======
    id: "1"
    title: "Best practices for AI model fine-tuning"
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me..."
    authorId: "user1"
    authorName: "Alex Johnson"
    authorAvatar: "https://i.pravatar.cc/150?img=3"
    authorRole: "Verified Talent"
    categoryId: "ai-tools"
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    tags: ["machine-learning", "fine-tuning", "gpt"];
=======
    categoryId: "ai-tools",;    tags: ["machine-learning", "fine-tuning", "gpt"];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    categoryId: "ai-tools",;    tags: ["machine-learning", "fine-tuning", "gpt"];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    categoryId: "ai-tools",;
    tags: ["machine-learning", "fine-tuning", "gpt"];
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    createdAt: "2025-04-01T12:00:00Z",;
=======
"
import {useState} from "react";"
import {Link} from "react-router-dom";"
import {Button} from "@/components/ui/button";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {SEO} from "@/components/SEO";"
import {AppLayout} from "@/layout/AppLayout";"
import ForumCategories from "@/components/community/ForumCategories";"
import PostCard from "@/components/community/PostCard";"
import {useAuth} from "@/hooks/useAuth";"
import {ForumPost} from "@/types/community";
"
    tags: ["machine-learning", "fine-tuning", "gpt"];"
    createdAt: "2025-04-01T12:00:00Z",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    updatedAt: "2025-04-01T12:00:00Z",;
    upvotes: 48,;
    downvotes: 2,;
    replyCount: 12,;
    isAnswered: true,;
<<<<<<< HEAD
<<<<<<< HEAD
    isFeatured: true
};
=======
    isFeatured: true;
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  {;
    id: "2",;
    title: "How to build an effective AI talent profile?",;
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;
    authorId: "user2",;
    authorName: "Sarah Chen",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=5",;
    categoryId: "getting-hired",;
    tags: ["profile", "tips", "hiring"];
    createdAt: "2025-04-03T09:15:00Z",;
=======
    isFeatured: true;
  };
  {;"
    id: "2",;"
    title: "How to build an effective AI talent profile?",;"
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;"
    authorId: "user2",;"
    authorName: "Sarah Chen",;"
    authorAvatar: "https://i && i.pravatar.cc/150?img=5",;"
    categoryId: "getting-hired",;"
    tags: ["profile", "tips", "hiring"];"
    createdAt: "2025-04-03T09:15:00Z",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    updatedAt: "2025-04-03T09:15:00Z",;
    upvotes: 32,;
    downvotes: 0,;
    replyCount: 8,;
    isPinned: true,;
    isFeatured: true;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




// Mock data for featured posts;
const featuredPosts: ForumPost[] = []
  {"
    id: "1","
    title: "Best practices for AI model fine-tuning",'"
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...","
    authorId: "user1","
    authorName: "Alex Johnson","
    authorAvatar: "https://i.pravatar.cc/150?img=3","
    authorRole: "Verified Talent","
    categoryId: "ai-tools","
    tags: ["machine-learning", "fine-tuning", "gpt"],"
    createdAt: "2025-04-01T12:00:00Z","
=======

// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    updatedAt: "2025-04-01T12:00:00Z",
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
<<<<<<< HEAD
<<<<<<< HEAD
    isFeatured: true
<<<<<<< HEAD
=======
    isFeatured: true
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  {
    id: "2",
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
    authorId: "user2",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    categoryId: "getting-hired",
    tags: ["profile", "tips", "hiring"],
    createdAt: "2025-04-03T09:15:00Z",
    updatedAt: "2025-04-03T09:15:00Z",
    upvotes: 32,
    downvotes: 0,
    replyCount: 8,
    isPinned: true,
    isFeatured: true
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  }
];

// Mock data for recent posts;
const recentPosts: ForumPost[] = [;
  {;
    id: "3",;
    title: "Looking for feedback on my automated testing approach",;
    content: "I've set up a CI/CD pipeline with the following testing strategy...",;
    authorId: "user3",;
    authorName: "Michael Wong",;
    categoryId: "project-help",;
    tags: ["testing", "automation", "ci-cd"];
    createdAt: "2025-04-10T14:30:00Z",;
    updatedAt: "2025-04-10T14:30:00Z",;
    upvotes: 5,;
    downvotes: 0,;
    replyCount: 2;
  };
  {;
    id: "4",;
    title: "Feature request: Team collaboration tools",;
    content: "It would be really helpful if we could have built-in tools for team collaboration...",;
    authorId: "user4",;
    authorName: "Emma Davis",;
    categoryId: "feedback",;
    tags: ["feature-request", "teams", "collaboration"];
    createdAt: "2025-04-09T18:45:00Z",;
    updatedAt: "2025-04-09T18:45:00Z",;
    upvotes: 12,;
    downvotes: 1,;
    replyCount: 3;
  };
  {;
    id: "5",;
    title: "How to handle client scope creep?",;
    content: "I'm working on a project where the client keeps adding requirements...",;
    authorId: "user5",;
    authorName: "David Lin",;
    categoryId: "project-help",;
    tags: ["client-management", "scope", "projects"];
    createdAt: "2025-04-08T10:20:00Z",;
    updatedAt: "2025-04-08T10:20:00Z",;
    upvotes: 24,;
    downvotes: 0,;
    replyCount: 7,;
    isAnswered: true;
  }
];



<<<<<<< HEAD
=======
  }
],

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: "3",
    title: "Looking for feedback on my automated testing approach",
    content: "I've set up a CI/CD pipeline with the following testing strategy...",
    authorId: "user3",
    authorName: "Michael Wong",
    categoryId: "project-help",
    tags: ["testing", "automation", "ci-cd"],
    createdAt: "2025-04-10T14:30:00Z",
    updatedAt: "2025-04-10T14:30:00Z",
    upvotes: 5,
    downvotes: 0,
    replyCount: 2
  },
  {
    id: "4",
    title: "Feature request: Team collaboration tools",
    content: "It would be really helpful if we could have built-in tools for team collaboration...",
    authorId: "user4",
    authorName: "Emma Davis",
    categoryId: "feedback",
    tags: ["feature-request", "teams", "collaboration"],
    createdAt: "2025-04-09T18:45:00Z",
    updatedAt: "2025-04-09T18:45:00Z",
    upvotes: 12,
    downvotes: 1,
    replyCount: 3
  },
  {
    id: "5",
    title: "How to handle client scope creep?",
    content: "I'm working on a project where the client keeps adding requirements...",
    authorId: "user5",
    authorName: "David Lin",
    categoryId: "project-help",
    tags: ["client-management", "scope", "projects"],
    createdAt: "2025-04-08T10:20:00Z",
    updatedAt: "2025-04-08T10:20:00Z",
    upvotes: 24,
    downvotes: 0,
    replyCount: 7,
    isAnswered: true
  }
],

export default function CommunityPage() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function CommunityPage() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
export default function CommunityPage() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
  return (
    <AppLayout>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default function CommunityPage() {
  const { user } = useAuth(),
=======
    isFeatured: true;
export default function CommunityPage() {}
  const { user } = useAuth(),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [activeTab, setActiveTab] = useState("categories"),
  
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  return (


  return (

      <SEO"
        title="Community Forum | Zion AI Marketplace""
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.""
        keywords="community, forum, discussion, AI marketplace, questions, answers"


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

<<<<<<< HEAD
}
=======


              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import ForumCategories from "@/components/community/ForumCategories",;
import PostCard from "@/components/community/PostCard",;
import { useAuth } from "@/hooks/useAuth",;
=======
";
import { useState } from "react",;"
import { Link } from "react-router-dom",;"
import { Button } from "@/components/ui/button",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { SEO } from "@/components/SEO",;"
import { AppLayout } from "@/layout/AppLayout",;"
import ForumCategories from "@/components/community/ForumCategories",;"
import PostCard from "@/components/community/PostCard",;"
import { useAuth } from "@/hooks/useAuth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ForumPost } from "@/types/community",;
// Mock data for featured posts;
const featuredPosts: ForumPost[] = [;
  {;"
    id: "1",;"
    title: "Best practices for AI model fine-tuning",;'"
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;"
    authorId: "user1",;"
    authorName: "Alex Johnson",;"
    authorAvatar: "https://i.pravatar.cc/150?img=3",;"
    authorRole: "Verified Talent",;"
    categoryId: "ai-tools",;"
    tags: ["machine-learning", "fine-tuning", "gpt"],;"
    createdAt: "2025-04-01T12:00:00Z",;"
    updatedAt: "2025-04-01T12:00:00Z",;
    upvotes: 48,;
    downvotes: 2,;
    replyCount: 12,;
    isAnswered: true,;
    isFeatured: true;
  },;
  {;"
    id: "2",;"
    title: "How to build an effective AI talent profile?",;'"
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;"
    authorId: "user2",;"
    authorName: "Sarah Chen",;"
    authorAvatar: "https://i.pravatar.cc/150?img=5",;"
    categoryId: "getting-hired",;"
    tags: ["profile", "tips", "hiring"],;"
    createdAt: "2025-04-03T09:15:00Z",;"
    updatedAt: "2025-04-03T09:15:00Z",;
    upvotes: 32,;
    downvotes: 0,;
    replyCount: 8,;
    isPinned: true,;
    isFeatured: true;
  }
],;
// Mock data for recent posts;
const recentPosts: ForumPost[] = [;
  {;"
    id: "3",;"
    title: "Looking for feedback on my automated testing approach",;'"
    content: "I've set up a CI/CD pipeline with the following testing strategy...",;"
    authorId: "user3",;"
    authorName: "Michael Wong",;"
    categoryId: "project-help",;"
    tags: ["testing", "automation", "ci-cd"],;"
    createdAt: "2025-04-10T14:30:00Z",;"
    updatedAt: "2025-04-10T14:30:00Z",;
    upvotes: 5,;
    downvotes: 0,;
    replyCount: 2;
  },;
  {;"
    id: "4",;"
    title: "Feature request: Team collaboration tools",;"
    content: "It would be really helpful if we could have built-in tools for team collaboration...",;"
    authorId: "user4",;"
    authorName: "Emma Davis",;"
    categoryId: "feedback",;"
    tags: ["feature-request", "teams", "collaboration"],;"
    createdAt: "2025-04-09T18:45:00Z",;"
    updatedAt: "2025-04-09T18:45:00Z",;
    upvotes: 12,;
    downvotes: 1,;
    replyCount: 3;
  },;
  {;"
    id: "5",;"
    title: "How to handle client scope creep?",;'"
    content: "I'm working on a project where the client keeps adding requirements...",;"
    authorId: "user5",;"
    authorName: "David Lin",;"
    categoryId: "project-help",;"
    tags: ["client-management", "scope", "projects"],;"
    createdAt: "2025-04-08T10:20:00Z",;"
    updatedAt: "2025-04-08T10:20:00Z",;
    upvotes: 24,;
    downvotes: 0,;
    replyCount: 7,;
    isAnswered: true;
  }
],;
export default function CommunityPage() { return null; }
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("categories");
  return (;
    <AppLayout>;
      <SEO;"
        title="Community Forum | Zion AI Marketplace";"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.";"
        keywords="community, forum, discussion, AI marketplace, questions, answers";


"
      <div className="container py-8">;"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
          <div>;"
            <h1 className="text-3xl font-bold">Community Forum</h1>;"
            <p className="text-muted-foreground mt-2">;
              Join the conversation, ask questions, and share your knowledge;
            </p>;
          </div>;

<<<<<<< HEAD
          <Button asChild>;
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>;
;
<<<<<<< HEAD
=======
// Mock data for recent posts;
const recent_posts: ForumPost[] = [;
  {
    id: "3",
    title: "Looking for feedback on my automated testing approach",
    content: "I've set up a CI / CD pipeline with the following testing strategy...",
    author_id: "user3",
    author_name: "Michael Wong",
    category_id: "project - help",
    tags: ["testing", "automation", "ci - cd"];
    created_at: "2025 - 04 - 10T14:30:00Z",
    updated_at: "2025 - 04 - 10T14:30:00Z",
    upvotes: 5,
    downvotes: 0,
    reply_count: 2;
  }
  {
    id: "4",
    title: "Feature request: Team collaboration tools",
    content: "It would be really helpful if we could have built - in tools for team collaboration...",
    author_id: "user4",
    author_name: "Emma Davis",
    category_id: "feedback",
    tags: ["feature - request", "teams", "collaboration"];
    created_at: "2025 - 04 - 09T18:45:00Z",
    updated_at: "2025 - 04 - 09T18:45:00Z",
    upvotes: 12,
    downvotes: 1,
    reply_count: 3;
  }
  {
    id: "5",
    title: "How to handle client scope creep?",
    content: "I'm working on a project where the client keeps adding requirements...",
    author_id: "user5",
    author_name: "David Lin",
    category_id: "project - help",
    tags: ["client - management", "scope", "projects"];
    created_at: "2025 - 04 - 08T10:20:00Z",
    updated_at: "2025 - 04 - 08T10:20:00Z",
    upvotes: 24,
    downvotes: 0,
    reply_count: 7,
    is_answered: true;
  }
];
;
export default /**
 * CommunityPage - Function description
 */
function CommunityPage() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState ("categories");
;
  return (
    <AppLayout>;
      <SEO;
        title="Community Forum | Zion AI Marketplace";
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.";
        keywords="community, forum, discussion, AI marketplace, questions, answers";
      />;
      <div className="container py - 8">;
        <div className="flex flex - col md:flex - row items - start md:items - center justify - between mb - 8 gap - 4">;
          <div>;
            <h1 className="text - 3xl font - bold">Community Forum</h1>;
            <p className="text - muted - foreground mt - 2">;
              Join the conversation, ask questions, and share your knowledge;
            </p>;
          </div>;
          <Button as_child>;
            <Link to={user ? "/community / create" : "/login?next=/community / create"}>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          ;
          <Button asChild>;"
            <Link to={user ? "/community/create" :"/login?next=/community/create"}>;
          <Button asChild>;"
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              Create New Post;
            </Link>;
          </Button>;
        </div>;


"
            <TabsTrigger value="categories">Categories</TabsTrigger>;"
            <TabsTrigger value="featured">Featured</TabsTrigger>;"
            <TabsTrigger value="recent">Recent</TabsTrigger>;
          </TabsList>;
"
          <TabsContent value="categories">;
            <ForumCategories />;
          </TabsContent>;"
          <TabsContent value="featured">;



            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;
<<<<<<< HEAD
    </AppLayout>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======






}
=======
=======
export default function CommunityPage() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
  
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (

    <AppLayout>;

<<<<<<< HEAD
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"

import { useState } from "react",;
import { Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import ForumCategories from "@/components/community/ForumCategories",;
import PostCard from "@/components/community/PostCard",;
import { useAuth } from "@/hooks/useAuth",;
import { ForumPost } from "@/types/community",;
=======
      <SEO;"
        title="Community Forum | Zion AI Marketplace"""
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."""
        keywords="community, forum, discussion, AI marketplace, questions, answers"""
import { useState } from "react",;""
import { Link } from "react-router-dom",;""
import { Button } from "@/components/ui/button",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { SEO } from "@/components/SEO",;""
import { AppLayout } from "@/layout/AppLayout",;""
import ForumCategories from "@/components/community/ForumCategories",;""
import PostCard from "@/components/community/PostCard",;""
import { useAuth } from "@/hooks/useAuth",;""
import { ForumPost } from "@/types/community",;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Mock data for featured posts;
    authorAvatar: "https://i.pravatar.cc/150?img=3",;""
    tags: ["machine-learning", "fine-tuning", "gpt"],;""
  },;
    authorAvatar: "https://i.pravatar.cc/150?img=5",;""
    tags: ["profile", "tips", "hiring"],;""
],;
// Mock data for recent posts;
    tags: ["testing", "automation", "ci-cd"],;""
    tags: ["feature-request", "teams", "collaboration"],;""
    tags: ["client-management", "scope", "projects"],;""
],;)
export default function CommunityPage() {;
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("categories");"
  return (;

        title="Community Forum | Zion AI Marketplace";""
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.";""
        keywords="community, forum, discussion, AI marketplace, questions, answers";"
      />;

"
      <div className="container py-8">;"
</div>"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;"
</div>
          <div>;
            <h1 className="text-3xl font-bold">Community Forum</h1>;""
            <p className="text-muted-foreground mt-2">;"
</p>
            </p>;
          </div>;
          <Button asChild>;
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>;"

            <Link to={user ? "/community/create" :"/login?next=/community/create"}>;"

<<<<<<< HEAD
            <TabsTrigger value="categories">Categories</TabsTrigger>;
            <TabsTrigger value="featured">Featured</TabsTrigger>;
            <TabsTrigger value="recent">Recent</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"            <TabsTrigger value="categories">Categories</TabsTrigger>;
            <TabsTrigger value="featured">Featured</TabsTrigger>;
            <TabsTrigger value="recent">Recent</TabsTrigger>;
          </TabsList>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

            ;
        </div>;"
        <Tabs default_value="categories" value={active_tab} onValueChange={setActiveTab} className="mb - 8">;"
          <TabsList className="mb - 6">;"
            <TabsTrigger value="categories">Categories;""
            <TabsTrigger value="featured">Featured;""
            <TabsTrigger value="recent">Recent;"
          ;"
          <TabsContent value="categories">;"

            <ForumCategories />;

          <TabsContent value="featured">;"
            <div className="space - y-4">;"
</div>)
                <PostCard key={post.id} post={post} />))}

          <TabsContent value="recent">;"


<<<<<<< HEAD


}
    </AppLayout>);
}
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </AppLayout>);
}
    </AppLayout>);
}
    </AppLayout>;
  ),;}
 }</div> </TabsContent>) ) 
}</div> </TabsContent> </Tabs> </div> </AppLayout>) 
}
    </AppLayout>;
  );
}
;
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
    </AppLayout>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    );
 }</div> ) ) 
}</div>   </div> ) 
    );"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

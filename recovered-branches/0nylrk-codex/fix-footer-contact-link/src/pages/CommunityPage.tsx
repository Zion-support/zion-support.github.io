
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

    id: "1"
    title: "Best practices for AI model fine-tuning"
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me..."
    authorId: "user1"
    authorName: "Alex Johnson"
    authorAvatar: "https://i.pravatar.cc/150?img=3"
    authorRole: "Verified Talent"
    categoryId: "ai-tools"
    tags: ["machine-learning", "fine-tuning", "gpt"];
    createdAt: "2025-04-01T12:00:00Z"
    updatedAt: "2025-04-01T12:00:00Z"
    upvotes: 48
    downvotes: 2
    replyCount: 12
    isAnswered: true
    isFeatured: true
  }
  {
    id: "2"
    title: "How to build an effective AI talent profile?"
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?"
    authorId: "user2"
    authorName: "Sarah Chen"
    authorAvatar: "https://i.pravatar.cc/150?img=5"
    categoryId: "getting-hired"
    tags: ["profile", "tips", "hiring"];
    createdAt: "2025-04-03T09:15:00Z"
    updatedAt: "2025-04-03T09:15:00Z"
    upvotes: 32
    downvotes: 0
    replyCount: 8
    isPinned: true
    isFeatured: true
  }
];
// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {
    id: "3"
    title: "Looking for feedback on my automated testing approach"
    content: "I've set up a CI/CD pipeline with the following testing strategy..."
    authorId: "user3"
    authorName: "Michael Wong"
    categoryId: "project-help"
    tags: ["testing", "automation", "ci-cd"];
    createdAt: "2025-04-10T14:30:00Z"
    updatedAt: "2025-04-10T14:30:00Z"
    upvotes: 5
    downvotes: 0
    replyCount: 2
  }
  {
    id: "4"
    title: "Feature request: Team collaboration tools"
    content: "It would be really helpful if we could have built-in tools for team collaboration..."
    authorId: "user4"
    authorName: "Emma Davis"
    categoryId: "feedback"
    tags: ["feature-request", "teams", "collaboration"];
    createdAt: "2025-04-09T18:45:00Z"
    updatedAt: "2025-04-09T18:45:00Z"
    upvotes: 12
    downvotes: 1
    replyCount: 3
  }
  {
    id: "5"
    title: "How to handle client scope creep?"
    content: "I'm working on a project where the client keeps adding requirements..."
    authorId: "user5"
    authorName: "David Lin"
    categoryId: "project-help"
    tags: ["client-management", "scope", "projects"];
    createdAt: "2025-04-08T10:20:00Z"
    updatedAt: "2025-04-08T10:20:00Z"
    upvotes: 24
    downvotes: 0
    replyCount: 7
    isAnswered: true
  }
];
export default function CommunityPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");

import { useAuth } from "@/hooks/useAuth",
import { ForumPost } from "@/types/community",
const featuredPosts: ForumPost[] = [;
  {;
    id: "1",;
    title: "Best practices for AI model fine-tuning",;
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
    authorId: "user1",;
    authorName: "Alex Johnson",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
    authorRole: "Verified Talent",;
    categoryId: "ai-tools",;
    tags: ["machine-learning", "fine-tuning", "gpt"];
    createdAt: "2025-04-01T12:00:00Z",;
    updatedAt: "2025-04-01T12:00:00Z",;
    upvotes: 48,;
    downvotes: 2,;
    replyCount: 12,;
    isAnswered: true,;
    isFeatured: true;
  };
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
    updatedAt: "2025-04-03T09:15:00Z",;
    upvotes: 32,;
    downvotes: 0,;
    replyCount: 8,;
    isPinned: true,;
    isFeatured: true;


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
export default function CommunityPage() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
export default function CommunityPage() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
  return (
    <AppLayout>;
export default function CommunityPage() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
  
  return (
    <AppLayout>
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



  
export default function CommunityPage() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
export default function CommunityPage() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("categories"),
  
  return (

    <AppLayout>;



              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}


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
;
// Mock data for featured posts;
const featuredPosts:ForumPost[] = [;
  {;
    id:"1",;
    title:"Best practices for AI model fine-tuning",;
    content:"I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"ai-tools",;
    tags:["machine-learning", "fine-tuning", "gpt"],;
    createdAt:"2025-04-01T12:00:00Z",;
    updatedAt:"2025-04-01T12:00:00Z",;
    upvotes:48,;
    downvotes:2,;
    replyCount:12,;
    isAnswered:true,;
    isFeatured:true;
  },;
  {;
    id:"2",;
    title:"How to build an effective AI talent profile?",;
    content:"I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;
    authorId:"user2",;
    authorName:"Sarah Chen",;
    authorAvatar:"https://i.pravatar.cc/150?img=5",;
    categoryId:"getting-hired",;
    tags:["profile", "tips", "hiring"],;
    createdAt:"2025-04-03T09:15:00Z",;
    updatedAt:"2025-04-03T09:15:00Z",;
    upvotes:32,;
    downvotes:0,;
    replyCount:8,;
    isPinned:true,;
    isFeatured:true;
  }
],;
;
// Mock data for recent posts;
const recentPosts:ForumPost[] = [;
  {;
    id:"3",;
    title:"Looking for feedback on my automated testing approach",;
    content:"I've set up a CI/CD pipeline with the following testing strategy...",;
    authorId:"user3",;
    authorName:"Michael Wong",;
    categoryId:"project-help",;
    tags:["testing", "automation", "ci-cd"],;
    createdAt:"2025-04-10T14:30:00Z",;
    updatedAt:"2025-04-10T14:30:00Z",;
    upvotes:5,;
    downvotes:0,;
    replyCount:2;
  },;
  {;
    id:"4",;
    title:"Feature request:Team collaboration tools",;
    content:"It would be really helpful if we could have built-in tools for team collaboration...",;
    authorId:"user4",;
    authorName:"Emma Davis",;
    categoryId:"feedback",;
    tags:["feature-request", "teams", "collaboration"],;
    createdAt:"2025-04-09T18:45:00Z",;
    updatedAt:"2025-04-09T18:45:00Z",;
    upvotes:12,;
    downvotes:1,;
    replyCount:3;
  },;
  {;
    id:"5",;
    title:"How to handle client scope creep?",;
    content:"I'm working on a project where the client keeps adding requirements...",;
    authorId:"user5",;
    authorName:"David Lin",;
    categoryId:"project-help",;
    tags:["client-management", "scope", "projects"],;
    createdAt:"2025-04-08T10:20:00Z",;
    updatedAt:"2025-04-08T10:20:00Z",;
    upvotes:24,;
    downvotes:0,;
    replyCount:7,;
    isAnswered:true;
  }
],;
;
export default function CommunityPage() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("categories"),;
  ;
  return (;
    <AppLayout>;
      <SEO ;
        title="Community Forum | Zion AI Marketplace";
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.";
        keywords="community, forum, discussion, AI marketplace, questions, answers";
      />;
      ;
      />;

      />;

      />;

      <div className="container py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
          <div>;
            <h1 className="text-3xl font-bold">Community Forum</h1>;
            <p className="text-muted-foreground mt-2">;
              Join the conversation, ask questions, and share your knowledge;
            </p>;
          </div>;
          <Button asChild>;
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>;
import { useState } from './react';
import { Link } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { SEO } from '@/components / SEO';
import { AppLayout } from '@/layout / AppLayout';
import ForumCategories from "@/components / community / ForumCategories";
import PostCard from "@/components / community / PostCard";
import { use_auth } from '@/hooks / use_auth';
import { ForumPost } from '@/types / community';
// Mock data for featured posts;
const featured_posts: ForumPost[] = [;
  {
    id: "1",
    title: "Best practices for AI model fine - tuning",
    content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    author_id: "user1",
    author_name: "Alex Johnson",
    author_avatar: "https://i.pravatar.cc / 150?img = 3",
    author_role: "Verified Talent",
    category_id: "ai - tools",
    tags: ["machine - learning", "fine - tuning", "gpt"];
    created_at: "2025 - 04 - 01T12:00:00Z",
    updated_at: "2025 - 04 - 01T12:00:00Z",
    upvotes: 48,
    downvotes: 2,
    reply_count: 12,
    is_answered: true,
    is_featured: true;
  }
  {
    id: "2",
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
    author_id: "user2",
    author_name: "Sarah Chen",
    author_avatar: "https://i.pravatar.cc / 150?img = 5",
    category_id: "getting - hired",
    tags: ["profile", "tips", "hiring"];
    created_at: "2025 - 04 - 03T09:15:00Z",
    updated_at: "2025 - 04 - 03T09:15:00Z",
    upvotes: 32,
    downvotes: 0,
    reply_count: 8,
    is_pinned: true,
    is_featured: true;
  }
];
;
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
            <Link to={user ? "/community / create" : "/login?next=/community / create"}>;        <Tabs default_value="categories" value={active_tab} onValueChange={setActiveTab} className="mb - 8">;
          <TabsList className="mb - 6">;




}
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
    </AppLayout>);
}
}
;



import { useState, useEffect } from "react",
import { useParams, Link } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { formatDistanceToNow } from "date-fns",
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",
import PostCard from "@/components/community/PostCard",
import UserBadges from "@/components/community/UserBadges";
import ReputationDisplay from "@/components/community/ReputationDisplay";
import UserBadges from "@/components/community/UserBadges",
import ReputationDisplay from "@/components/community/ReputationDisplay",    {
      color: "#F59E0B"  }
  {
    id: "11"
    title: "How to structure an AI prompt for best results"
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...";

    authorId: "user1"
    authorName: "Alex Johnson"
    authorAvatar: "https://i.pravatar.cc/150?img=3"
    authorRole: "Verified Talent"
    categoryId: "project-help"
    tags: ["monitoring", "production", "devops"];
    createdAt: "2025-03-12T09:30:00Z"
    updatedAt: "2025-03-12T09:30:00Z"
    upvotes: 24
    downvotes: 0
    replyCount: 6import { useState, useEffect } from "react",;
import { useParams, Link } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { formatDistanceToNow } from "date-fns",;
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",;
import PostCard from "@/components/community/PostCard",;
import UserBadges from "@/components/community/UserBadges",;
import ReputationDisplay from "@/components/community/ReputationDisplay",;
// Mock user data;
const mockUser: CommunityUser = {;"
  id: "user1",;"
  name: "Alex Johnson",;
  avatar: "https://i && i.pravatar.cc/150?img=3",;  avatar: "https://i && i.pravatar.cc/150?img=3",;
  role: "Verified Talent",;

  reputation: 325,;
  postCount: 14,;
  replyCount: 47,;
  badges: [;

      color: "#10B981"
};    };
    {;
      id: "badge2",;
      name: "Top Contributor",,
  description: "Among the top 5% of contributors",;
      icon: "Trophy",;
      color: "#F59E0B"
};    };
    {;
      id: "badge3",;
      name: "First Post",,
  description: "Created your first forum post",;
      icon: "Star",;
      color: "#6366F1";
    }
// Mock posts by this user;
const userPosts: ForumPost[] = [;
  {;"
    id: "1",;"
    title: "Best practices for AI model fine-tuning",'"
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;"
    authorId: "user1",;"
    authorName: "Alex Johnson",;
    createdAt: "2025-04-01T12:00:00Z",;

    updatedAt: "2025-04-01T12:00:00Z",;

import {useState, useEffect} from "react";""
import {useParams, Link} from "react-router-dom";""
import {AppLayout} from "@/layout/AppLayout";""
import {SEO} from "@/components/SEO";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {formatDistanceToNow} from "date-fns";""
import {CommunityUser, ForumPost, Badge, as, BadgeType} from "@/types/community";""
import PostCard from "@/components/community/PostCard";""
import UserBadges from "@/components/community/UserBadges";""
import ReputationDisplay from "@/components/community/ReputationDisplay";""
import { useState, useEffect } from "react",""
import { useParams, Link } from "react-router-dom",""
import { AppLayout } from "@/layout/AppLayout",""
import { SEO } from "@/components/SEO",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { formatDistanceToNow } from "date-fns",""
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",""
import PostCard from "@/components/community/PostCard",""
import UserBadges from "@/components/community/UserBadges",""
import ReputationDisplay from "@/components/community/ReputationDisplay","
// Mock user data;
const mockUser: CommunityUser = {,"
  id: "user1"""
  name: "Alex Johnson"","
  avatar: "https: //i.pravatar.cc/150?img=3"","
  role: "Verified Talent""
  reputation: 325;,
  postCount: 14;
  replyCount: 47;,
  badges: [
    {"
      id: "badge1"","
  name: "Answer Hero"""
      description: "Provided 10 accepted answers"","
  icon: "Award"""
      color: "#10B981""
    },

      id: "badge2"","
  name: "Top Contributor"""
      description: "Among the top 5% of contributors"","
  icon: "Trophy"""
      color: "#F59E0B""

      id: "badge3"","
  name: "First Post"""
      description: "Created your first forum post"","
  icon: "Star"""
      color: "#6366F1""
    }
"
import { useState, useEffect } from './react';
import { use_params, Link } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { formatDistanceToNow } from './date - fns';
import { CommunityUser, ForumPost, Badge, as, BadgeType } from '@/types / community';
import PostCard from "@/components / community / PostCard";""
import UserBadges from "@/components / community / UserBadges";""
import ReputationDisplay from "@/components / community / ReputationDisplay";"
// Mock user data;
const mock_user: CommunityUser = {,"
  id: "user1",""
  name: "Alex Johnson",""
  avatar: "https://i.pravatar.cc / 150?img = 3",""
  role: "Verified Talent","
  reputation: 325,
  post_count: 14,
  reply_count: 47,
  badges: [;
      id: "badge1",""
      name: "Answer Hero",""
      description: "Provided 10 accepted answers",""
      icon: "Award",""
      color: "#10B981";"
      id: "badge2",""
      name: "Top Contributor",""
      description: "Among the top 5% of contributors",""
      icon: "Trophy",""
      color: "#F59E0B";"
      id: "badge3",""
      name: "First Post",""
      description: "Created your first forum post",""
      icon: "Star",""
      color: "#6366F1";"
    }]
  ];
  is_verified: true,
  is_moderator: false;
;
// Mock posts by this user;
const user_posts: ForumPost[] = [;
    id: "1",""
    title: "Best practices for AI model fine - tuning",""
    content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me...",""
    author_id: "user1",""
    author_name: "Alex Johnson",""
    author_avatar: "https://i.pravatar.cc / 150?img = 3",""
    author_role: "Verified Talent",""
    category_id: "ai - tools","]"
    tags: ["machine - learning", "fine - tuning", "gpt"];""
    created_at: "2025 - 04 - 01T12:00:00Z",""
    updated_at: "2025 - 04 - 01T12:00:00Z","
    upvotes: 48,
    downvotes: 2,
    reply_count: 12,
    is_answered: true,
    is_featured: true;

    id: "11"","
  title: "How to structure an AI prompt for best results"""
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...";""
    authorId: "user1"","
  authorName: "Alex Johnson"""
    authorAvatar: "https://i.pravatar.cc/150?img=3"","
  authorRole: "Verified Talent"""
    categoryId: "project-help"","
  tags: ["monitoring", "production", "devops"];""
    createdAt: "2025-03-12T09:30:00Z"","
  updatedAt: "2025-03-12T09: 30:00Z"",
  upvotes: 24;
    downvotes: 0;,
  replyCount: 6;
export default function CommunityProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState<CommunityUser | null>(null);

  const [posts, setPosts] = useState<ForumPost[]>([]);

      <AppLayout>
        <div className="container py-8">"
</div>"
          <div className="flex justify-center items-center h-64">"
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>"
          </div>
          <h1>User not found</h1>"
          <Button asChild className="mt-4">"
            <Link to="/community">Back to Community"
      <SEO;
      <SEO;"
import { useState, useEffect } from "react",;""
import { useParams, Link } from "react-router-dom",;""
import { AppLayout } from "@/layout/AppLayout",;""
import { SEO } from "@/components/SEO",;""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { formatDistanceToNow } from "date-fns",;""
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",;""
import PostCard from "@/components/community/PostCard",;""
import UserBadges from "@/components/community/UserBadges",;""
import ReputationDisplay from "@/components/community/ReputationDisplay",;"
// Mock user data;
const mockUser: CommunityUser = {;,"
  id: "user1",;""
  name: "Alex Johnson",;""
  avatar: "https://i && i.pravatar.cc/150?img=3",;""
  role: "Verified Talent",;"
  reputation: 325,;
  postCount: 14,;
  replyCount: 47,;

    {;"
      id: "badge1",;""
      name: "Answer Hero",;""
      description: "Provided 10 accepted answers",;""
      icon: "Award",;""
    };
      id: "badge2",;""
      name: "Top Contributor",;""
      description: "Among the top 5% of contributors",;""
      icon: "Trophy",;""
      id: "badge3",;""
      name: "First Post",;""
      description: "Created your first forum post",;""
      icon: "Star",;""
  isVerified: true,;
  isModerator: false;

// Mock posts by this user;
const userPosts: ForumPost[] = [;
    id: "1",;""
    title: "Best practices for AI model fine-tuning",""
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;""
    authorId: "user1",;""
    authorName: "Alex Johnson",;""
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;""
    authorRole: "Verified Talent",;""
    categoryId: "ai-tools",;"]"
    tags: ["machine-learning", "fine-tuning", "gpt"];""
    createdAt: "2025-04-01T12:00:00Z",;""
    updatedAt: "2025-04-01T12:00:00Z",;"
pr-12325

    upvotes: 48,;
    downvotes: 2,;
    replyCount: 12,;
    isAnswered: true,;
    isFeatured: true;
    createdAt: "2025-03-20T14:25:00Z",;
    updatedAt: "2025-03-20T14:25:00Z",;
    upvotes: 36,;
    downvotes: 1,;
    replyCount: 8
};  };
  {;
    id: "12",;
    title: "Setting up effective monitoring for AI systems",
    content: "Here's my approach to monitoring AI systems in production environments...",;
    authorId: "user1",;
    authorName: "Alex Johnson",;
    createdAt: "2025-03-12T09:30:00Z",;

    updatedAt: "2025-03-12T09:30:00Z",;

  };
  {;"
    id: "11",;""
    title: "How to structure an AI prompt for best results",""
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...";""
    authorId: "user1",;""
    authorName: "Alex Johnson",;""
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;""
    authorRole: "Verified Talent",;""
    categoryId: "ai-tools",;""
    tags: ["prompts", "techniques", "optimization"];""
    createdAt: "2025-03-20T14:25:00Z",;""
    updatedAt: "2025-03-20T14:25:00Z",;"
    upvotes: 36,;
    downvotes: 1,;
    replyCount: 8;
  };
  };
  {;"
    id: "12",;""
    title: "Setting up effective monitoring for AI systems",""
    content: "Here's my approach to monitoring AI systems in production environments...",;""
    authorId: "user1",;""
    authorName: "Alex Johnson",;""
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;""
    authorRole: "Verified Talent",;""
    categoryId: "project-help",;""
    tags: ["monitoring", "production", "devops"];""
    createdAt: "2025-03-12T09:30:00Z",;""
    updatedAt: "2025-03-12T09:30:00Z",;"

    upvotes: 24,;
    downvotes: 0,;}
    replyCount: 6;}
  }
    setUser(mockUser);
    setPosts(userPosts);
    setIsLoading(false);
  }, [userId]);      <AppLayout>;
        <div className="container py-8">;
          <h1>User not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }    <AppLayout>;
      <SEO
        title={`${user && user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={`View ${user && user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
        keywords={`community, forum, profile, user profile, ${user && user.name}`}
      />;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">Profile</span>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">{user && user.name}</span>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;

          <div className="md:col-span-1">;
            <Card>;"
              <CardHeader className="text-center">;"
                <div className="flex justify-center mb-4">;"
                  <Avatar className="h-24 w-24">;
                    <AvatarImage src={user && user.avatar} />;
                    <AvatarFallback>{user && user.name.charAt(0)}</AvatarFallback>;
                  </Avatar>;
                </div>;"
                <CardTitle className="text-2xl flex items-center justify-center gap-2">;
                  {user && user.name}
                  {user && user.isVerified && (;"
                    <span className="text-blue-500">;"
                      <svg xmlns="http://www && www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">;"
                        <path fillRule="evenodd" d="M8 && M8.603 3 && 3.799A4.49 4 && 4.49 0 0112 2 && 2.25c1.357 0 2 && 2.573.6 3 && 3.397 1 && 1.549a4.49 4 && 4.49 0 013 && 013.498 1 && 1.307 4 && 4.491 4 && 4.491 0 011 && 011.307 3 && 3.497A4.49 4 && 4.49 0 0121 && 0121.75 12a4 && 12a4.49 4 && 4.49 0 01-1 && 1.549 3 && 3.397 4 && 4.491 4 && 4.491 0 01-1 && 1.307 3 && 3.497 4 && 4.491 4 && 4.491 0 01-3 && 3.497 1 && 1.307A4.49 4 && 4.49 0 0112 21 && 21.75a4.49 4 && 4.49 0 01-3 && 3.397-1 && 1.549 4 && 4.49 4 && 4.49 0 01-3 && 3.498-1 && 1.306 4 && 4.491 4 && 4.491 0 01-1 && 1.307-3 && 3.498A4.49 4 && 4.49 0 012 && 012.25 12c0-1 && 1.357.6-2 && 2.573 1 && 1.549-3 && 3.397a4.49 4 && 4.49 0 011 && 011.307-3 && 3.497 4 && 4.49 4 && 4.49 0 013 && 013.497-1 && 1.307zm7.007 6 && 6.387a.75 && 75.75 0 10-1 && 1.22-.872l-3 && 3.236 4 && 4.53L9.53 12 && 12.22a.75 && 75.75 0 00-1 && 1.06 1 && 1.06l2.25 2 && 2.25a.75 && 75.75 0 001 && 001.14-.094l3 && 094l3.75-5 && 5.25z" clipRule="evenodd" />;
                      </svg>;
                    </span>;
  return (        </div>
      </div>
    </AppLayout>
  )                      <p className="text-sm text-muted-foreground">Replies</p>;
                    </CardContent>;
                  </Card>;

                </div>;


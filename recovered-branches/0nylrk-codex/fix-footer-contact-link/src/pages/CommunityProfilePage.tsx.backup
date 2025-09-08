<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {formatDistanceToNow} from "date-fns";
import {CommunityUser, ForumPost, Badge, as, BadgeType} from "@/types/community";
import PostCard from "@/components/community/PostCard";
import UserBadges from "@/components/community/UserBadges";
import ReputationDisplay from "@/components/community/ReputationDisplay";


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
<<<<<<< HEAD



=======

import UserBadges from "@/components/community/UserBadges";
import ReputationDisplay from "@/components/community/ReputationDisplay";
import UserBadges from "@/components/community/UserBadges",


>>>>>>> origin/cursor/delete-old-data-records-6bba
// Mock user data

const mockUser: CommunityUser = {
  id: "user1"
  name: "Alex Johnson"
  avatar: "https://i.pravatar.cc/150?img=3"

  role: "Verified Talent"
  reputation: 325;
  postCount: 14;
  replyCount: 47;
  badges: []
    {"
      id: "badge1""
      name: "Answer Hero""
      description: "Provided 10 accepted answers""
      icon: "Award""
      color: "#10B981"

<<<<<<< HEAD


    {
      id: "badge2"
      name: "Top Contributor"
      description: "Among the top 5% of contributors"
      icon: "Trophy"
      color: "#F59E0B"




=======

    {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: "badge3"
      name: "First Post"
      description: "Created your first forum post"
      icon: "Star"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      color: "#6366F1"
    }

<<<<<<< HEAD

=======
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
import PostCard from "@/components / community / PostCard";
import UserBadges from "@/components / community / UserBadges";
import ReputationDisplay from "@/components / community / ReputationDisplay";
// Mock user data;
const mock_user: CommunityUser = {
  id: "user1",
  name: "Alex Johnson",
  avatar: "https://i.pravatar.cc / 150?img = 3",
  role: "Verified Talent",
  reputation: 325,
  post_count: 14,
  reply_count: 47,
  badges: [;
    {
      id: "badge1",
      name: "Answer Hero",
      description: "Provided 10 accepted answers",
      icon: "Award",
      color: "#10B981";
    }
    {
      id: "badge2",
      name: "Top Contributor",
      description: "Among the top 5% of contributors",
      icon: "Trophy",
      color: "#F59E0B";
    }
    {
      id: "badge3",
      name: "First Post",
      description: "Created your first forum post",
      icon: "Star",
      color: "#6366F1";
    }
  ];
  is_verified: true,
  is_moderator: false;
}
;
// Mock posts by this user;
const user_posts: ForumPost[] = [;
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


  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

// Mock posts by this user
const userPosts: ForumPost[] = [
  {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    authorId: "user1",
    authorName: "Alex Johnson",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
<<<<<<< HEAD

    isFeatured: true
  },

=======
    isFeatured: true
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "11",
    title: "How to structure an AI prompt for best results",
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...",
    authorId: "user1",
    authorName: "Alex Johnson",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["prompts", "techniques", "optimization"],
    createdAt: "2025-03-20T14:25:00Z",
    updatedAt: "2025-03-20T14:25:00Z",
    upvotes: 36,
    downvotes: 1,
    replyCount: 8
  },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    id: "12",
    title: "Setting up effective monitoring for AI systems",
    content: "Here's my approach to monitoring AI systems in production environments...",
    authorId: "user1",
    authorName: "Alex Johnson",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "project-help",
    tags: ["monitoring", "production", "devops"],
    createdAt: "2025-03-12T09:30:00Z",
    updatedAt: "2025-03-12T09:30:00Z",
    upvotes: 24,
    downvotes: 0,
    replyCount: 6
  }
],

<<<<<<< HEAD
=======

  useEffect(() => {
    // In a real app, we would fetch the user data here
    // For now, we'll just use the mock data
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (isLoading) {

    return (
      <AppLayout>"
        <div className="container py-8">"
          <div className="flex justify-center items-center h-64">"

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
          </div>
        </div>
      </AppLayout>
    )
  }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
<<<<<<< HEAD


=======

  }
  return (
    <AppLayout>
      <SEO
      <SEO 

      <SEO
      <SEO 

      <SEO 


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Mock user data;
const mockUser: CommunityUser = {;"
  id: "user1",;"
  name: "Alex Johnson",;


  role: "Verified Talent",;

  reputation: 325,;
  postCount: 14,;
  replyCount: 47,;
  badges: [;

<<<<<<< HEAD
    {;
      id: "badge1",;
      name: "Answer Hero",;
      description: "Provided 10 accepted answers",;
      icon: "Award",;
      color: "#10B981";
=======

  ];
  isVerified: true,;
  isModerator: false;
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
    replyCount: 8;
<<<<<<< HEAD

  };
=======
  };
},;
  };
    replyCount: 8
};  };
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {;
    id: "12",;
    title: "Setting up effective monitoring for AI systems",
    content: "Here's my approach to monitoring AI systems in production environments...",;
    authorId: "user1",;
    authorName: "Alex Johnson",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
    authorRole: "Verified Talent",;
    categoryId: "project-help",;
    tags: ["monitoring", "production", "devops"];

<<<<<<< HEAD
=======
authorAvatar: "https://i.pravatar.cc/150?img=3",;
    authorRole: "Verified Talent",;
    categoryId: "project-help",;
    tags: ["monitoring", "production", "devops"],;

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======

];

export default function CommunityProfilePage() {;

  const { userId } = useParams();
  const [user, setUser] = useState<CommunityUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ForumPost[]>([]);
>>>>>>> origin/cursor/delete-old-data-records-6bba

    setUser(mockUser);
    setPosts(userPosts);
    setIsLoading(false);
<<<<<<< HEAD
  }, [userId]);

=======
  }, [userId]);      <AppLayout>;

  useEffect(() => {;
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;


useEffect(() => {;
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;
    setUser(mockUser);
    setPosts(userPosts);
    setIsLoading(false);
  }, [userId]);
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (isLoading) {;

    return (

<<<<<<< HEAD
=======
if (isLoading) {;
    return (
],;
export default function CommunityProfilePage() {;
  const { userId } = useParams(),;
  const [user, setUser] = useState<CommunityUser | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [posts, setPosts] = useState<ForumPost[]>([]),;
  useEffect(() => {;
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;
    setUser(mockUser),;
    setPosts(userPosts);
    setIsLoading(false);
  }, [userId]);
  if (isLoading) {;
    return (;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;

            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    );
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  if (!user) {;

    return (

<<<<<<< HEAD
=======
if (!user) {;
    return (
;
  if (!user) {;
    return (;

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <AppLayout>;

        <div className="container py-8">;
          <h1>User not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );

  }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
  return (;
    <AppLayout>;
      <SEO;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title={`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}

        keywords={`community, forum, profile, user profile, ${user.name}`}
      />"
      <div className="container py-8">"
        <div className="flex items-center gap-3 mb-6">"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum;
          </Link>"
          <span className="text-muted-foreground">/</span>"
          <span className="text-sm font-medium">Profile</span>"
          <span className="text-muted-foreground">/</span>"
          <span className="text-sm font-medium">{user.name}</span>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
          <div className="md:col-span-1">
            <Card>"
              <CardHeader className="text-center">"
                <div className="flex justify-center mb-4">"

                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
<<<<<<< HEAD

                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  {user.name}
                  {user.isVerified && (
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </span>
=======


  return (

    <AppLayout>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">Profile</span>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">{user && user.name}</span>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  )}
                </CardTitle>;
                {user && user.role && (;"

                  <Badge variant="outline" className="mt-1">;
                    {user && user.role}
                  </Badge>;
                )}

<<<<<<< HEAD
                {user && user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    ))}
                  </div>
                ) : (
                  <Card>"
                    <CardContent className="p-6 text-center">'"

      </div>
    </AppLayout>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    </CardContent>;
                  </Card>;
                  <Card>;"
                    <CardContent className="p-4 text-center">;
<<<<<<< HEAD


=======


"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <p className="text-sm text-muted-foreground">Replies</p>;

                    </CardContent>;
                  </Card>;

<<<<<<< HEAD
                </div>;

=======
                </div>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="text-sm text-muted-foreground">;

                  <p>Member since April 2025</p>;
                </div>;
              </CardContent>;
            </Card>;

<<<<<<< HEAD
          </div>;

=======
          </div>;"
          <div className="md:col-span-2">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Tabs defaultValue="posts">;
              <TabsList>;"
                <TabsTrigger value="posts">Posts</TabsTrigger>;"
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>;
<<<<<<< HEAD

              </TabsList>;


=======


                {posts && posts.length > 0 ? (;
                  <div className="space-y-4">;
                    {posts && posts.map((post) => (;
                      <PostCard key={post && post.id} post={post} />;


                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>;

                {posts.length > 0 ? (;
                  <div className="space-y-4">;
                    {posts.map((post) => (;
                      <PostCard key={post.id} post={post} />;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                    ))}
                  </div>;
                ) : (;
                  <Card>;"
                    <CardContent className="p-6 text-center">;'"

                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>;
                    </CardContent>;
                  </Card>;
                )}
<<<<<<< HEAD


              </TabsContent>;


=======

              </TabsContent>;

                <Card>;
                  <CardContent className="p-6">;
                    <ul className="space-y-4">;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), { addSuffix: true })}
                        </div>;
                        <div>;
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple hover: underline">How to optimize RAG systems for better results</Link></p>;
    author_id: "user1",
    author_name: "Alex Johnson",
    author_avatar: "https://i.pravatar.cc / 150?img = 3",
    author_role: "Verified Talent",
    category_id: "ai - tools",
    tags: ["prompts", "techniques", "optimization"];
    created_at: "2025 - 03 - 20T14:25:00Z",
    updated_at: "2025 - 03 - 20T14:25:00Z",
    upvotes: 36,
    downvotes: 1,
    reply_count: 8;
  }
  {
    id: "12",
    title: "Setting up effective monitoring for AI systems",
    content: "Here's my approach to monitoring AI systems in production environments...",
    author_id: "user1",
    author_name: "Alex Johnson",
    author_avatar: "https://i.pravatar.cc / 150?img = 3",
    author_role: "Verified Talent",
    category_id: "project - help",
    tags: ["monitoring", "production", "devops"];
    created_at: "2025 - 03 - 12T09:30:00Z",
    updated_at: "2025 - 03 - 12T09:30:00Z",
    upvotes: 24,
    downvotes: 0,
    reply_count: 6;
  }
];
;
export default /**
 * CommunityProfilePage - Function description
 */
function CommunityProfilePage() {
  const { user_id } = use_params ();
  const [user, set_user] = useState < CommunityUser | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [posts, set_posts] = useState < ForumPost[]>([]);
;
  useEffect (() => {
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;
    set_user (mock_user);
    set_posts (user_posts);
    setIsLoading (false);
  }, [user_id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <div className="flex justify - center items - center h - 64">;
            <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - purple"></div>;
          </div>;
        </div>;
      </AppLayout>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 > User not found</h1>;
          <Button as_child className="mt - 4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  return (
    <AppLayout>;
      <SEO;

import { useState, useEffect } from "react",;
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
;
// Mock user data;
const mockUser:CommunityUser = {;
  id:"user1",;
  name:"Alex Johnson",;
  avatar:"https://i.pravatar.cc/150?img=3",;
  role:"Verified Talent",;
  reputation:325,;
  postCount:14,;
  replyCount:47,;
  badges:[;
    {;
      id:"badge1",;
      name:"Answer Hero",;
      description:"Provided 10 accepted answers",;
      icon:"Award",;
      color:"#10B981";
    },;
    {;
      id:"badge2",;
      name:"Top Contributor",;
      description:"Among the top 5% of contributors",;
      icon:"Trophy",;
      color:"#F59E0B";
    },;
    {;
      id:"badge3",;
      name:"First Post",;
      description:"Created your first forum post",;
      icon:"Star",;
      color:"#6366F1";
    }
  ],;
  isVerified:true,;
  isModerator:false;
},;
;
// Mock posts by this user;
const userPosts:ForumPost[] = [;
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
    id:"11",;
    title:"How to structure an AI prompt for best results",;
    content:"After experimenting with different prompt formats, I've found these patterns to work consistently better...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"ai-tools",;
    tags:["prompts", "techniques", "optimization"],;
    createdAt:"2025-03-20T14:25:00Z",;
    updatedAt:"2025-03-20T14:25:00Z",;
    upvotes:36,;
    downvotes:1,;
    replyCount:8;
  },;
  {;
    id:"12",;
    title:"Setting up effective monitoring for AI systems",;
    content:"Here's my approach to monitoring AI systems in production environments...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"project-help",;
    tags:["monitoring", "production", "devops"],;
    createdAt:"2025-03-12T09:30:00Z",;
    updatedAt:"2025-03-12T09:30:00Z",;
    upvotes:24,;
    downvotes:0,;
    replyCount:6;
  }
],;
;
export default function CommunityProfilePage() {;
  const { userId } = useParams(),;
  const [user, setUser] = useState<CommunityUser | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [posts, setPosts] = useState<ForumPost[]>([]),;
  ;
  useEffect(() => {;
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;
    setUser(mockUser),;
    setPosts(userPosts),;
    setIsLoading(false),;
  }, [userId]),;
  ;
  if (isLoading) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    ),;
  }
  ;
  if (!user) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <h1>User not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    ),;
  }
;
  return (;
    <AppLayout>;
      <SEO ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title={`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
        keywords={`community, forum, profile, user profile, ${user.name}`}
      />;

<<<<<<< HEAD
      ;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Profile</span>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">{user.name}</span>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="md:col-span-1">;
            <Card>;
              <CardHeader className="text-center">;
                <div className="flex justify-center mb-4">;
                  <Avatar className="h-24 w-24">;
=======
      <div className="container py - 8">;
        <div className="flex items - center gap - 3 mb - 6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;
      <div className="container py-8">;
        <div className="flex items - center gap - 3 mb-6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text - muted-foreground">/</span>;
          <span className="text - sm font-medium">Profile</span>;
          <span className="text - muted-foreground">/</span>;
          <span className="text - sm font-medium">{user.name}</span>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap-8">;
          <div className="md:col - span-1">;
            <Card>;
              <CardHeader className="text-center">;
                <div className="flex justify - center mb-4">;
                  <Avatar className="h - 24 w-24">;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <AvatarImage src={user.avatar} />;
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>;
                  </Avatar>;
                </div>;

<<<<<<< HEAD
                <CardTitle className="text-2xl flex items-center justify-center gap-2">;
                  {user.name}
                  {user.isVerified && (;
                    <span className="text-blue-500">;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">;
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </svg>;
                    </span>;
                  )}
                </CardTitle>;

<<<<<<< HEAD
                {user.role && (;
                  <Badge variant="outline" className="mt-1">;                    {user.role}
                  </Badge>;
                )}
                {user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </CardHeader>;
              ;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>;
                  <ReputationDisplay reputation={user.reputation} size="lg" />;
                </div>;
                ;
                <div>;
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>;
                  <UserBadges badges={user.badges} />;
                </div>;
                ;
                <div className="grid grid-cols-2 gap-4">;
                  <Card>;
                    <CardContent className="p-4 text-center">;
                      <div className="text-2xl font-bold">{user.postCount}</div>;
                      <p className="text-sm text-muted-foreground">Posts</p>;
                    </CardContent>;
                  </Card>;
                  <Card>;
                    <CardContent className="p-4 text-center">;
                      <div className="text-2xl font-bold">{user.replyCount}</div>;
                      <p className="text-sm text-muted-foreground">Replies</p>;
                    </CardContent>;
                  </Card>;
                </div>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                ;
                <div className="text-sm text-muted-foreground">;
                  <p>Member since April 2025</p>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;

<<<<<<< HEAD
          ;

=======
          <div className="md:col - span - 2">;
            <Tabs default_value="posts">;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="md:col-span-2">;
            <Tabs defaultValue="posts">;
              <TabsList>;
                <TabsTrigger value="posts">Posts</TabsTrigger>;
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>;
              </TabsList>;

<<<<<<< HEAD
              ;
              <TabsContent value="posts" className="mt-6">;
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>;
                ;
                {posts.length > 0 ? (;
                  <div className="space-y-4">;
                    {posts.map((post) => (;
                      <PostCard key={post.id} post={post} />;
                    ))}
                  </div>;
                ) :(;
                  <Card>;
                    <CardContent className="p-6 text-center">;
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>;
=======
              <TabsContent value="posts" className="mt - 6">;
                <h2 className="text - xl font - bold mb - 4">Posts by {user.name}</h2>;
                <div className="text - sm text - muted-foreground">;
                  <p > Member since April 2025</p>;                </div>;
              </CardContent>;
            </Card>;
          </div>;
          <div className="md:col - span-2">;
            <Tabs default_value="posts">;              <TabsList>;
                <TabsTrigger value="posts">Posts</TabsTrigger>;
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>;
              </TabsList>;
              <TabsContent value="posts" className="mt-6">;
                <h2 className="text - xl font - bold mb-4">Posts by {user.name}</h2>;
                {posts.length > 0 ? (
                  <div className="space-y-4">;
                    {posts.map ((post) => (
                      <PostCard key={post.id} post={post} />))}
                  </div>) : (
                  <Card>;
                    <CardContent className="p - 6 text-center">;
                      <p className="text - muted-foreground">This user hasn't created any posts yet.</p>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </CardContent>;
                  </Card>;
                )}
              </TabsContent>;
              <TabsContent value="activity" className="mt - 6">;
                <h2 className="text - xl font - bold mb - 4">Recent Activity</h2>;
                <Card>;
                  <CardContent className="p - 6">;
                    <ul className="space - y-4">;
                      <li className="flex items - start gap - 4">;
                        <div className="min - w-fit text - sm text - muted - foreground">;
                          {formatDistanceToNow (new Date ("2025 - 04 - 10T14:30:00Z"), { add_suffix: true })}
                        </div>;
                        <div>;
                          <p > Replied to <Link to="/community / post / 3" className="text - zion - purple hover:underline">Looking for feedback on my automated testing approach</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items - start gap - 4">;
                        <div className="min - w-fit text - sm text - muted - foreground">;
                          {formatDistanceToNow (new Date ("2025 - 04 - 08T09:15:00Z"), { add_suffix: true })}
                        </div>;
                        <div>;
                          <p > Earned badge <span className="font - medium">Top Contributor</span></p>;
                        </div>;
                      </li>;
                      <li className="flex items - start gap - 4">;
                        <div className="min - w-fit text - sm text - muted - foreground">;
                          {formatDistanceToNow (new Date ("2025 - 04 - 05T16:40:00Z"), { add_suffix: true })}
                        </div>;
                        <div>;
                          <p > Replied to <Link to="/community / post / 7" className="text - zion - purple hover:underline">Comparing different vector embedding models</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items - start gap - 4">;
                        <div className="min - w-fit text - sm text - muted - foreground">;
                          {formatDistanceToNow (new Date ("2025 - 04 - 01T12:00:00Z"), { add_suffix: true })}
                        </div>;
                        <div>;
                          <p > Created post <Link to="/community / post / 1" className="text - zion - purple hover:underline">Best practices for AI model fine - tuning</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items - start gap - 4">;
                        <div className="min - w-fit text - sm text - muted - foreground">;
                          {formatDistanceToNow (new Date ("2025 - 03 - 25T08:20:00Z"), { add_suffix: true })}
                        </div>;
                        <div>;


                        </div>;

                      </li>;
                    </ul>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </div>;


<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
</AppLayout>);
}

    </AppLayout>);
}
<<<<<<< HEAD
=======

    </AppLayout>;
  );}
 isVerified: true;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD


=======
}
;
    </AppLayout>);

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

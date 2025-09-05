
import { useState } from "react",
import { useParams, Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import PostCard from "@/components/community/PostCard",
import { ForumPost, ForumCategoryInfo } from "@/types/community",
import { Badge } from "@/components/ui/badge",
import { useAuth } from "@/hooks/useAuth",import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
} from "@/components/icons",

// Mock category data,
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",    adminOnly: false,
    icon: &quot;Briefcase&quot
  },
  &quot;project-help&quot;: {
    id: &quot;project-help&quot;,
    name: &quot;Project Help&quot;,
    description: &quot;Get help with your ongoing projects and collaboration.&quot;,
    adminOnly: false,
    icon: &quot;MessageSquare&quot
  },
  &quot;ai-tools&quot;: {
    id: &quot;ai-tools&quot;,
    name: &quot;AI Tools Discussion&quot;,
    description: &quot;Discuss AI tools, frameworks, and best practices.&quot;,
    adminOnly: false,
    icon: &quot;Code&quot
  },
  &quot;feedback&quot;: {
    id: &quot;feedback&quot;,
    name: &quot;Feedback & Feature Requests&quot;,
    description: &quot;Share your feedback and suggest new features.&quot;,
    adminOnly: false,
    icon: &quot;FileText&quot
  },
  &quot;announcements&quot;: {
    id: &quot;announcements&quot;,
    name: &quot;Announcements&quot;,
    description: &quot;Official announcements from the Zion team.&quot;,
    adminOnly: true,
    icon: &quot;Megaphone&quot
  }
},

// Mock data for posts by category,
const postsByCategory: Record<string ForumPost[]> = {
  "getting-hired": [    {
      id: &quot;2&quot;,
      title: &quot;How to build an effective AI talent profile?&quot;,
      content: &quot;I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?&quot;,
      authorId: &quot;user2&quot;,
      authorName: &quot;Sarah Chen&quot;,
      authorAvatar: &quot;https://i.pravatar.cc/150?img=5&quot;,
      categoryId: &quot;getting-hired&quot;,
      tags: [&quot;profile&quot;, &quot;tips&quot;, &quot;hiring&quot],
      createdAt: &quot;2025-04-03T09:15:00Z&quot;,
      updatedAt: &quot;2025-04-03T09:15:00Z&quot;,
      upvotes: 32,
      downvotes: 0,
      replyCount: 8,
      isPinned: true,
      isFeatured: true
    },
    {
      id: &quot;6&quot;,
      title: &quot;Portfolio pieces that clients actually care about&quot;,
      content: &quot;After submitting dozens of applications, I've found that these types of projects tend to get the most attention...&quot;,
      authorId: &quot;user6&quot;,
      authorName: &quot;James Wilson&quot;,
      categoryId: &quot;getting-hired&quot;,
      tags: [&quot;portfolio&quot;, &quot;projects&quot;, &quot;examples&quot],
      createdAt: &quot;2025-04-07T11:30:00Z&quot;,
      updatedAt: &quot;2025-04-07T11:30:00Z&quot;,
      upvotes: 19,
      downvotes: 2,
      replyCount: 6
    }
  ],
  &quot;project-help&quot;: [
    {
      id: &quot;3&quot;,
      title: &quot;Looking for feedback on my automated testing approach&quot;,
      content: &quot;I've set up a CI/CD pipeline with the following testing strategy...&quot;,
      authorId: &quot;user3&quot;,
      authorName: &quot;Michael Wong&quot;,
      categoryId: &quot;project-help&quot;,
      tags: [&quot;testing&quot;, &quot;automation&quot;, &quot;ci-cd&quot],
      createdAt: &quot;2025-04-10T14:30:00Z&quot;,
      updatedAt: &quot;2025-04-10T14:30:00Z&quot;,
      upvotes: 5,
      downvotes: 0,
      replyCount: 2
    },
    {
      id: &quot;5&quot;,
      title: &quot;How to handle client scope creep?&quot;,
      content: &quot;I'm working on a project where the client keeps adding requirements...&quot;,
      authorId: &quot;user5&quot;,
      authorName: &quot;David Lin&quot;,
      categoryId: &quot;project-help&quot;,
      tags: [&quot;client-management&quot;, &quot;scope&quot;, &quot;projects&quot],
      createdAt: &quot;2025-04-08T10:20:00Z&quot;,
      updatedAt: &quot;2025-04-08T10:20:00Z&quot;,
      upvotes: 24,
      downvotes: 0,
      replyCount: 7,
      isAnswered: true
    }
  ],
  &quot;ai-tools&quot;: [
    {
      id: &quot;1&quot;,
      title: &quot;Best practices for AI model fine-tuning&quot;,
      content: &quot;I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...&quot;,
      authorId: &quot;user1&quot;,
      authorName: &quot;Alex Johnson&quot;,
      authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
      authorRole: &quot;Verified Talent&quot;,
      categoryId: &quot;ai-tools&quot;,
      tags: [&quot;machine-learning&quot;, &quot;fine-tuning&quot;, &quot;gpt&quot],
      createdAt: &quot;2025-04-01T12:00:00Z&quot;,
      updatedAt: &quot;2025-04-01T12:00:00Z&quot;,
      upvotes: 48,
      downvotes: 2,
      replyCount: 12,
      isAnswered: true,
      isFeatured: true
    },
    {
      id: &quot;7&quot;,
      title: &quot;Comparing different vector embedding models&quot;,
      content: &quot;I've been experimenting with these different embedding models and here are my findings...&quot;,
      authorId: &quot;user7&quot;,
      authorName: &quot;Lisa Park&quot;,
      categoryId: &quot;ai-tools&quot;,
      tags: [&quot;embeddings&quot;, &quot;vectors&quot;, &quot;similarity-search&quot],
      createdAt: &quot;2025-04-05T16:40:00Z&quot;,
      updatedAt: &quot;2025-04-05T16:40:00Z&quot;,
      upvotes: 31,
      downvotes: 0,
      replyCount: 9
    }
  ],
  &quot;feedback&quot;: [
    {
      id: &quot;4&quot;,
      title: &quot;Feature request: Team collaboration tools&quot;,
      content: &quot;It would be really helpful if we could have built-in tools for team collaboration...&quot;,
      authorId: &quot;user4&quot;,
      authorName: &quot;Emma Davis&quot;,
      categoryId: &quot;feedback&quot;,
      tags: [&quot;feature-request&quot;, &quot;teams&quot;, &quot;collaboration&quot],
      createdAt: &quot;2025-04-09T18:45:00Z&quot;,
      updatedAt: &quot;2025-04-09T18:45:00Z&quot;,
      upvotes: 12,
      downvotes: 1,
      replyCount: 3
    },
    {
      id: &quot;8&quot;,
      title: &quot;Suggestion for improving the jobs matching algorithm&quot;,
      content: &quot;I think the job matching could be improved by considering these additional factors...&quot;,
      authorId: &quot;user8&quot;,
      authorName: &quot;Ryan Mitchell&quot;,
      categoryId: &quot;feedback&quot;,
      tags: [&quot;matching&quot;, &quot;jobs&quot;, &quot;algorithm&quot],
      createdAt: &quot;2025-04-04T08:10:00Z&quot;,
      updatedAt: &quot;2025-04-04T08:10:00Z&quot;,
      upvotes: 17,
      downvotes: 3,
      replyCount: 5
    }
  ],
  &quot;announcements&quot;: [
    {
      id: &quot;9&quot;,
      title: &quot;Platform Update: New AI Matching Algorithm&quot;,
      content: &quot;We're excited to announce the launch of our new and improved AI matching algorithm...&quot;,
      authorId: &quot;admin1&quot;,
      authorName: &quot;Zion Team&quot;,
      authorRole: &quot;Admin&quot;,
      categoryId: &quot;announcements&quot;,
      tags: [&quot;update&quot;, &quot;matching&quot;, &quot;algorithm&quot],
      createdAt: &quot;2025-04-02T15:00:00Z&quot;,
      updatedAt: &quot;2025-04-02T15:00:00Z&quot;,
      upvotes: 42,
      downvotes: 0,
      replyCount: 11,
      isPinned: true
    },
    {
      id: &quot;10&quot;,
      title: &quot;Maintenance Scheduled: April 15th&quot;,
      content: &quot;We will be performing scheduled maintenance on April 15th from 2am-4am UTC...&quot;,
      authorId: &quot;admin1&quot;,
      authorName: &quot;Zion Team&quot;,
      authorRole: &quot;Admin&quot;,
      categoryId: &quot;announcements&quot;,
      tags: [&quot;maintenance&quot;, &quot;downtime&quot],
      createdAt: &quot;2025-04-10T09:00:00Z&quot;,
      updatedAt: &quot;2025-04-10T09:00:00Z&quot;,
      upvotes: 8,
      downvotes: 0,
      replyCount: 2,
      isPinned: true
    }
import PostCard from "@/components/community/PostCard";
import {MessageSquare, Briefcase, Code, FileText, Megaphone, Search} from "@/components/icons";

// Mock category data,
const categoriesInfo: Record<string, ForumCategoryInfo> = {_"getting-hired": {
    id: "getting-hired", name: "Getting Hired", description: "Tips, strategies, and questions about getting hired on the platform.", adminOnly: false, icon: "Briefcase"},
  "project-help": {id: "project-help", name: "Project Help", description: "Get help with your ongoing projects and collaboration.", adminOnly: false, icon: "MessageSquare"},
  "ai-tools": {id: "ai-tools", name: "AI Tools Discussion", description: "Discuss AI tools, frameworks, and best practices.", adminOnly: false, icon: "Code"},
  "feedback": {id: "feedback", name: "Feedback & Feature Requests", description: "Share your feedback and suggest new features.", adminOnly: false, icon: "FileText"},
  "announcements": {id: "announcements", name: "Announcements", description: "Official announcements from the Zion team.", adminOnly: true, icon: "Megaphone"}
};

// Mock data for posts by category,
const postsByCategory: Record<string, ForumPost[]> = {_"getting-hired": [
    {
      id: "2", title: "How to build an effective AI talent profile?", content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?", authorId: "user2", authorName: "Sarah Chen", authorAvatar: "https://i.pravatar.cc/150?img=5", categoryId: "getting-hired", tags: ["profile", _"tips", _"hiring"], createdAt: "2025-04-03T09:15:00Z", updatedAt: "2025-04-03T09:15:00Z", upvotes: 32, downvotes: 0, replyCount: 8, isPinned: true, isFeatured: true},
    {id: "6", title: "Portfolio pieces that clients actually care about", content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...", authorId: "user6", authorName: "James Wilson", categoryId: "getting-hired", tags: ["portfolio", _"projects", _"examples"], createdAt: "2025-04-07T11:30:00Z", updatedAt: "2025-04-07T11:30:00Z", upvotes: 19, downvotes: 2, replyCount: 6}
  ],
  "project-help": [
    {id: "3", title: "Looking for feedback on my automated testing approach", content: "I've set up a CI/CD pipeline with the following testing strategy...", authorId: "user3", authorName: "Michael Wong", categoryId: "project-help", tags: ["testing", _"automation", _"ci-cd"], createdAt: "2025-04-10T14:30:00Z", updatedAt: "2025-04-10T14:30:00Z", upvotes: 5, downvotes: 0, replyCount: 2},
    {id: "5", title: "How to handle client scope creep?", content: "I'm working on a project where the client keeps adding requirements...", authorId: "user5", authorName: "David Lin", categoryId: "project-help", tags: ["client-management", _"scope", _"projects"], createdAt: "2025-04-08T10:20:00Z", updatedAt: "2025-04-08T10:20:00Z", upvotes: 24, downvotes: 0, replyCount: 7, isAnswered: true}
  ],
  "ai-tools": [
    {id: "1", title: "Best practices for AI model fine-tuning", content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", authorId: "user1", authorName: "Alex Johnson", authorAvatar: "https://i.pravatar.cc/150?img=3", authorRole: "Verified Talent", categoryId: "ai-tools", tags: ["machine-learning", _"fine-tuning", _"gpt"], createdAt: "2025-04-01T12:00:00Z", updatedAt: "2025-04-01T12:00:00Z", upvotes: 48, downvotes: 2, replyCount: 12, isAnswered: true, isFeatured: true},
    {id: "7", title: "Comparing different vector embedding models", content: "I've been experimenting with these different embedding models and here are my findings...", authorId: "user7", authorName: "Lisa Park", categoryId: "ai-tools", tags: ["embeddings", _"vectors", _"similarity-search"], createdAt: "2025-04-05T16:40:00Z", updatedAt: "2025-04-05T16:40:00Z", upvotes: 31, downvotes: 0, replyCount: 9}
  ],
  "feedback": [
    {id: "4", title: "Feature request: Team collaboration tools", content: "It would be really helpful if we could have built-in tools for team collaboration...", authorId: "user4", authorName: "Emma Davis", categoryId: "feedback", tags: ["feature-request", _"teams", _"collaboration"], createdAt: "2025-04-09T18:45:00Z", updatedAt: "2025-04-09T18:45:00Z", upvotes: 12, downvotes: 1, replyCount: 3},
    {id: "8", title: "Suggestion for improving the jobs matching algorithm", content: "I think the job matching could be improved by considering these additional factors...", authorId: "user8", authorName: "Ryan Mitchell", categoryId: "feedback", tags: ["matching", _"jobs", _"algorithm"], createdAt: "2025-04-04T08:10:00Z", updatedAt: "2025-04-04T08:10:00Z", upvotes: 17, downvotes: 3, replyCount: 5}
  ],
  "announcements": [
    {id: "9", title: "Platform Update: New AI Matching Algorithm", content: "We're excited to announce the launch of our new and improved AI matching algorithm...", authorId: "admin1", authorName: "Zion Team", authorRole: "Admin", categoryId: "announcements", tags: ["update", _"matching", _"algorithm"], createdAt: "2025-04-02T15:00:00Z", updatedAt: "2025-04-02T15:00:00Z", upvotes: 42, downvotes: 0, replyCount: 11, isPinned: true},
    {id: "10", title: "Maintenance Scheduled: April 15th", content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...", authorId: "admin1", authorName: "Zion Team", authorRole: "Admin", categoryId: "announcements", tags: ["maintenance", _"downtime"], createdAt: "2025-04-10T09:00:00Z", updatedAt: "2025-04-10T09:00:00Z", upvotes: 8, downvotes: 0, replyCount: 2, isPinned: true}
  ]
},

const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
},
export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams(),
  const { user } = useAuth(),
  const [searchQuery, setSearchQuery] = useState(""),
const iconMap = {_"Briefcase": Briefcase, _"MessageSquare": MessageSquare, _"Code": Code, _"FileText": FileText, _"Megaphone": Megaphone};

export default function ForumCategoryPage() {_// useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId} = useParams();
  const {user} = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  if (!categoryId || !categoriesInfo[categoryId]) {return (
      <AppLayout>
        <div className="container py-8">
          <h1>Category not found</h1>
          <Button asChild className="mt-4&quot;>
            <Link to=&quot;/community&quot;>Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  
  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],  
  // Filter posts based on search query,
const filteredPosts = searchQuery
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts,
  
  // For announcements, check if user is admin,
const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');
  
  return (
    <AppLayout>
      <SEO,
title={_`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={_`community, forum, _${category.id}, discussion, AI marketplace, questions, answers`}
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6&quot;>
          <Link to=&quot;/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{category.name}</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zion-purple/10 rounded-full">
              <IconComponent className="h-8 w-8 text-zion-purple" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>
          </div>
          
          {canCreatePost && (
            <Button asChild>
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>
                Create New Post
              </Link>
            </Button>
          )}
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground&quot; />
            <Input,
placeholder=&quot;Search posts in this category..."
              className="pl-10"
              value={searchQuery}
              onChange={_(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {posts.length > 0 ? (_<div className="space-y-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>
            
            {canCreatePost && (
              <Button asChild>
                <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>
                  Create New Post
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  )
}

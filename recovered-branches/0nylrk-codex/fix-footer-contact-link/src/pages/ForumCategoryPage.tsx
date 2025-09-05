
<<<<<<< HEAD
import { useState } from "react",
import { useParams, Link } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import PostCard from "@/components/community/PostCard",
import { ForumPost, ForumCategoryInfo } from "@/types/community",
import { Badge } from "@/components/ui/badge",
import { useAuth } from "@/hooks/useAuth",
=======
import { useState } from &quot;react&quot;;
import { useParams, Link } from &quot;react-router-dom&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import PostCard from &quot;@/components/community/PostCard&quot;;
import { ForumPost, ForumCategoryInfo } from &quot;@/types/community&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
<<<<<<< HEAD
} from "@/components/icons",

// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
=======
} from &quot;@/components/icons&quot;;

// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  &quot;getting-hired&quot;: {
    id: &quot;getting-hired&quot;,
    name: &quot;Getting Hired&quot;,
    description: &quot;Tips, strategies, and questions about getting hired on the platform.&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    adminOnly: false,
    icon: &quot;Briefcase&quot;
  },
  &quot;project-help&quot;: {
    id: &quot;project-help&quot;,
    name: &quot;Project Help&quot;,
    description: &quot;Get help with your ongoing projects and collaboration.&quot;,
    adminOnly: false,
    icon: &quot;MessageSquare&quot;
  },
  &quot;ai-tools&quot;: {
    id: &quot;ai-tools&quot;,
    name: &quot;AI Tools Discussion&quot;,
    description: &quot;Discuss AI tools, frameworks, and best practices.&quot;,
    adminOnly: false,
    icon: &quot;Code&quot;
  },
  &quot;feedback&quot;: {
    id: &quot;feedback&quot;,
    name: &quot;Feedback & Feature Requests&quot;,
    description: &quot;Share your feedback and suggest new features.&quot;,
    adminOnly: false,
    icon: &quot;FileText&quot;
  },
  &quot;announcements&quot;: {
    id: &quot;announcements&quot;,
    name: &quot;Announcements&quot;,
    description: &quot;Official announcements from the Zion team.&quot;,
    adminOnly: true,
    icon: &quot;Megaphone&quot;
  }
},

// Mock data for posts by category
<<<<<<< HEAD
const postsByCategory: Record<string ForumPost[]> = {
  "getting-hired": [
=======
const postsByCategory: Record<string, ForumPost[]> = {
  &quot;getting-hired&quot;: [
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
    },
    {
      id: &quot;6&quot;,
      title: &quot;Portfolio pieces that clients actually care about&quot;,
      content: &quot;After submitting dozens of applications, I've found that these types of projects tend to get the most attention...&quot;,
      authorId: &quot;user6&quot;,
      authorName: &quot;James Wilson&quot;,
      categoryId: &quot;getting-hired&quot;,
      tags: [&quot;portfolio&quot;, &quot;projects&quot;, &quot;examples&quot;],
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
      tags: [&quot;testing&quot;, &quot;automation&quot;, &quot;ci-cd&quot;],
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
      tags: [&quot;client-management&quot;, &quot;scope&quot;, &quot;projects&quot;],
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
      id: &quot;7&quot;,
      title: &quot;Comparing different vector embedding models&quot;,
      content: &quot;I've been experimenting with these different embedding models and here are my findings...&quot;,
      authorId: &quot;user7&quot;,
      authorName: &quot;Lisa Park&quot;,
      categoryId: &quot;ai-tools&quot;,
      tags: [&quot;embeddings&quot;, &quot;vectors&quot;, &quot;similarity-search&quot;],
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
      tags: [&quot;feature-request&quot;, &quot;teams&quot;, &quot;collaboration&quot;],
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
      tags: [&quot;matching&quot;, &quot;jobs&quot;, &quot;algorithm&quot;],
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
      tags: [&quot;update&quot;, &quot;matching&quot;, &quot;algorithm&quot;],
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
      tags: [&quot;maintenance&quot;, &quot;downtime&quot;],
      createdAt: &quot;2025-04-10T09:00:00Z&quot;,
      updatedAt: &quot;2025-04-10T09:00:00Z&quot;,
      upvotes: 8,
      downvotes: 0,
      replyCount: 2,
      isPinned: true
    }
  ]
},

const iconMap = {
<<<<<<< HEAD
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
},
=======
  &quot;Briefcase&quot;: Briefcase,
  &quot;MessageSquare&quot;: MessageSquare,
  &quot;Code&quot;: Code,
  &quot;FileText&quot;: FileText,
  &quot;Megaphone&quot;: Megaphone
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams(),
  const { user } = useAuth(),
  const [searchQuery, setSearchQuery] = useState(""),
  
  if (!categoryId || !categoriesInfo[categoryId]) {
    return (
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
  
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts,
  
  // For announcements, check if user is admin
<<<<<<< HEAD
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),
=======
  const canCreatePost = categoryId !== &quot;announcements" || (user?.userType === 'admin' || user?.role === 'admin');
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <AppLayout>
      <SEO 
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
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
            <Input
              placeholder=&quot;Search posts in this category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {posts.length > 0 ? (
          <div className="space-y-4">
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

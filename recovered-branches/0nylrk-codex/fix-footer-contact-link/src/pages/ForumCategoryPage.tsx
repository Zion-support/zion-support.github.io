



import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import PostCard from "@/components/community/PostCard";
import {ForumPost, ForumCategoryInfo} from "@/types/community";
import {Badge} from "@/components/ui/badge";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone, Search} from "@/components/icons";


  "project-help": {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"

  }
  "ai-tools": {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }

  },

  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"



  "feedback": {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"

  }


  }
  },


  "announcements": {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true

    icon: "Megaphone"
  }
// Mock data for posts by category
const postsByCategory: Record<string, ForumPost[]> = {
  "getting-hired": [
    {}
},

// Mock data for posts by category
const postsByCategory: Record<string ForumPost[]> = {
  "getting-hired": [
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
    {
      id: "6"
      title: "Portfolio pieces that clients actually care about"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";


      author_id: "user6",
      author_name: "James Wilson",
      category_id: "getting - hired",
      tags: ["portfolio", "projects", "examples"];
      created_at: "2025 - 04 - 07T11:30:00Z",
      updated_at: "2025 - 04 - 07T11:30:00Z",
      upvotes: 19,
      downvotes: 2,
      reply_count: 6;


    }
  ];
  "project - help": [;
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

      replyCount: 6
    }
  ],
  "project-help": [
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

      replyCount: 7,
      isAnswered: true


      reply_count: 7,
      is_answered: true;


    }
  ];
  "ai - tools": [;
    {}
  ];
  "feedback": [;
    {}
  ];
  "announcements": [;
    {



      id: "9",
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["update", "matching", "algorithm"];
      created_at: "2025 - 04 - 02T15:00:00Z",
      updated_at: "2025 - 04 - 02T15:00:00Z",
      upvotes: 42,
      downvotes: 0,
      reply_count: 11,
      is_pinned: true;
    }
    {
      id: "10",
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am - 4am UTC...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["maintenance", "downtime"];
      created_at: "2025 - 04 - 10T09:00:00Z",
      updated_at: "2025 - 04 - 10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      reply_count: 2,
      is_pinned: true;
    }

  ];
}
;
const icon_map = {

      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;


  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams(),
  const { user } = useAuth(),
  const [searchQuery, setSearchQuery] = useState(""),
  
  if (!categoryId || !categoriesInfo[categoryId]) {
    return (
      <AppLayout>
        <div className="container py-8">
          <h1>Category not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] |MessageSquare;
  const posts = postsByCategory[categoryId] |[];

  
  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],
  



  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )

    : posts;
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" |(user?.userType === 'admin' |user?.role === 'admin');


    : posts,
  
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),
  



  return (
    <AppLayout>
      <SEO
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
      />
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
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
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

            <Input
              placeholder="Search posts in this category..."
              className="pl-10"



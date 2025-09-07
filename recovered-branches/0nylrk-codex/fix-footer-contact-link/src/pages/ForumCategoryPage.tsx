<<<<<<< HEAD
=======
adminOnly: false

    adminOnly: false;
"
    icon: "Briefcase"
  }

<<<<<<< HEAD
=======



>>>>>>> merged-prs-20250907-203621
import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import PostCard from "@/components/community/PostCard";
<<<<<<< HEAD
import { ForumPost, ForumCategoryInfo } from "@/types/community";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
} from "@/components/icons",

=======
import {ForumPost, ForumCategoryInfo} from "@/types/community";
import {Badge} from "@/components/ui/badge";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone, Search} from "@/components/icons";
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.";
<<<<<<< HEAD
=======



>>>>>>> merged-prs-20250907-203621
    adminOnly: false

    icon: "Briefcase"
  }
<<<<<<< HEAD
    adminOnly: false,
    icon: "Briefcase"
  },
=======
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
import {}
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search"
} from "@/components/icons",

<<<<<<< HEAD
    icon: "Briefcase"
  },

    icon: "Briefcase"
  }    adminOnly: false,
    icon: "Briefcase"
  },

=======
// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",


<<<<<<< HEAD
    adminOnly: false,
    icon: "Briefcase"
  },
    adminOnly: false,
    icon: "Briefcase"
  },
=======

    adminOnly: false,
    icon: "Briefcase"
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  "project-help": {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

<<<<<<< HEAD
    icon: "MessageSquare"
=======
<<<<<<< HEAD
=======
    icon: "MessageSquare"

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
  "ai-tools": {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },

  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
<<<<<<< HEAD
=======
  },
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  "feedback": {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
<<<<<<< HEAD
  }
=======

<<<<<<< HEAD
  },


  }
  },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  },

},

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  "announcements": {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true

    icon: "Megaphone"
  }
<<<<<<< HEAD
},

// Mock data for posts by category
const postsByCategory: Record<string ForumPost[]> = {
  "getting-hired": [
=======

// Mock data for posts by category
const postsByCategory: Record<string, ForumPost[]> = {
  "getting-hired": [
    {

import { useState } from './react';
import { use_params, Link } from './react-router-dom';
import { Button } from '@/components / ui / button';
import { Input } from '@/components / ui / input';
import { SEO } from '@/components / SEO';
import { AppLayout } from '@/layout / AppLayout';
import PostCard from "@/components / community / PostCard";
import { ForumPost, ForumCategoryInfo } from '@/types / community';
import { Badge } from '@/components / ui / badge';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from '@/components / icons';

;
// Mock category data;
const categoriesInfo: Record<string, ForumCategoryInfo> = {"
  "getting-hired": {}
    adminOnly: false,"
    icon: "Briefcase"
  },
"
  "project-help": {}
"
    id: "project-help""
    name: "Project Help""
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false;
"
    icon: "MessageSquare"

  },

"
  "ai-tools": {"
    id: "ai-tools","
    name: "AI Tools Discussion","
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,"
    icon: "Code"

"
  "feedback": {}
"
    id: "feedback""
    name: "Feedback & Feature Requests""
    description: "Share your feedback and suggest new features."
    adminOnly: false;
"
    icon: "FileText"

"
  "announcements": {}
"
    id: "announcements""
    name: "Announcements""
    description: "Official announcements from the Zion team."
    adminOnly: true;
"
    icon: "Megaphone"
  }
// Mock data for posts by category;
<<<<<<< HEAD
const postsByCategory: Record<string, ForumPost[]> = {"
  "getting-hired": []
    {}
    }

      upvotes: 19,
      downvotes: 2,
      reply_count: 6;,"
      authorId: "user2",""
      authorName: "Sarah Chen",""
      authorAvatar: "https://i.pravatar.cc/150?img=5",""
      categoryId: "getting-hired",""
      tags: ["profile", "tips", "hiring"],""
      createdAt: "2025-04-03T09:15:00Z",""
      updatedAt: "2025-04-03T09:15:00Z","
=======
const postsByCategory: Record < string, ForumPost[]> = {
  "getting - hired": [;
>>>>>>> merged-prs-20250907-203621
    {
      id: "2",
      title: "How to build an effective AI talent profile?",
      content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",
<<<<<<< HEAD
      authorId: "user2",
      authorName: "Sarah Chen",
      authorAvatar: "https://i.pravatar.cc/150?img = $2;
      categoryId: "getting-hired",
      tags: ["profile", "tips", "hiring"],
      createdAt: "2025-04-03T09: 15: 00Z",
      updatedAt: "2025-04-03T09: 15: 00Z",
      upvotes: 32,
      downvotes: 0,
      replyCount: 8,
      isPinned: true,
      isFeatured: true},
=======
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
},

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    {
      id: "6"
      title: "Portfolio pieces that clients actually care about"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      author_id: "user6",
      author_name: "James Wilson",
      category_id: "getting - hired",
      tags: ["portfolio", "projects", "examples"];
      created_at: "2025 - 04 - 07T11:30:00Z",
      updated_at: "2025 - 04 - 07T11:30:00Z",
      upvotes: 19,
      downvotes: 2,
      reply_count: 6;
<<<<<<< HEAD
      authorId: "user6"
      authorName: "James Wilson"
      categoryId: "getting-hired"
      tags: ["portfolio", "projects", "examples"];
      createdAt: "2025-04-07T11:30:00Z"
      updatedAt: "2025-04-07T11:30:00Z"
      upvotes: 19
      downvotes: 2
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      replyCount: 8,
      isPinned: true,
      isFeatured: true;
    },
<<<<<<< HEAD
      id: "6",""
      title: "Portfolio pieces that clients actually care about",""
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",""
      authorId: "user6",""
      authorName: "James Wilson",""
      tags: ["portfolio", "projects", "examples"],""
      createdAt: "2025-04-07T11:30:00Z",""
      updatedAt: "2025-04-07T11:30:00Z","
=======
>>>>>>> merged-prs-20250907-203621
    {
      id: "6",
      title: "Portfolio pieces that clients actually care about",
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",
      authorId: "user6",
      authorName: "James Wilson",
      categoryId: "getting-hired",
      tags: ["portfolio", "projects", "examples"],
<<<<<<< HEAD
      createdAt: "2025-04-07T11: 30: 00Z",
      updatedAt: "2025-04-07T11: 30: 00Z",
      upvotes: 19,
      downvotes: 2,
      replyCount: 6}
  ],
  "project-help": [
    {
=======
      createdAt: "2025-04-07T11:30:00Z",
      updatedAt: "2025-04-07T11:30:00Z",
      upvotes: 19,
      downvotes: 2,
<<<<<<< HEAD
=======

      replyCount: 6
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  ];
  "project - help": [;
    {

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
      reply_count: 2;

    }
<<<<<<< HEAD
  ];"
  "ai - tools": [;

=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
      id: "3",
      title: "Looking for feedback on my automated testing approach",
      content: "I've set up a CI/CD pipeline with the following testing strategy...",
      authorId: "user3",
      authorName: "Michael Wong",
      categoryId: "project-help",
      tags: ["testing", "automation", "ci-cd"],
<<<<<<< HEAD
      createdAt: "2025-04-10T14: 30: 00Z",
      updatedAt: "2025-04-10T14: 30: 00Z",
      upvotes: 5,
      downvotes: 0,
      replyCount: 2},
=======
      createdAt: "2025-04-10T14:30:00Z",
      updatedAt: "2025-04-10T14:30:00Z",
      upvotes: 5,
      downvotes: 0,
      replyCount: 2
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
    {
      id: "5",
      title: "How to handle client scope creep?",
      content: "I'm working on a project where the client keeps adding requirements...",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      reply_count: 7,
      is_answered: true;
=======
      author_id: "user5",
      author_name: "David Lin",
      category_id: "project - help",
      tags: ["client - management", "scope", "projects"];
      created_at: "2025 - 04 - 08T10:20:00Z",
      updated_at: "2025 - 04 - 08T10:20:00Z",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      upvotes: 24,

      replyCount: 7,
      isAnswered: true;
  "ai - tools": [;"

<<<<<<< HEAD
=======
      isAnswered: true

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  ];
  "ai - tools": [;
    {

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      updated_at: "2025 - 04 - 01T12:00:00Z",

      upvotes: 48,
      reply_count: 12,
      is_answered: true,
<<<<<<< HEAD

=======
      is_featured: true;
    }
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      authorId: "user5",
      authorName: "David Lin",
      categoryId: "project-help",
      tags: ["client-management", "scope", "projects"],
<<<<<<< HEAD
      createdAt: "2025-04-08T10: 20: 00Z",
      updatedAt: "2025-04-08T10: 20: 00Z",
      upvotes: 24,
      downvotes: 0,
      replyCount: 7,
      isAnswered: true}
  ],
  "ai-tools": [
    {
=======
      createdAt: "2025-04-08T10:20:00Z",
      updatedAt: "2025-04-08T10:20:00Z",
      upvotes: 24,
      downvotes: 0,
      replyCount: 7,
      isAnswered: true
    }
  ],
  "ai-tools": [
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
      id: "7"
      title: "Comparing different vector embedding models"
      content: "I've been experimenting with these different embedding models and here are my findings..."
      authorId: "user7"
      authorName: "Lisa Park"
      categoryId: "ai-tools"
      tags: ["embeddings", "vectors", "similarity-search"];
      createdAt: "2025-04-05T16:40:00Z"
      updatedAt: "2025-04-05T16:40:00Z"
      upvotes: 31
      downvotes: 0
>>>>>>> merged-prs-20250907-203621
      id: "1",
      title: "Best practices for AI model fine-tuning",
      content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
      authorId: "user1",
      authorName: "Alex Johnson",
<<<<<<< HEAD
      authorAvatar: "https://i.pravatar.cc/150?img = $2;
      authorRole: "Verified Talent",
      categoryId: "ai-tools",
      tags: ["machine-learning", "fine-tuning", "gpt"],
      createdAt: "2025-04-01T12: 00: 00Z",
      updatedAt: "2025-04-01T12: 00: 00Z",
=======
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      authorRole: "Verified Talent",
      categoryId: "ai-tools",
      tags: ["machine-learning", "fine-tuning", "gpt"],
      createdAt: "2025-04-01T12:00:00Z",
      updatedAt: "2025-04-01T12:00:00Z",
>>>>>>> merged-prs-20250907-203621
      upvotes: 48,
      downvotes: 2,
      replyCount: 12,
      isAnswered: true,
<<<<<<< HEAD
      isFeatured: true},
    {
      id: "7",
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",
=======
      isFeatured: true
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {

      id: "7",
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",
<<<<<<< HEAD
      reply_count: 9;
=======
      author_id: "user7",
      author_name: "Lisa Park",
      category_id: "ai - tools",
      tags: ["embeddings", "vectors", "similarity - search"];
      created_at: "2025 - 04 - 05T16:40:00Z",
      updated_at: "2025 - 04 - 05T16:40:00Z",
      upvotes: 31,
      downvotes: 0,

<<<<<<< HEAD
=======

      replyCount: 9

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  ];
  "feedback": [;
    {

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      id: "4",
      title: "Feature request: Team collaboration tools",
      content: "It would be really helpful if we could have built - in tools for team collaboration...",
      author_id: "user4",
      author_name: "Emma Davis",
      category_id: "feedback",
      tags: ["feature - request", "teams", "collaboration"];
      created_at: "2025 - 04 - 09T18:45:00Z",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      updated_at: "2025 - 04 - 09T18:45:00Z",
      upvotes: 12,
      downvotes: 1,
      reply_count: 3;
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      authorId: "user7",
      authorName: "Lisa Park",
      categoryId: "ai-tools",
      tags: ["embeddings", "vectors", "similarity-search"],
<<<<<<< HEAD
      createdAt: "2025-04-05T16: 40: 00Z",
      updatedAt: "2025-04-05T16: 40: 00Z",
      upvotes: 31,
      downvotes: 0,
      replyCount: 9}
  ],
  "feedback": [
    {
=======
      createdAt: "2025-04-05T16:40:00Z",
      updatedAt: "2025-04-05T16:40:00Z",
      upvotes: 31,
      downvotes: 0,
      replyCount: 9
    }
  ],
  "feedback": [
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
      id: "8"
      title: "Suggestion for improving the jobs matching algorithm"
      content: "I think the job matching could be improved by considering these additional factors..."
      authorId: "user8"
      authorName: "Ryan Mitchell"
      categoryId: "feedback"
      tags: ["matching", "jobs", "algorithm"];
      createdAt: "2025-04-04T08:10:00Z"
      updatedAt: "2025-04-04T08:10:00Z"
      upvotes: 17
      downvotes: 3
>>>>>>> merged-prs-20250907-203621
      id: "4",
      title: "Feature request: Team collaboration tools",
      content: "It would be really helpful if we could have built-in tools for team collaboration...",
      authorId: "user4",
      authorName: "Emma Davis",
      categoryId: "feedback",
      tags: ["feature-request", "teams", "collaboration"],
<<<<<<< HEAD
      createdAt: "2025-04-09T18: 45: 00Z",
      updatedAt: "2025-04-09T18: 45: 00Z",
      upvotes: 12,
      downvotes: 1,
      replyCount: 3},
    {
      id: "8",
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",
      authorId: "user8",
      authorName: "Ryan Mitchell",
      categoryId: "feedback",
      tags: ["matching", "jobs", "algorithm"],
      createdAt: "2025-04-04T08: 10: 00Z",
      updatedAt: "2025-04-04T08: 10: 00Z",
      upvotes: 17,
      downvotes: 3,
      replyCount: 5}
  ],
  "announcements": [
    {
=======
      createdAt: "2025-04-09T18:45:00Z",
      updatedAt: "2025-04-09T18:45:00Z",
      upvotes: 12,
      downvotes: 1,
      replyCount: 3
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {

      id: "8",
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",
<<<<<<< HEAD
      reply_count: 5;
=======
      author_id: "user8",
      author_name: "Ryan Mitchell",
      category_id: "feedback",
      tags: ["matching", "jobs", "algorithm"];
      created_at: "2025 - 04 - 04T08:10:00Z",
      updated_at: "2025 - 04 - 04T08:10:00Z",

      upvotes: 17,
      downvotes: 3,

<<<<<<< HEAD
// Mock category data;
const categoriesInfo: Record<string, ForumCategoryInfo> = {;
</string>]
=======

      replyCount: 5

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  ];
  "announcements": [;
    {


// Mock category data;
const categoriesInfo: Record<string, ForumCategoryInfo> = {;
  "getting-hired": {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  };
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  };
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
};
// Mock data for posts by category;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const postsByCategory: Record<string, ForumPost[]> = {;
  "getting-hired": [;
    {;
      id: "2",;
      title: "How to build an effective AI talent profile?",
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
    };
    {;
      id: "6",;
      title: "Portfolio pieces that clients actually care about",
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
      authorId: "user6",;
      authorName: "James Wilson",;
      categoryId: "getting-hired",;
      tags: ["portfolio", "projects", "examples"];
      createdAt: "2025-04-07T11:30:00Z",;
      updatedAt: "2025-04-07T11:30:00Z",;
      upvotes: 19,;
      downvotes: 2,;
      replyCount: 6;
    }
  ];
  "project-help": [;
    {;
      id: "3",;
      title: "Looking for feedback on my automated testing approach",
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
      id: "5",;
      title: "How to handle client scope creep?",
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
  "ai-tools": [;
    {;
      id: "1",;
      title: "Best practices for AI model fine-tuning",
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
      id: "7",;
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",;
      authorId: "user7",;
      authorName: "Lisa Park",;
      categoryId: "ai-tools",;
      tags: ["embeddings", "vectors", "similarity-search"];
      createdAt: "2025-04-05T16:40:00Z",;
      updatedAt: "2025-04-05T16:40:00Z",;
      upvotes: 31,;
      downvotes: 0,;
      replyCount: 9;
    }
  ];
  "feedback": [;
    {;
      id: "4",;
      title: "Feature request: Team collaboration tools",
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
      id: "8",;
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",;
      authorId: "user8",;
      authorName: "Ryan Mitchell",;
      categoryId: "feedback",;
      tags: ["matching", "jobs", "algorithm"];
      createdAt: "2025-04-04T08:10:00Z",;
      updatedAt: "2025-04-04T08:10:00Z",;
      upvotes: 17,;
      downvotes: 3,;
      replyCount: 5;
    }
  ];
  "announcements": [;
    {;
      id: "9",;
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",;
      authorId: "admin1",;
      authorName: "Zion Team",;
      authorRole: "Admin",;
      categoryId: "announcements",;
      tags: ["update", "matching", "algorithm"];
      createdAt: "2025-04-02T15:00:00Z",;
      updatedAt: "2025-04-02T15:00:00Z",;
      upvotes: 42,;
      downvotes: 0,;
      replyCount: 11,;
      isPinned: true;
    };
    {;
      id: "10",;
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",;
      authorId: "admin1",;
      authorName: "Zion Team",;
      authorRole: "Admin",;
      categoryId: "announcements",;
      tags: ["maintenance", "downtime"];
      createdAt: "2025-04-10T09:00:00Z",;
      updatedAt: "2025-04-10T09:00:00Z",;
      upvotes: 8,;
      downvotes: 0,;
      replyCount: 2,;
      isPinned: true;
    }
  ];
};
const iconMap = {;

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

      updated_at: "2025 - 04 - 10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      reply_count: 2,
      is_pinned: true;
    }
<<<<<<< HEAD

  ]
},

const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone

}
export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  if (!categoryId |!categoriesInfo[categoryId]) {

},

export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type

    return (

      <AppLayout>;"
        <div className="container py-8">;
          <h1>Category not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;

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

  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],

    );
  }

  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )

    : posts,
  
  // For announcements, check if user is admin'"
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),

  return (
    <AppLayout>
      <SEO;`
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}`
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
      />"
      <div className="container py-8">"
        <div className="flex items-center gap-3 mb-6">"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum;
          </Link>"
          <span className="text-muted-foreground">/</span>"
          <span className="font-medium">{category.name}</span>
        </div>"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">"
          <div className="flex items-center gap-4">"
            <div className="p-3 bg-zion-purple/10 rounded-full">"
              <IconComponent className="h-8 w-8 text-zion-purple" />
            </div>
            <div>"
              <h1 className="text-3xl font-bold">{category.name}</h1>"
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>
          </div>
          {canCreatePost && (
            <Button asChild>`
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>
                Create New Post;
              </Link>
            </Button>
          )}
        </div>"
        <div className="mb-6">"
          <div className="relative">"
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import PostCard from "@/components/community/PostCard",;
import { ForumPost, ForumCategoryInfo } from "@/types/community",;
import { Badge } from "@/components/ui/badge",;

import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone,;
  Search;"
} from "@/components/icons",;
// Mock category data;
const categoriesInfo: Record<string ForumCategoryInfo> = {;"
  "getting-hired": {;"
    id: "getting-hired",;"
    name: "Getting Hired",;"
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;"
    icon: "Briefcase";
  },;"
  "project-help": {;"
    id: "project-help",;"
    name: "Project Help",;"
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;"
    icon: "MessageSquare";
  },;"
  "ai-tools": {;"
    id: "ai-tools",;"
    name: "AI Tools Discussion",;"
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;"
    icon: "Code";
  },;"
  "feedback": {;"
    id: "feedback",;"
    name: "Feedback & Feature Requests",;"
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;"
    icon: "FileText";
  },;"
  "announcements": {;"
    id: "announcements",;"
    name: "Announcements",;"
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;"
    icon: "Megaphone";
  }
},;
// Mock data for posts by category;
const postsByCategory: Record<string ForumPost[]> = {;"
  "getting-hired": [;
    {;"
      id: "2",;"
      title: "How to build an effective AI talent profile?",'"
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
    },;
    {;"
      id: "6",;"
      title: "Portfolio pieces that clients actually care about",'"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",;"
      authorId: "user6",;"
      authorName: "James Wilson",;"
      categoryId: "getting-hired",;"
      tags: ["portfolio", "projects", "examples"],;"
      createdAt: "2025-04-07T11:30:00Z",;"
      updatedAt: "2025-04-07T11:30:00Z",;
      upvotes: 19,;
      downvotes: 2,;
      replyCount: 6;
    }
  ],;"
  "project-help": [;
    {;"
      id: "3",;"
      title: "Looking for feedback on my automated testing approach",'"
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
      id: "5",;"
      title: "How to handle client scope creep?",'"
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
  ],;"
  "ai-tools": [;
    {;"
      id: "1",;"
      title: "Best practices for AI model fine-tuning",'"
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
      id: "7",;"
      title: "Comparing different vector embedding models",'"
      content: "I've been experimenting with these different embedding models and here are my findings...",;"
      authorId: "user7",;"
      authorName: "Lisa Park",;"
      categoryId: "ai-tools",;"
      tags: ["embeddings", "vectors", "similarity-search"],;"
      createdAt: "2025-04-05T16:40:00Z",;"
      updatedAt: "2025-04-05T16:40:00Z",;
      upvotes: 31,;
      downvotes: 0,;
      replyCount: 9;
    }
  ],;"
  "feedback": [;
    {;"
      id: "4",;"
      title: "Feature request: Team collaboration tools","
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
      id: "8",;"
      title: "Suggestion for improving the jobs matching algorithm","
      content: "I think the job matching could be improved by considering these additional factors...",;"
      authorId: "user8",;"
      authorName: "Ryan Mitchell",;"
      categoryId: "feedback",;"
      tags: ["matching", "jobs", "algorithm"],;"
      createdAt: "2025-04-04T08:10:00Z",;"
      updatedAt: "2025-04-04T08:10:00Z",;
      upvotes: 17,;
      downvotes: 3,;
      replyCount: 5;
    }
  ],;"
  "announcements": [;
    {;"
      id: "9",;"
      title: "Platform Update: New AI Matching Algorithm",'"
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",;"
      authorId: "admin1",;"
      authorName: "Zion Team",;"
      authorRole: "Admin",;"
      categoryId: "announcements",;"
      tags: ["update", "matching", "algorithm"],;"
      createdAt: "2025-04-02T15:00:00Z",;"
      updatedAt: "2025-04-02T15:00:00Z",;
      upvotes: 42,;
      downvotes: 0,;
      replyCount: 11,;
      isPinned: true;
    },;
    {;"
      id: "10",;"
      title: "Maintenance Scheduled: April 15th","
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",;"
      authorId: "admin1",;"
      authorName: "Zion Team",;"
      authorRole: "Admin",;"
      categoryId: "announcements",;"
      tags: ["maintenance", "downtime"],;"
      createdAt: "2025-04-10T09:00:00Z",;"
      updatedAt: "2025-04-10T09:00:00Z",;
      upvotes: 8,;
      downvotes: 0,;
      replyCount: 2,;
      isPinned: true;
    }
  ];
},;
const iconMap = {;"
  "Briefcase": Briefcase,;"
  "MessageSquare": MessageSquare,;"
  "Code": Code,;"
  "FileText": FileText,;"
  "Megaphone": Megaphone;
},;
export default function ForumCategoryPage() { return null; }
  const { categoryId } = useParams(),;
  const { user } = useAuth(),;"
  const [searchQuery, setSearchQuery] = useState(""),;
  if (!categoryId || !categoriesInfo[categoryId]) {;
    return (;
      <AppLayout>;"
        <div className="container py-8">;
          <h1>Category not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
;
  const category = categoriesInfo[categoryId],;
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,;
  const posts = postsByCategory[categoryId] || [],;

  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts && posts.filter(post => ;
        post && post.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      );
    : posts;

  // For announcements, check if user is admin;'"
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');

  return (
    <AppLayout>;
      <SEO;`
        title={`${category && category.name} | Community Forum | Zion AI Marketplace`}
        description={category && category.description}`
        keywords={`community, forum, ${category && category.id}, discussion, AI marketplace, questions, answers`}
      />;
"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;"
          <div className="flex items-center gap-4">;"
            <div className="p-3 bg-zion-purple/10 rounded-full">;"
              <IconComponent className="h-8 w-8 text-zion-purple" />;
            </div>;
            <div>;

                Create New Post;
              </Link>;
            </Button>;
          )}
        </div>;

            <Input
              placeholder="Search posts in this category..."

              className="pl-10"
              value={searchQuery}

            )}
          </div>;

  "Megaphone": Megaphone;
}
;

=======
  ];
}
;
const icon_map = {
  "Briefcase": Briefcase;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  "MessageSquare": MessageSquare;
  "Code": Code;
  "FileText": FileText;
  "Megaphone": Megaphone;
};
export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  if (!categoryId || !categoriesInfo[categoryId]) {;
<<<<<<< HEAD

  ]
},

authorId: "user8",
=======
  ]
},


<<<<<<< HEAD
      authorId: "user8",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      authorName: "Ryan Mitchell",
      categoryId: "feedback",
      tags: ["matching", "jobs", "algorithm"],
      createdAt: "2025-04-04T08:10:00Z",
      updatedAt: "2025-04-04T08:10:00Z",
      upvotes: 17,
      downvotes: 3,
      replyCount: 5
    }
  ],
  "announcements": [
    {
      id: "9"
      title: "Platform Update: New AI Matching Algorithm"
      content: "We're excited to announce the launch of our new and improved AI matching algorithm..."
      authorId: "admin1"
      authorName: "Zion Team"
      authorRole: "Admin"
      categoryId: "announcements"
      tags: ["update", "matching", "algorithm"];
      createdAt: "2025-04-02T15:00:00Z"
      updatedAt: "2025-04-02T15:00:00Z"
      upvotes: 42
      downvotes: 0
      replyCount: 11
      isPinned: true
    }
    {
      id: "10"
      title: "Maintenance Scheduled: April 15th"
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC..."
      authorId: "admin1"
      authorName: "Zion Team"
      authorRole: "Admin"
      categoryId: "announcements"
      tags: ["maintenance", "downtime"];
      createdAt: "2025-04-10T09:00:00Z"
      updatedAt: "2025-04-10T09:00:00Z"
      upvotes: 8
      downvotes: 0
      replyCount: 2
      isPinned: true
    }
  ]
}
>>>>>>> merged-prs-20250907-203621
      id: "9",
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",
      authorId: "admin1",
      authorName: "Zion Team",
      authorRole: "Admin",
      categoryId: "announcements",
      tags: ["update", "matching", "algorithm"],
<<<<<<< HEAD
      createdAt: "2025-04-02T15: 00: 00Z",
      updatedAt: "2025-04-02T15: 00: 00Z",
      upvotes: 42,
      downvotes: 0,
      replyCount: 11,
      isPinned: true},
=======
      createdAt: "2025-04-02T15:00:00Z",
      updatedAt: "2025-04-02T15:00:00Z",
      upvotes: 42,
      downvotes: 0,
      replyCount: 11,
      isPinned: true
    },
>>>>>>> merged-prs-20250907-203621
    {
      id: "10",
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",
      authorId: "admin1",
      authorName: "Zion Team",
      authorRole: "Admin",
      categoryId: "announcements",
      tags: ["maintenance", "downtime"],
<<<<<<< HEAD
      createdAt: "2025-04-10T09: 00: 00Z",
      updatedAt: "2025-04-10T09: 00: 00Z",
      upvotes: 8,
      downvotes: 0,
      replyCount: 2,
      isPinned: true}
  ]
},

const iconMap = $2;
=======
      createdAt: "2025-04-10T09:00:00Z",
      updatedAt: "2025-04-10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      replyCount: 2,
      isPinned: true
    }
  ]
},
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const iconMap = {
  "Briefcase": Briefcase,
>>>>>>> merged-prs-20250907-203621
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  if (!categoryId |!categoriesInfo[categoryId]) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
},

export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
<<<<<<< HEAD
  // definitions, so avoid passing a type argument to prevent TS2347.
  const { categoryId } = useParams($2);
  const { user } = useAuth($2);
  const [searchQuery, setSearchQuery] = useState($2);
  if (!categoryId || !categoriesInfo[categoryId]) {
    return (
      <AppLayout>
        <div className = $2;
  const IconComponent = $2;
  const posts = $2;
  // Filter posts based on search query
  const filteredPosts = $2;
  // For announcements, check if user is admin
  const canCreatePost = $2;
=======
<<<<<<< HEAD
    return (

import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import PostCard from "@/components/community/PostCard",;
import { ForumPost, ForumCategoryInfo } from "@/types/community",;
import { Badge } from "@/components/ui/badge",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone,;
  Search;
} from "@/components/icons",;
;
// Mock category data;
const categoriesInfo:Record<string ForumCategoryInfo> = {;
  "getting-hired":{;
    id:"getting-hired",;
    name:"Getting Hired",;
    description:"Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly:false,;
    icon:"Briefcase";
  },;
  "project-help":{;
    id:"project-help",;
    name:"Project Help",;
    description:"Get help with your ongoing projects and collaboration.",;
    adminOnly:false,;
    icon:"MessageSquare";
  },;
  "ai-tools":{;
    id:"ai-tools",;
    name:"AI Tools Discussion",;
    description:"Discuss AI tools, frameworks, and best practices.",;
    adminOnly:false,;
    icon:"Code";
  },;
  "feedback":{;
    id:"feedback",;
    name:"Feedback & Feature Requests",;
    description:"Share your feedback and suggest new features.",;
    adminOnly:false,;
    icon:"FileText";
  },;
  "announcements":{;
    id:"announcements",;
    name:"Announcements",;
    description:"Official announcements from the Zion team.",;
    adminOnly:true,;
    icon:"Megaphone";
  }
},;
;
// Mock data for posts by category;
const postsByCategory:Record<string ForumPost[]> = {;
  "getting-hired":[;
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
    },;
    {;
      id:"6",;
      title:"Portfolio pieces that clients actually care about",;
      content:"After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",;
      authorId:"user6",;
      authorName:"James Wilson",;
      categoryId:"getting-hired",;
      tags:["portfolio", "projects", "examples"],;
      createdAt:"2025-04-07T11:30:00Z",;
      updatedAt:"2025-04-07T11:30:00Z",;
      upvotes:19,;
      downvotes:2,;
      replyCount:6;
    }
  ],;
  "project-help":[;
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
  "ai-tools":[;
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
      id:"7",;
      title:"Comparing different vector embedding models",;
      content:"I've been experimenting with these different embedding models and here are my findings...",;
      authorId:"user7",;
      authorName:"Lisa Park",;
      categoryId:"ai-tools",;
      tags:["embeddings", "vectors", "similarity-search"],;
      createdAt:"2025-04-05T16:40:00Z",;
      updatedAt:"2025-04-05T16:40:00Z",;
      upvotes:31,;
      downvotes:0,;
      replyCount:9;
    }
  ],;
  "feedback":[;
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
      id:"8",;
      title:"Suggestion for improving the jobs matching algorithm",;
      content:"I think the job matching could be improved by considering these additional factors...",;
      authorId:"user8",;
      authorName:"Ryan Mitchell",;
      categoryId:"feedback",;
      tags:["matching", "jobs", "algorithm"],;
      createdAt:"2025-04-04T08:10:00Z",;
      updatedAt:"2025-04-04T08:10:00Z",;
      upvotes:17,;
      downvotes:3,;
      replyCount:5;
    }
  ],;
  "announcements":[;
    {;
      id:"9",;
      title:"Platform Update:New AI Matching Algorithm",;
      content:"We're excited to announce the launch of our new and improved AI matching algorithm...",;
      authorId:"admin1",;
      authorName:"Zion Team",;
      authorRole:"Admin",;
      categoryId:"announcements",;
      tags:["update", "matching", "algorithm"],;
      createdAt:"2025-04-02T15:00:00Z",;
      updatedAt:"2025-04-02T15:00:00Z",;
      upvotes:42,;
      downvotes:0,;
      replyCount:11,;
      isPinned:true;
    },;
    {;
      id:"10",;
      title:"Maintenance Scheduled:April 15th",;
      content:"We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",;
      authorId:"admin1",;
      authorName:"Zion Team",;
      authorRole:"Admin",;
      categoryId:"announcements",;
      tags:["maintenance", "downtime"],;
      createdAt:"2025-04-10T09:00:00Z",;
      updatedAt:"2025-04-10T09:00:00Z",;
      upvotes:8,;
      downvotes:0,;
      replyCount:2,;
      isPinned:true;
    }
  ];
},;
;
const iconMap = {;
  "Briefcase":Briefcase,;
  "MessageSquare":MessageSquare,;
  "Code":Code,;
  "FileText":FileText,;
  "Megaphone":Megaphone;
},;
;
export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams(),;
  const { user } = useAuth(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  if (!categoryId || !categoriesInfo[categoryId]) {;
    return (;
=======

    return (
    return (
import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import PostCard from "@/components/community/PostCard",;
import { ForumPost, ForumCategoryInfo } from "@/types/community",;
import { Badge } from "@/components/ui/badge",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone,;
  Search;
} from "@/components/icons",;
;
// Mock category data;
const categoriesInfo:Record<string ForumCategoryInfo> = {;
const postsByCategory:Record<string ForumPost[]> = {;
  "getting-hired":[;
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
    },;
    {;
      id:"6",;
      title:"Portfolio pieces that clients actually care about",;
      content:"After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",;
      authorId:"user6",;
      authorName:"James Wilson",;
      categoryId:"getting-hired",;
      tags:["portfolio", "projects", "examples"],;
      createdAt:"2025-04-07T11:30:00Z",;
      updatedAt:"2025-04-07T11:30:00Z",;
      upvotes:19,;
      downvotes:2,;
      replyCount:6;
    }
  ],;
  "project-help":[;
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
  "ai-tools":[;
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
      id:"7",;
      title:"Comparing different vector embedding models",;
      content:"I've been experimenting with these different embedding models and here are my findings...",;
      authorId:"user7",;
      authorName:"Lisa Park",;
      categoryId:"ai-tools",;
      tags:["embeddings", "vectors", "similarity-search"],;
      createdAt:"2025-04-05T16:40:00Z",;
      updatedAt:"2025-04-05T16:40:00Z",;
      upvotes:31,;
      downvotes:0,;
      replyCount:9;
    }
  ],;
  "feedback":[;
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
      id:"8",;
      title:"Suggestion for improving the jobs matching algorithm",;
      content:"I think the job matching could be improved by considering these additional factors...",;
      authorId:"user8",;
      authorName:"Ryan Mitchell",;
      categoryId:"feedback",;
      tags:["matching", "jobs", "algorithm"],;
      createdAt:"2025-04-04T08:10:00Z",;
      updatedAt:"2025-04-04T08:10:00Z",;
      upvotes:17,;
      downvotes:3,;
      replyCount:5;
    }
  ],;
  "announcements":[;
    {;
      id:"9",;
      title:"Platform Update:New AI Matching Algorithm",;
      content:"We're excited to announce the launch of our new and improved AI matching algorithm...",;
      authorId:"admin1",;
      authorName:"Zion Team",;
      authorRole:"Admin",;
      categoryId:"announcements",;
      tags:["update", "matching", "algorithm"],;
      createdAt:"2025-04-02T15:00:00Z",;
      updatedAt:"2025-04-02T15:00:00Z",;
      upvotes:42,;
      downvotes:0,;
      replyCount:11,;
      isPinned:true;
    },;
    {;
      id:"10",;
      title:"Maintenance Scheduled:April 15th",;
      content:"We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",;
      authorId:"admin1",;
      authorName:"Zion Team",;
      authorRole:"Admin",;
      categoryId:"announcements",;
      tags:["maintenance", "downtime"],;
      createdAt:"2025-04-10T09:00:00Z",;
      updatedAt:"2025-04-10T09:00:00Z",;
      upvotes:8,;
      downvotes:0,;
      replyCount:2,;
      isPinned:true;
    }
  ];
},;
;
const iconMap = {;
  "Briefcase":Briefcase,;
  "MessageSquare":MessageSquare,;
  "Code":Code,;
  "FileText":FileText,;
  "Megaphone":Megaphone;
},;
;
export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams(),;
  const { user } = useAuth(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  if (!categoryId || !categoriesInfo[categoryId]) {;
    return (;
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <AppLayout>;
        <div className="container py-8">;"
</div>
          <h1>Category not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community;"
        </div>;
      </AppLayout>;
<<<<<<< HEAD

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
=======
    );
  }

<<<<<<< HEAD
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

    );
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],
  
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
<<<<<<< HEAD
: posts;
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" |(user?.userType === 'admin' |user?.role === 'admin');
=======

<<<<<<< HEAD
    : posts;
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" |(user?.userType === 'admin' |user?.role === 'admin');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    : posts,
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
=======
<<<<<<< HEAD
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
=======

  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];

<Input
              placeholder="Search posts in this category..."
              className="pl-10"

<<<<<<< HEAD
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from "react",;
import { useParams, Link } from "react-router-dom",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import PostCard from "@/components/community/PostCard",;
import { ForumPost, ForumCategoryInfo } from "@/types/community",;
import { Badge } from "@/components/ui/badge",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone,;
  Search;
} from "@/components/icons",;
// Mock category data;
const categoriesInfo: Record<string ForumCategoryInfo> = {;
  "getting-hired": {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
  "project-help": {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  },;
  "ai-tools": {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
  "feedback": {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  },;
  "announcements": {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
},;
// Mock data for posts by category;
const postsByCategory: Record<string ForumPost[]> = {;
  "getting-hired": [;
    {;
      id: "2",;
      title: "How to build an effective AI talent profile?",
      content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;
      authorId: "user2",;
      authorName: "Sarah Chen",;
      authorAvatar: "https://i.pravatar.cc/150?img=5",;
      categoryId: "getting-hired",;
      tags: ["profile", "tips", "hiring"],;
      createdAt: "2025-04-03T09:15:00Z",;
      updatedAt: "2025-04-03T09:15:00Z",;
      upvotes: 32,;
      downvotes: 0,;
      replyCount: 8,;
      isPinned: true,;
      isFeatured: true;
    },;
    {;
      id: "6",;
      title: "Portfolio pieces that clients actually care about",
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",;
      authorId: "user6",;
      authorName: "James Wilson",;
      categoryId: "getting-hired",;
      tags: ["portfolio", "projects", "examples"],;
      createdAt: "2025-04-07T11:30:00Z",;
      updatedAt: "2025-04-07T11:30:00Z",;
      upvotes: 19,;
      downvotes: 2,;
      replyCount: 6;
    }
  ],;
  "project-help": [;
    {;
      id: "3",;
      title: "Looking for feedback on my automated testing approach",
      content: "I've set up a CI/CD pipeline with the following testing strategy...",;
      authorId: "user3",;
      authorName: "Michael Wong",;
      categoryId: "project-help",;
      tags: ["testing", "automation", "ci-cd"],;
      createdAt: "2025-04-10T14:30:00Z",;
      updatedAt: "2025-04-10T14:30:00Z",;
      upvotes: 5,;
      downvotes: 0,;
      replyCount: 2;
    },;
    {;
      id: "5",;
      title: "How to handle client scope creep?",
      content: "I'm working on a project where the client keeps adding requirements...",;
      authorId: "user5",;
      authorName: "David Lin",;
      categoryId: "project-help",;
      tags: ["client-management", "scope", "projects"],;
      createdAt: "2025-04-08T10:20:00Z",;
      updatedAt: "2025-04-08T10:20:00Z",;
      upvotes: 24,;
      downvotes: 0,;
      replyCount: 7,;
      isAnswered: true;
    }
  ],;
  "ai-tools": [;
    {;
      id: "1",;
      title: "Best practices for AI model fine-tuning",
      content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
      authorId: "user1",;
      authorName: "Alex Johnson",;
      authorAvatar: "https://i.pravatar.cc/150?img=3",;
      authorRole: "Verified Talent",;
      categoryId: "ai-tools",;
      tags: ["machine-learning", "fine-tuning", "gpt"],;
      createdAt: "2025-04-01T12:00:00Z",;
      updatedAt: "2025-04-01T12:00:00Z",;
      upvotes: 48,;
      downvotes: 2,;
      replyCount: 12,;
      isAnswered: true,;
      isFeatured: true;
    },;
    {;
      id: "7",;
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",;
      authorId: "user7",;
      authorName: "Lisa Park",;
      categoryId: "ai-tools",;
      tags: ["embeddings", "vectors", "similarity-search"],;
      createdAt: "2025-04-05T16:40:00Z",;
      updatedAt: "2025-04-05T16:40:00Z",;
      upvotes: 31,;
      downvotes: 0,;
      replyCount: 9;
    }
  ],;
  "feedback": [;
    {;
      id: "4",;
      title: "Feature request: Team collaboration tools",
      content: "It would be really helpful if we could have built-in tools for team collaboration...",;
      authorId: "user4",;
      authorName: "Emma Davis",;
      categoryId: "feedback",;
      tags: ["feature-request", "teams", "collaboration"],;
      createdAt: "2025-04-09T18:45:00Z",;
      updatedAt: "2025-04-09T18:45:00Z",;
      upvotes: 12,;
      downvotes: 1,;
      replyCount: 3;
    },;
    {;
      id: "8",;
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",;
      authorId: "user8",;
      authorName: "Ryan Mitchell",;
      categoryId: "feedback",;
      tags: ["matching", "jobs", "algorithm"],;
      createdAt: "2025-04-04T08:10:00Z",;
      updatedAt: "2025-04-04T08:10:00Z",;
      upvotes: 17,;
      downvotes: 3,;
      replyCount: 5;
    }
  ],;
  "announcements": [;
    {;
      id: "9",;
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",;
      authorId: "admin1",;
      authorName: "Zion Team",;
      authorRole: "Admin",;
      categoryId: "announcements",;
      tags: ["update", "matching", "algorithm"],;
      createdAt: "2025-04-02T15:00:00Z",;
      updatedAt: "2025-04-02T15:00:00Z",;
      upvotes: 42,;
      downvotes: 0,;
      replyCount: 11,;
      isPinned: true;
    },;
    {;
      id: "10",;
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",;
      authorId: "admin1",;
      authorName: "Zion Team",;
      authorRole: "Admin",;
      categoryId: "announcements",;
      tags: ["maintenance", "downtime"],;
      createdAt: "2025-04-10T09:00:00Z",;
      updatedAt: "2025-04-10T09:00:00Z",;
      upvotes: 8,;
      downvotes: 0,;
      replyCount: 2,;
      isPinned: true;
    }
  ];
},;
const iconMap = {;
  "Briefcase": Briefcase,;
  "MessageSquare": MessageSquare,;
  "Code": Code,;
  "FileText": FileText,;
  "Megaphone": Megaphone;
},;
export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams(),;
  const { user } = useAuth(),;
  const [searchQuery, setSearchQuery] = useState(""),;
  if (!categoryId || !categoriesInfo[categoryId]) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
;
  const category = categoriesInfo[categoryId],;
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,;
  const posts = postsByCategory[categoryId] || [],;
<<<<<<< HEAD
  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];
=======

<<<<<<< HEAD
const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts && posts.filter(post => ;
        post && post.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      );
    : posts;
<<<<<<< HEAD
  // For announcements, check if user is admin;
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');
=======

  // For announcements, check if user is admin;
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <AppLayout>;
      <SEO
        title={`${category && category.name} | Community Forum | Zion AI Marketplace`}
        description={category && category.description}
        keywords={`community, forum, ${category && category.id}, discussion, AI marketplace, questions, answers`}
      />;
<<<<<<< HEAD
    ),;
  }
  ;
  const category = categoriesInfo[categoryId],;
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,;
  const posts = postsByCategory[categoryId] || [],;
  ;
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts.filter(post => ;
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts.filter(post =>;
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );
          <span className="font-medium">{category.name}</span>;
        </div>;
<<<<<<< HEAD

),;
  }
  ;
  const category = categoriesInfo[categoryId],;
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,;
  const posts = postsByCategory[categoryId] || [],;
  ;
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts.filter(post => ;
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts.filter(post =>;
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||;
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      );
          <span className="font-medium">{category.name}</span>;
        </div>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
          <div className="flex items-center gap-4">;
            <div className="p-3 bg-zion-purple/10 rounded-full">;
              <IconComponent className="h-8 w-8 text-zion-purple" />;
            </div>;
            <div>;
              <h1 className="text-3xl font-bold">{category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category.description}</p>;
            </div>;
          </div>;
          ;
          {canCreatePost && (;
            <Button asChild>;
              <Link to={user ? `/community/create?category=${categoryId}` :`/login?next=/community/create?category=${categoryId}`}>;
                Create New Post;
              </Link>;
            </Button>;
          )}
        </div>;
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
        </div>;
        {posts && posts.length > 0 ? (;
          <div className="space-y-4">;
            {filteredPosts && filteredPosts.map((post) => (;
              <PostCard key={post && post.id} post={post} />;
            ))}
          </div>;
        ) : (;
          <div className="text-center py-16">;
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>;
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>;
            {canCreatePost && (;
              <Button asChild>;
                <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>;
        ;
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />;
            <Input;
              placeholder="Search posts in this category...";
              className="pl-10";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
          </div>;
        </div>;
        ;
        {posts.length > 0 ? (;
          <div className="space-y-4">;
            {filteredPosts.map((post) => (;
              <PostCard key={post.id} post={post} />;            ))}
          </div>;
        ) :(;
          <div className="text-center py-16">;
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>;
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>;
            ;
            {canCreatePost && (;
              <Button asChild>;
                <Link to={user ? `/community/create?category=${categoryId}` :`/login?next=/community/create?category=${categoryId}`}>;
                  Create New Post;
                </Link>;
              </Button>;
            )}
          </div>;
        )}
      </div>;
    </AppLayout>;
export default /**
 * ForumCategoryPage - Function description
 */
function ForumCategoryPage() {
  // use_params is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { category_id } = use_params ();
  const { user } = use_auth ();
  const [search_query, setSearchQuery] = useState ("");
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 > Category not found</h1>;
          <Button as_child className="mt - 4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  const category = categories_info[category_id];
  const IconComponent = icon_map[category.icon as keyof typeof icon_map] || MessageSquare;
  const posts = postsByCategory[category_id] || [];
;
  // Filter posts based on search query;
  const filtered_posts = search_query;
    ? posts.filter (post =>;
        post.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.content.toLowerCase ().includes (search_query.toLowerCase ()) ||;
        post.tags.some (tag => tag.toLowerCase ().includes (search_query.toLowerCase ())));
    : posts;
;
  // For announcements, check if user is admin;
  const canCreatePost = category_id !== "announcements" || (user?.user_type === 'admin' || user?.role === 'admin');
;
  return (
    : posts;
  // For announcements, check if user is admin;
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');
  return (;
    <AppLayout>;
      <SEO;
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
      />;
  ),; import {
  MessageSquare;
Briefcase;
Code;
FileText;
Megaphone;
Search adminOnly: false;
icon: "Briefcase" 
};
"project-help" : {
  id: "project-help";
name: "Project Help";
description: "Get help with your ongoing projects and collaboration.";
adminOnly: false;
icon: "MessageSquare" 
};
"ai-tools" : {
  id: "ai-tools";
name: "AI Tools Discussion";
description: "Discuss AI tools, frameworks, and best practices.";
adminOnly: false;
icon: "Code" 
};
"feedback" : {
  id: "feedback";
name: "Feedback & Feature Requests";
description: "Share your feedback and suggest new features.";
adminOnly: false;
icon: "FileText" 
};
"announcements" : {
  id: "announcements";
name: "Announcements";
description: "Official announcements from the Zion team.";
adminOnly: true;
icon: "Megaphone" 
}
};
//Mock data for posts by category {
  id: "2";
title: "How to build an effective AI talent profile?";
content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?";
authorId: "user2";
authorName: "Sarah Chen";
authorAvatar: "https://i.pravatar.cc/150?img=5";
categoryId: "getting-hired";
tags: ["profile", "tips", "hiring" ];
createdAt: "2025-04-03T09:15:00Z";
updatedAt: "2025-04-03T09:15:00Z";
upvotes: 32;
downvotes: 0;
replyCount: 8;
isPinned: true;
isFeatured: true 
};
{
  id: "6";
title: "Portfolio pieces that clients actually care about";
content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
authorId: "user6";
authorName: "James Wilson";
categoryId: "getting-hired";
tags: ["portfolio", "projects", "examples" ];
createdAt: "2025-04-07T11:30:00Z";
updatedAt: "2025-04-07T11:30:00Z";
upvotes: 19;
downvotes: 2;
replyCount: 6 
}];
"project-help" : [ {
  id: "3";
title: "Looking for feedback on my automated testing approach";
content: "I've set up a CI/CD pipeline with the following testing strategy...";
authorId: "user3";
authorName: "Michael Wong";
categoryId: "project-help";
tags: ["testing", "automation", "ci-cd" ];
createdAt: "2025-04-10T14:30:00Z";
updatedAt: "2025-04-10T14:30:00Z";
upvotes: 5;
downvotes: 0;
replyCount: 2 
};
{
  id: "5";
title: "How to handle client scope creep?";
content: "I'm working on a project where the client keeps adding requirements...";
authorId: "user5";
authorName: "David Lin";
categoryId: "project-help";
tags: ["client-management", "scope", "projects" ];
createdAt: "2025-04-08T10:20:00Z";
updatedAt: "2025-04-08T10:20:00Z";
upvotes: 24;
downvotes: 0;
replyCount: 7;
isAnswered: true 
}];
"ai-tools" : [ {
  id: "1";
title: "Best practices for AI model fine-tuning";
content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...";
authorId: "user1";
authorName: "Alex Johnson";
authorAvatar: "https://i.pravatar.cc/150?img=3";
authorRole: "Verified Talent";
categoryId: "ai-tools";
tags: ["machine-learning", "fine-tuning", "gpt" ];
createdAt: "2025-04-01T12:00:00Z";
updatedAt: "2025-04-01T12:00:00Z";
upvotes: 48;
downvotes: 2;
replyCount: 12;
isAnswered: true;
isFeatured: true 
};
{
  id: "7";
title: "Comparing different vector embedding models";
content: "I've been experimenting with these different embedding models and here are my findings...";
authorId: "user7";
authorName: "Lisa Park";
categoryId: "ai-tools";
tags: ["embeddings", "vectors", "similarity-search" ];
createdAt: "2025-04-05T16:40:00Z";
updatedAt: "2025-04-05T16:40:00Z";
upvotes: 31;
downvotes: 0;
replyCount: 9 
}];
"feedback" : [ {
  id: "4";
title: "Feature request: Team collaboration tools";
content: "It would be really helpful if we could have built-in tools for team collaboration...";
authorId: "user4";
authorName: "Emma Davis";
categoryId: "feedback";
tags: ["feature-request", "teams", "collaboration" ];
createdAt: "2025-04-09T18:45:00Z";
updatedAt: "2025-04-09T18:45:00Z";
upvotes: 12;
downvotes: 1;
replyCount: 3 
};
{
  id: "8";
title: "Suggestion for improving the jobs matching algorithm";
content: "I think the job matching could be improved by considering these additional factors...";
authorId: "user8";
authorName: "Ryan Mitchell";
categoryId: "feedback";
tags: ["matching", "jobs", "algorithm" ];
createdAt: "2025-04-04T08:10:00Z";
updatedAt: "2025-04-04T08:10:00Z";
upvotes: 17;
downvotes: 3;
replyCount: 5 
}];
"announcements" : [ {
  id: "9";
title: "Platform Update: New AI Matching Algorithm";
content: "We're excited to announce the launch of our new and improved AI matching algorithm...";
authorId: "admin1";
authorName: "Zion Team";
authorRole: "Admin";
categoryId: "announcements";
tags: ["update", "matching", "algorithm" ];
createdAt: "2025-04-02T15:00:00Z";
updatedAt: "2025-04-02T15:00:00Z";
upvotes: 42;
downvotes: 0;
replyCount: 11;
isPinned: true 
};
{
  id: "10";
title: "Maintenance Scheduled: April 15th";
content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...";
authorId: "admin1";
authorName: "Zion Team";
authorRole: "Admin";
categoryId: "announcements";
tags: ["maintenance", "downtime" ];
createdAt: "2025-04-10T09:00:00Z";
updatedAt: "2025-04-10T09:00:00Z";
upvotes: 8;
downvotes: 0;
replyCount: 2;
isPinned: true 
}
};
export default function ForumCategoryPage () {
  //useParams is typed as `any` in this environment due to missing type //definitions, so avoid passing a type argument to prevent TS2347. const {
  categoryId 
}= useParams ();
const {
  user 
}= useAuth ();
const [searchQuery, setSearchQuery] = useState ("");
return (<AppLayout> <div className="container py-8"> <h1>Category not found</h1> <Button asChild className="mt-4"> <Link to=" /community">Back to Community</Link> </Button> </div> </AppLayout> //Filter posts based on search query const filteredPosts = searchQuery ? posts.filter (post => post.title.toLowerCase () .includes (searchQuery.toLowerCase () ) || post.content.toLowerCase () .includes (searchQuery.toLowerCase () ) || post.tags.some (tag => tag.toLowerCase () .includes (searchQuery.toLowerCase () ) ) ) : posts;
//For announcements, check if user is admin `$ {
  category.name 
}| Community Forum | Zion AI Marketplace` 
}description= {
  category.description 
}keywords= {
  `community, forum, $ {
  category.id 
}, discussion, AI marketplace, questions, answers` 
}/> <div className="container py-8"> <div className="flex items-center gap-3 mb-6"> <Link to=" /community"className="text-sm text-muted-foreground hover:text-foreground"> Forum </Link> <span className="text-muted-foreground">/</span> <span className="font-medium"> {
  category.name 
}</span> </div> <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4"> <div className="flex items-center gap-4"> <div className="p-3 bg-zion-purple/10 rounded-full"> <IconComponent className="h-8 w-8 text-zion-purple"/> </div> <div> <h1 className="text-3xl font-bold"> {
  category.name 
}</h1> <p className="text-muted-foreground mt-1"> {
  category.description 
}</p> </div> </div> {
  canCreatePost && (<Button asChild> <Link to= {
  user ? `/community/create?category=$ {
  categoryId 
}` : `/login?next=/community/create?category=$ {
  categoryId 
}` 
}> Create New Post </Link> </Button>) 
}</div> <div className="mb-6"> <div className="relative"> <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"/> <Input placeholder=" Search posts in this category..."className="pl-10"value= {
  searchQuery 
}onChange= {
  (e) => setSearchQuery (e.target.value) 
}/> </div> </div> {
  posts.length > 0 ? (<div className="space-y-4"> {
  filteredPosts.map ( (post) => (<PostCard key= {
  post.id 
}post= {
  post 
}/>) ) 
}</div>) : (<div className="text-center py-16"> <h2 className="text-xl font-medium mb-2">No posts yet</h2> <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p> {
  canCreatePost && (<Button asChild> <Link to= {
  user ? `/community/create?category=$ {
  categoryId 
}` : `/login?next=/community/create?category=$ {
  categoryId 
}` 
}> Create New Post </Link> </Button>) 
}</div>) 
}</div> </AppLayout>) 
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
<<<<<<< HEAD
          <span className="font-medium">{category.name}</span>;
        </div>;
=======
          <span className="font-medium">{category && category.name}</span>;
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
          <div className="flex items-center gap-4">;
            <div className="p-3 bg-zion-purple/10 rounded-full">;
              <IconComponent className="h-8 w-8 text-zion-purple" />;
            </div>;
            <div>;
<<<<<<< HEAD
              <h1 className="text-3xl font-bold">{category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category.description}</p>;
            </div>;
          </div>;
=======
              <h1 className="text-3xl font-bold">{category && category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category && category.description}</p>;
            </div>;
          </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {canCreatePost && (;
            <Button asChild>;
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>;
<h1 className="text-3xl font-bold">{category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category.description}</p>;
            </div>;
          </div>;
          ;
          {canCreatePost && (;
            <Button asChild>;
              <Link to={user ? `/community/create?category=${categoryId}` :`/login?next=/community/create?category=${categoryId}`}>;
                Create New Post;
              </Link>;
            </Button>;
          )}
        </div>;
<<<<<<< HEAD
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />;
            <Input;
              placeholder="Search posts in this category...";
              className="pl-10";
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
=======

        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />;

            <Input;
              placeholder="Search posts in this category...";
              className="pl-10";

              value={searchQuery}

<<<<<<< HEAD
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
              value={searchQuery}
=======
              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
        </div>;

        {posts && posts.length > 0 ? (;
          <div className="space-y-4">;
            {filteredPosts && filteredPosts.map((post) => (;
              <PostCard key={post && post.id} post={post} />;
            ))}
          </div>;
        ) : (;
          <div className="text-center py-16">;
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>;
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>;

            {canCreatePost && (;
              <Button asChild>;
                <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>;
                  Create New Post;
                </Link>;
              </Button>;

            )}
          </div>;
        )}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </AppLayout>;
  );
}
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  "Megaphone": Megaphone;
}
;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

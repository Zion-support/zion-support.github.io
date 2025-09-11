




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
<<<<<<< HEAD
<<<<<<< HEAD
// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.";



    adminOnly: false

    icon: "Briefcase"
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone,
  Search
} from "@/components/icons",

// Mock category data
const categoriesInfo: Record<string ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",


<<<<<<< HEAD
<<<<<<< HEAD
    adminOnly: false,
    icon: "Briefcase"
  },
    adminOnly: false,
    icon: "Briefcase"
  },
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    adminOnly: false,
    icon: "Briefcase"
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  "project-help": {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"
<<<<<<< HEAD

<<<<<<< HEAD
  }
  "ai-tools": {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  "ai-tools": {


    icon: "Code"
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },
  "ai-tools": {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  "feedback": {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
<<<<<<< HEAD

<<<<<<< HEAD
  },


  }
  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  "announcements": {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true

    icon: "Megaphone"
  }
<<<<<<< HEAD


},



=======
}
},

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
const categories_info: Record < string, ForumCategoryInfo> = {
  "getting - hired": {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  }
  "project - help": {
    id: "project - help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    admin_only: false,
    icon: "MessageSquare";
  }
  "ai - tools": {
    id: "ai - tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.";
    admin_only: false,
    icon: "Code";
  }
  "feedback": {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    admin_only: false,
    icon: "FileText";
  }
  "announcements": {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    admin_only: true,
    icon: "Megaphone";
  }
}
;
// Mock data for posts by category;
const postsByCategory: Record < string, ForumPost[]> = {
  "getting - hired": [;
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
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    {
      id: "6"
      title: "Portfolio pieces that clients actually care about"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author_id: "user6",
      author_name: "James Wilson",
      category_id: "getting - hired",
      tags: ["portfolio", "projects", "examples"];
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      createdAt: "2025-04-07T11:30:00Z"
      updatedAt: "2025-04-07T11:30:00Z"
      upvotes: 19
      downvotes: 2
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    },
    {
      id: "6",
      title: "Portfolio pieces that clients actually care about",
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",
      authorId: "user6",
      authorName: "James Wilson",
      categoryId: "getting-hired",
      tags: ["portfolio", "projects", "examples"],
      createdAt: "2025-04-07T11:30:00Z",
      updatedAt: "2025-04-07T11:30:00Z",
      upvotes: 19,
      downvotes: 2,
<<<<<<< HEAD
<<<<<<< HEAD
=======

      replyCount: 6
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      replyCount: 6
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ];
  "project - help": [;
    {
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
      replyCount: 6
    }
  ],
  "project-help": [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "5",
      title: "How to handle client scope creep?",
      content: "I'm working on a project where the client keeps adding requirements...",
<<<<<<< HEAD
<<<<<<< HEAD
      reply_count: 7,
      is_answered: true;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author_id: "user5",
      author_name: "David Lin",
      category_id: "project - help",
      tags: ["client - management", "scope", "projects"];
      created_at: "2025 - 04 - 08T10:20:00Z",
      updated_at: "2025 - 04 - 08T10:20:00Z",
      upvotes: 24,
      downvotes: 0,

      replyCount: 7,
<<<<<<< HEAD

      isAnswered: true

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      isAnswered: true

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ];
  "ai - tools": [;
    {
<<<<<<< HEAD

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
      updated_at: "2025 - 04 - 01T12:00:00Z",
      upvotes: 48,
      downvotes: 2,
      reply_count: 12,
      is_answered: true,
      is_featured: true;
    }
<<<<<<< HEAD
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
  "ai-tools": [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      id: "1",
<<<<<<< HEAD
      title: "Best practices for AI model fine-tuning",
      content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
      authorId: "user1",
      authorName: "Alex Johnson",
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      authorRole: "Verified Talent",
      categoryId: "ai-tools",
      tags: ["machine-learning", "fine-tuning", "gpt"],
      createdAt: "2025-04-01T12:00:00Z",
      updatedAt: "2025-04-01T12:00:00Z",
      upvotes: 48,
      downvotes: 2,
      replyCount: 12,
      isAnswered: true,
      isFeatured: true
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "7",
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",
<<<<<<< HEAD
<<<<<<< HEAD
      reply_count: 9;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author_id: "user7",
      author_name: "Lisa Park",
      category_id: "ai - tools",
      tags: ["embeddings", "vectors", "similarity - search"];
      created_at: "2025 - 04 - 05T16:40:00Z",
      updated_at: "2025 - 04 - 05T16:40:00Z",
      upvotes: 31,
      downvotes: 0,
<<<<<<< HEAD


      replyCount: 9

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      replyCount: 9

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ];
  "feedback": [;
    {
<<<<<<< HEAD

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
      updated_at: "2025 - 04 - 09T18:45:00Z",
      upvotes: 12,
      downvotes: 1,
      reply_count: 3;
    }
<<<<<<< HEAD
      authorId: "user7",
      authorName: "Lisa Park",
      categoryId: "ai-tools",
      tags: ["embeddings", "vectors", "similarity-search"],
      createdAt: "2025-04-05T16:40:00Z",
      updatedAt: "2025-04-05T16:40:00Z",
      upvotes: 31,
      downvotes: 0,
      replyCount: 9
    }
  ],
  "feedback": [
    {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      id: "4",
      title: "Feature request: Team collaboration tools",
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      id: "8",
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",
<<<<<<< HEAD
<<<<<<< HEAD
      reply_count: 5;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      author_id: "user8",
      author_name: "Ryan Mitchell",
      category_id: "feedback",
      tags: ["matching", "jobs", "algorithm"];
      created_at: "2025 - 04 - 04T08:10:00Z",
      updated_at: "2025 - 04 - 04T08:10:00Z",
      upvotes: 17,
      downvotes: 3,
<<<<<<< HEAD


      replyCount: 5

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      replyCount: 5

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ];
  "announcements": [;
    {
<<<<<<< HEAD


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
const postsByCategory: Record<string, ForumPost[]> = {;
  "getting-hired": [;
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
    };
    {;
      id: "6",;
      title: "Portfolio pieces that clients actually care about",;
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
  "ai-tools": [;
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
      id: "7",;
      title: "Comparing different vector embedding models",;
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
      id: "8",;
      title: "Suggestion for improving the jobs matching algorithm",;
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
      title: "Platform Update: New AI Matching Algorithm",;
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",;
      authorId: "admin1",;
      authorName: "Zion Team",;
      authorRole: "Admin",;
      categoryId: "announcements",;
=======
      id: "9"
      title: "Platform Update: New AI Matching Algorithm"
      content: "We're excited to announce the launch of our new and improved AI matching algorithm..."
      authorId: "admin1"
      authorName: "Zion Team"
      authorRole: "Admin"
      categoryId: "announcements"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      title: "Maintenance Scheduled: April 15th",;
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
<<<<<<< HEAD
  ];
};
const iconMap = {;

=======
  ]
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  ];
}
;
const icon_map = {
  "Briefcase": Briefcase;
  "MessageSquare": MessageSquare;
  "Code": Code;
  "FileText": FileText;
  "Megaphone": Megaphone;
};
=======

  "Megaphone": Megaphone;
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
<<<<<<< HEAD
  if (!categoryId || !categoriesInfo[categoryId]) {;
  ]
},


<<<<<<< HEAD
      authorId: "user8",
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
      id: "9",
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",
      authorId: "admin1",
      authorName: "Zion Team",
      authorRole: "Admin",
      categoryId: "announcements",
      tags: ["update", "matching", "algorithm"],
      createdAt: "2025-04-02T15:00:00Z",
      updatedAt: "2025-04-02T15:00:00Z",
      upvotes: 42,
      downvotes: 0,
      replyCount: 11,
      isPinned: true
    },
    {
      id: "10",
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...",
      authorId: "admin1",
      authorName: "Zion Team",
      authorRole: "Admin",
      categoryId: "announcements",
      tags: ["maintenance", "downtime"],
      createdAt: "2025-04-10T09:00:00Z",
      updatedAt: "2025-04-10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      replyCount: 2,
      isPinned: true
    }
  ]
},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  if (!categoryId || !categoriesInfo[categoryId]) {;

=======
  ]
},

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},

export default function ForumCategoryPage() {
  // useParams is typed as `any` in this environment due to missing type
<<<<<<< HEAD
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      <AppLayout>
        <div className="container py-8">
          <h1>Category not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
=======
      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] |MessageSquare;
  const posts = postsByCategory[categoryId] |[];
<<<<<<< HEAD
=======
    );
  }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  
  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
<<<<<<< HEAD

<<<<<<< HEAD
    : posts;
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" |(user?.userType === 'admin' |user?.role === 'admin');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    : posts;
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" |(user?.userType === 'admin' |user?.role === 'admin');
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    : posts,
  
  // For announcements, check if user is admin
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin'),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];

=======
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      title: "How to build an effective AI talent profile?",;
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
      title: "Portfolio pieces that clients actually care about",;
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
      title: "Looking for feedback on my automated testing approach",;
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
      title: "How to handle client scope creep?",;
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
      title: "Best practices for AI model fine-tuning",;
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
      title: "Comparing different vector embedding models",;
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
      title: "Feature request: Team collaboration tools",;
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
      title: "Suggestion for improving the jobs matching algorithm",;
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
      title: "Platform Update: New AI Matching Algorithm",;
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
      title: "Maintenance Scheduled: April 15th",;
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
<<<<<<< HEAD
  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Filter posts based on search query;
  const filteredPosts = searchQuery;
    ? posts && posts.filter(post => ;
        post && post.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.content.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
        post && post.tags.some(tag => tag && tag.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()));
      );
    : posts;
<<<<<<< HEAD
<<<<<<< HEAD
  // For announcements, check if user is admin;
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // For announcements, check if user is admin;
  const canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AppLayout>;
      <SEO
        title={`${category && category.name} | Community Forum | Zion AI Marketplace`}
        description={category && category.description}
        keywords={`community, forum, ${category && category.id}, discussion, AI marketplace, questions, answers`}
      />;
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
<<<<<<< HEAD
<<<<<<< HEAD
          <span className="font-medium">{category.name}</span>;
        </div>;
=======
          <span className="font-medium">{category && category.name}</span>;
        </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <span className="font-medium">{category && category.name}</span>;
        </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;
          <div className="flex items-center gap-4">;
            <div className="p-3 bg-zion-purple/10 rounded-full">;
              <IconComponent className="h-8 w-8 text-zion-purple" />;
            </div>;
            <div>;
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text-3xl font-bold">{category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category.description}</p>;
            </div>;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h1 className="text-3xl font-bold">{category && category.name}</h1>;
              <p className="text-muted-foreground mt-1">{category && category.description}</p>;
            </div>;
          </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {canCreatePost && (;
            <Button asChild>;
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>;
                Create New Post;
              </Link>;
            </Button>;
          )}
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />;
            <Input;
              placeholder="Search posts in this category...";
              className="pl-10";
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="mb-6">;
          <div className="relative">;
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />;

            <Input;
              placeholder="Search posts in this category...";
              className="pl-10";


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                  Create New Post;
                </Link>;
              </Button>;

            )}
          </div>;
        )}
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      </div>
    </AppLayout>
  )
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </AppLayout>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  "Megaphone": Megaphone;
}
;
<<<<<<< HEAD



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

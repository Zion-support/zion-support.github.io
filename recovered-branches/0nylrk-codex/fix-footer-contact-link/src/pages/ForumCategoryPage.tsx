

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

    adminOnly: false

    adminOnly: false;
"
    icon: "Briefcase"
  }    adminOnly: false,
    icon: "Briefcase"
  },
  "project-help": {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"    }
    {
      id: "6"
      title: "Portfolio pieces that clients actually care about"
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...";
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
      isFeatured: true;
    },

<<<<<<< HEAD
=======
      id: "6",""
      title: "Portfolio pieces that clients actually care about",""
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",""
      authorId: "user6",""
      authorName: "James Wilson",""
      tags: ["portfolio", "projects", "examples"],""
      createdAt: "2025-04-07T11:30:00Z",""
      updatedAt: "2025-04-07T11:30:00Z","
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      id: "6",
      title: "Portfolio pieces that clients actually care about",
      content: "After submitting dozens of applications, I've found that these types of projects tend to get the most attention...",
      authorId: "user6",
      authorName: "James Wilson",
      categoryId: "getting-hired",
      tags: ["portfolio", "projects", "examples"],
<<<<<<< HEAD

      createdAt: "2025-04-07T11:30:00Z",
      updatedAt: "2025-04-07T11:30:00Z",
      upvotes: 19,
      downvotes: 2,

      replyCount: 6
    }
  ];
  "project - help": [;
    {

      id: "7",
      title: "Comparing different vector embedding models",
      content: "I've been experimenting with these different embedding models and here are my findings...",
      author_id: "user7",
      author_name: "Lisa Park",
      category_id: "ai - tools",
      tags: ["embeddings", "vectors", "similarity - search"];
      created_at: "2025 - 04 - 05T16:40:00Z",
      updated_at: "2025 - 04 - 05T16:40:00Z",
      upvotes: 31,
      downvotes: 0,

      replyCount: 9    {
      id: "8",
      title: "Suggestion for improving the jobs matching algorithm",
      content: "I think the job matching could be improved by considering these additional factors...",
      author_id: "user8",
      author_name: "Ryan Mitchell",
      category_id: "feedback",
      tags: ["matching", "jobs", "algorithm"];
      created_at: "2025 - 04 - 04T08:10:00Z",
      updated_at: "2025 - 04 - 04T08:10:00Z",

      upvotes: 17,
      downvotes: 3,

      replyCount: 5  "Briefcase": Briefcase;
  "MessageSquare": MessageSquare;
  "Code": Code;
  "FileText": FileText;              value={searchQuery}
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
              value={searchQuery}
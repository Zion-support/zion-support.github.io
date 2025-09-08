

import { Link } from "react-router-dom",

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

import { useAuth } from "@/hooks/useAuth",
import {};

  MessageSquare;
  Briefcase;
  Code;

    icon: "Briefcase"
  }
import { ForumCategory, ForumCategoryInfo } from "@/types/community",  {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"import { Link } from './react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from '@/components / icons';

import { ForumCategory, ForumCategoryInfo } from '@/types / community';
const categories: ForumCategoryInfo[] = [;
  {"
    id: "getting - hired","
    name: "Getting Hired","
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,"
    icon: "Briefcase";
  }
  {"
    id: "project - help","
    name: "Project Help","

    description: "Get help with your ongoing projects and collaboration.",
    admin_only: false,"
    icon: "MessageSquare";
  }

    description: "Share your feedback and suggest new features.",
    admin_only: false,"
    icon: "FileText";
  }
  {"
    id: "announcements","
    name: "Announcements","
    description: "Official announcements from the Zion team.",
    admin_only: true,"
    icon: "Megaphone";
  }
];

  Briefcase;
  MessageSquare;
  Code;
  FileText;

export default ForumCategories;

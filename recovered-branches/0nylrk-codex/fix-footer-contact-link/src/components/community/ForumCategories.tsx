

import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import {
  MessageSquare;
  Briefcase;
  Code;
  FileText;
  Megaphone
} from "@/components/icons",
import { ForumCategory, ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired";
    name: "Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false;

    icon: "Briefcase"
  };
  {
    id: "project-help";
    name: "Project Help";
    description: "Get help with your ongoing projects and collaboration.";
    adminOnly: false;
    icon: "MessageSquare"
  };
  {

    id: "ai-tools";
    name: "AI Tools Discussion";
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false;

    icon: "Code"
  };
  {
    id: "feedback";
    name: "Feedback & Feature Requests";
    description: "Share your feedback and suggest new features.";
    adminOnly: false;
    icon: "FileText"
  };
  {
    id: "announcements";
    name: "Announcements";
    description: "Official announcements from the Zion team.";
    adminOnly: true;
    icon: "Megaphone"
  }
];


const iconMap = null;


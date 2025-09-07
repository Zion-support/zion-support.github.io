import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
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
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
    icon: "Briefcase"
  }
import { ForumCategory, ForumCategoryInfo } from "@/types/community",  {
  {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"
  }
  {

    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false

    icon: "Code"
  }
  {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"
  }
  {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
  }
],

const iconMap = $2;
  MessageSquare,
  Code,
  FileText,
  Megaphone
    icon: "MessageSquare"import { Link } from './react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components / ui / card';
import { use_auth } from '@/hooks / use_auth';
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from '@/components / icons';
import { ForumCategory, ForumCategoryInfo } from '@/types / community';
const categories: ForumCategoryInfo[] = [;
  {
    id: "getting - hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  }
  {
    id: "project - help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    admin_only: false,
    icon: "MessageSquare";
  }
  {
    id: "ai - tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.";
    admin_only: false,
    icon: "Code";
  }
  {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    admin_only: false,
    icon: "FileText";
  }
  {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    admin_only: true,
    icon: "Megaphone";
  }
];
;
const icon_map = {
  Briefcase;
  MessageSquare;
  Code;
  FileText;

export default ForumCategories;
},

export const ForumCategories = () => {
  const { user } = useAuth($2);
  const isAdmin = $2;
  const visibleCategories = categories.filter($2);
  return (
    <div className = $2;
        return (
          <Link key = $2;
export default ForumCategories,

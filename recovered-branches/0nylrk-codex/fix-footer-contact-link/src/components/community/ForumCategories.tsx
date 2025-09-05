
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
=======
import { Link } from &quot;react-router-dom&quot;;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from &quot;@/components/ui/card&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone
<<<<<<< HEAD
} from "@/components/icons",
import { ForumCategory, ForumCategoryInfo } from "@/types/community",
=======
} from &quot;@/components/icons&quot;;
import { ForumCategory, ForumCategoryInfo } from &quot;@/types/community&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

const categories: ForumCategoryInfo[] = [
  {
    id: &quot;getting-hired&quot;,
    name: &quot;Getting Hired&quot;,
    description: &quot;Tips, strategies, and questions about getting hired on the platform.&quot;,
    adminOnly: false,
    icon: &quot;Briefcase&quot;
  },
  {
    id: &quot;project-help&quot;,
    name: &quot;Project Help&quot;,
    description: &quot;Get help with your ongoing projects and collaboration.&quot;,
    adminOnly: false,
    icon: &quot;MessageSquare&quot;
  },
  {
    id: &quot;ai-tools&quot;,
    name: &quot;AI Tools Discussion&quot;,
    description: &quot;Discuss AI tools, frameworks, and best practices.&quot;,
    adminOnly: false,
    icon: &quot;Code&quot;
  },
  {
    id: &quot;feedback&quot;,
    name: &quot;Feedback & Feature Requests&quot;,
    description: &quot;Share your feedback and suggest new features.&quot;,
    adminOnly: false,
    icon: &quot;FileText&quot;
  },
  {
    id: &quot;announcements&quot;,
    name: &quot;Announcements&quot;,
    description: &quot;Official announcements from the Zion team.&quot;,
    adminOnly: true,
    icon: &quot;Megaphone&quot;
  }
],

const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
},

export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
<<<<<<< HEAD
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
=======
    <div className=&quot;grid gap-4 md:grid-cols-2 lg:grid-cols-3&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
          <Link key={category.id} to={`/community/category/${category.id}`}>
            <Card className=&quot;h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer&quot;>
              <CardHeader className=&quot;flex flex-row items-center gap-4&quot;>
                <div className=&quot;p-2 bg-zion-purple/10 rounded-full&quot;>
                  <Icon className=&quot;h-6 w-6 text-zion-purple&quot; />
                </div>
                <CardTitle className=&quot;text-xl&quot;>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
=======
import { Link } from "react-router-dom",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  MessageSquare,;
  Briefcase,;
  Code,;
  FileText,;
  Megaphone;
} from "@/components/icons",;
import { ForumCategory, ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
  },;
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
  },;
  {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
],;
const iconMap = {;
  Briefcase,;
  MessageSquare,;
  Code,;
  FileText,;
  Megaphone;
},;
export const ForumCategories = () => {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  const visibleCategories = categories.filter(;
    category => !category.adminOnly || isAdmin;
  ),;
  return (;
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories.map((category) => {;
        const Icon = iconMap[category.icon as keyof typeof iconMap],;
        return (;
          <Link key={category.id} to={`/community/category/${category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
              <CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
                <CardTitle className="text-xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>;
        );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      })}
    </div>;
  );
};
export default ForumCategories;
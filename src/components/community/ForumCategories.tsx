<<<<<<< HEAD
{
    id: "feedback"",
    name: "Feedback & Feature Requests"",
    description: "Share your feedback and suggest new features."",
    adminOnly: false,
    icon: "FileText""
  },
  {
    id: "announcements"",
    name: "Announcements"",
    description: "Official announcements from the Zion team."",
    adminOnly: true,
    icon: "Megaphone"",
const categories: ForumCategoryInfo[] = [;,
  {
    id: "getting - hired","
    name: "Getting Hired","
    description: "Tips, strategies, and questions about getting hired on the platform.";
    admin_only: false,
    icon: "Briefcase";
  }
export const ForumCategories = () =>: any {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
  const visible_categories = categories.filter (
    category => !category.admin_only ||,  is_admin);
  return (
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;
      {visible_categories.map ((category) => {
        const Icon = icon_map[category.icon as keyof typeof icon_map]; return (,
          <Link key={category.id} href={`/community / category/${category.id}`} />;`
            <Card className="h - full transition - all hover: shadow - md hover:border - zion - purple / 50 cursor - pointer">;
              <CardHeader className="flex flex - row items - center gap - 4">;
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;
                  <Icon className="h - 6 w - 6 text - zion - purple" />;
                </div>;
                <CardTitle className="text - xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text - base">{category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>);
      })}
    </div>);
}
],
=======
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community",
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false,
    icon: "Briefcase"
  },
  {
    id: "project-help",
    name: "Project Help",
    description: "Get help with your ongoing projects and collaboration.",
    adminOnly: false,
    icon: "MessageSquare"
  },
  {
    id: "ai-tools",
    name: "AI Tools Discussion",
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false,
    icon: "Code"
  },
  {
    id: "feedback",
    name: "Feedback & Feature Requests",
    description: "Share your feedback and suggest new features.",
    adminOnly: false,
    icon: "FileText"
  },
  {
    id: "announcements",
    name: "Announcements",
    description: "Official announcements from the Zion team.",
    adminOnly: true,
    icon: "Megaphone"
  }
],

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone
},
<<<<<<< HEAD
export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin','
  const visibleCategories = categories.filter(
    category => !category.adminOnly ||,  isAdmin
  ),
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">"
      {visibleCategories.map((category) => {,
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
          <Link key={category.id} href={`/community/category/${category.id}`} />`
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">"
              <CardHeader className="flex flex-row items-center gap-4">"
                <div className="p-2 bg-zion-purple/10 rounded-full">"
                  <Icon className="h-6 w-6 text-zion-purple" />"
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>"
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{category.description}</CardDescription>"
=======

export const ForumCategories = () => {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',

  const visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{category.description}</CardDescription>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
              </CardContent>
            </Card>
          </Link>
        )
<<<<<<< HEAD
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin''
export default ForumCategories;
;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
<<<<<<< HEAD
import { ForumCategoryInfo } from "@/types/community",;,
const categories: ForumCategoryInfo[] = [;,
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false,;
    icon: "Briefcase";
  };
=======
import { ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;
    description: "Tips, strategies, and questions about getting hired on the platform.",;
    adminOnly: false,;
    icon: "Briefcase";
  },;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  {;
    id: "project-help",;
    name: "Project Help",;
    description: "Get help with your ongoing projects and collaboration.",;
    adminOnly: false,;
    icon: "MessageSquare";
<<<<<<< HEAD
  };
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false,;
    icon: "Code";
  };
=======
  },;
  {;
    id: "ai-tools",;
    name: "AI Tools Discussion",;
    description: "Discuss AI tools, frameworks, and best practices.",;
    adminOnly: false,;
    icon: "Code";
  },;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  {;
    id: "feedback",;
    name: "Feedback & Feature Requests",;
    description: "Share your feedback and suggest new features.",;
    adminOnly: false,;
    icon: "FileText";
<<<<<<< HEAD
  };
=======
  },;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  {;
    id: "announcements",;
    name: "Announcements",;
    description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
<<<<<<< HEAD
];
const iconMap = {;
  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone;
};
export const ForumCategories = () => {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const visibleCategories = categories && categories.filter(;
    category => !category && category.adminOnly || isAdmin;
  );
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;
      {visibleCategories && visibleCategories.map((category) => {;,
        const Icon = iconMap[category && category.icon as keyof typeof iconMap];        return (
          <Link key={category && category.id} href={`/community/category/${category && category.id}`} />;`
            <Card className="h-full transition-all hover: shadow-md hover:border-zion-purple/50 cursor-pointer">;
=======
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
          <Link key={category.id} href={`/community/category/${category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
              <CardHeader className="flex flex-row items-center gap-4">;
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
<<<<<<< HEAD
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
=======
                <CardTitle className="text-xl">{category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category.description}</CardDescription>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}
    </div>;
  );
};
<<<<<<< HEAD
export default ForumCategories;
export default ForumCategories;
export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
export default ForumCategories;
}}}}))
=======
export default ForumCategories;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58

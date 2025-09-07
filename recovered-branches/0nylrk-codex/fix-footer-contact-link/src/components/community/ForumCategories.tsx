
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
<<<<<<< HEAD
    id: "getting-hired";
    name: "Getting Hired";
    description: "Tips, strategies, and questions about getting hired on the platform.",
    adminOnly: false;
=======
    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.";
    adminOnly: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    icon: "Briefcase"
  }
  {
<<<<<<< HEAD
    id: "project-help";
    name: "Project Help";
    description: "Get help with your ongoing projects and collaboration.";
    adminOnly: false;
=======
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    icon: "MessageSquare"
  }
  {
<<<<<<< HEAD
    id: "ai-tools";
    name: "AI Tools Discussion";
    description: "Discuss AI tools, frameworks, and best practices.",
    adminOnly: false;
=======
    id: "ai-tools"
    name: "AI Tools Discussion"
    description: "Discuss AI tools, frameworks, and best practices.";
    adminOnly: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    icon: "Code"
  }
  {
<<<<<<< HEAD
    id: "feedback";
    name: "Feedback & Feature Requests";
    description: "Share your feedback and suggest new features.";
    adminOnly: false;
=======
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    icon: "FileText"
  }
  {
<<<<<<< HEAD
    id: "announcements";
    name: "Announcements";
    description: "Official announcements from the Zion team.";
    adminOnly: true;
    icon: "Megaphone"
  }
];

const iconMap = null;
=======
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
  }
];
const iconMap = {
  Briefcase;
  MessageSquare;
  Code;
  FileText;
  Megaphone
}
export const ForumCategories = () => {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const visibleCategories = categories.filter(
    category => !category.adminOnly |isAdmin
  );
  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap]
        return (
          <Link key={category.id} to={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
export default ForumCategories;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5

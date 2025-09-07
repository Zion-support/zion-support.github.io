



import { Link } from "react-router-dom",""
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";""
import { useAuth } from "@/hooks/useAuth";""
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",""
import { useAuth } from "@/hooks/useAuth","
import {
  // TODO: Implement
}
  MessageSquare;
  Briefcase;
  Code;
  FileText;
  Megaphone;"
} from "@/components/icons",""
import { ForumCategory, ForumCategoryInfo } from "@/types/community";"
const categories: ForumCategoryInfo[] = [
  {

"
    icon: "Briefcase""
  }"
import { ForumCategory, ForumCategoryInfo } from "@/types/community","]
  {"
    id: "getting-hired",""
    name: "Getting Hired",""
    description: "Tips, strategies, and questions about getting hired on the platform.","
    adminOnly: false,"
  },

    id: "project-help"","
  name: "Project Help"""
    description: "Get help with your ongoing projects and collaboration."",
  adminOnly: false;"
    icon: "MessageSquare""
    id: "ai-tools",""
    name: "AI Tools Discussion",""
    description: "Discuss AI tools, frameworks, and best practices.","
    icon: "Code""


    id: "feedback"","
  name: "Feedback & Feature Requests"""
    description: "Share your feedback and suggest new features."",
    icon: "FileText""


    id: "announcements"","
  name: "Announcements"""
    description: "Official announcements from the Zion team."",
  adminOnly: true;"
    icon: "Megaphone""
import {Link} from "react-router-dom";""
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";""
import {useAuth} from "@/hooks/useAuth";""
import {MessageSquare, Briefcase, Code, FileText, Megaphone} from "@/components/icons";""
import {ForumCategory, ForumCategoryInfo} from "@/types/community";"
const iconMap = {
  Briefcase,
  MessageSquare,
  Code,
  FileText,
  Megaphone;


  return ("
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">"
</div>
          <Link key={category.id} to={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">"
              <CardHeader className="flex flex-row items-center gap-4">"
                <div className="p-2 bg-zion-purple/10 rounded-full">"
</div>"
                  <Icon className="h-6 w-6 text-zion-purple" />"

                <CardTitle className="text-xl">{category.name}"
              
              <CardContent>
                <CardDescription className="text-base">{category.description}"
              
            
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">;"
</div>`;
          <Link key={category && category.id} to={`/community/category/${category && category.id}`}>;
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">;"
              <CardHeader className="flex flex-row items-center gap-4">;"
                <div className="p-2 bg-zion-purple/10 rounded-full">;"
                  <Icon className="h-6 w-6 text-zion-purple" />;"

                </div>;"
                <CardTitle className="text-xl">{category && category.name};"
              ;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description};"
    <div className="grid gap - 4 md: grid - cols - 2 lg:grid - cols - 3">;"
          <Link key={category.id} to={`/community / category/${category.id}`}>;
            <Card className="h - full transition - all hover:shadow - md hover:border - zion - purple / 50 cursor - pointer">;"
              <CardHeader className="flex flex - row items - center gap - 4">;"
                <div className="p - 2 bg - zion - purple / 10 rounded - full">;"
                  <Icon className="h - 6 w - 6 text - zion - purple" />;"

                <CardTitle className="text - xl">{category.name};"
                <CardDescription className="text - base">{category.description};"
            ;)
          );
    </div>);"
          <Link key={category.id} to={`/community/category/${category.id}`}>;

                <CardTitle className="text-xl">{category.name};"
                <CardDescription className="text-base">{category.description};"
    </div>;]"`;
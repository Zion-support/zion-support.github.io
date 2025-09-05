import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth",
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community",
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
  const _visibleCategories = categories.filter(
    category => !category.adminOnly || isAdmin
  ),

  return (
    <div className="grid gap-4 md: grid-cols-2 lg:grid-cols-3">      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap],
        return (
          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className=&quot;h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer&quot;>
              <CardHeader className=&quot;flex flex-row items-center gap-4&quot;>
                <div className=&quot;p-2 bg-zion-purple/10 rounded-full&quot;>
                  <Icon className=&quot;h-6 w-6 text-zion-purple&quot; />
                </div>
                <CardTitle className=&quot;text-xl&quot;>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=&quot;text-base&quot;>{category.description}</CardDescription>
  return (_<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {_visibleCategories.map((category) => {
        const _Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <Link key={category.id} href={_`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                <CardTitle className="text-xl">{_category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{_category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
},

export default ForumCategories,

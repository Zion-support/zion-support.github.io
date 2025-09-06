
=======
const categories: ForumCategoryInfo[] = [
  {
    id: "getting-hired",
    name: "Getting Hired",
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false,
    icon: "Briefcase"
  }
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'

  {

    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }

  {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"

  {
    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"

  {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"

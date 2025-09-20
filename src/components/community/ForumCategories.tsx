import React from "react";
import { ForumCategoryInfo } from "@/types/community";

export default function ForumCategories() {const categories: ForumCategoryInfo[] = [
{,
id: "1",
name: "General Discussion",;
description: "General topics and discussions",;
postCount: 150; adminOnly: false;
postCount: 89;
adminOnly: false;
interface ForumCategoriesProps {categories: Array<{}
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";,
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from "lucide-react";
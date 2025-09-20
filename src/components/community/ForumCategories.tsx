import React from "react";
import { ForumCategoryInfo } from "@/types/community";

export default function ForumCategories() {const categories: ForumCategoryInfo[] = [
{,
id: "1",
<<<<<<< HEAD
name: "General Discussion";
description: "General topics and discussions";
postCount: 150; adminOnly: false;,
=======
name: "General Discussion",;
description: "General topics and discussions",;
postCount: 150; adminOnly: false;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
icon: "message-circle",
lastPost: {,
title: "Welcome to the community!",
author: "Admin",
date: "2024-01-15"}
},
{id: "2",
name: "Technical Support",
description: "Get help with technical issues",
<<<<<<< HEAD
postCount: 89;,
adminOnly: false;,
=======
postCount: 89;
adminOnly: false;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
icon: "code",
lastPost: {,
title: "API integration question",
author: "Developer123",
date: "2024-01-14"}
}
];

return (
<div className="space-y-4">
{categories.map((category) => (
<div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
<h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>
<p className="text-zion-slate-light mb-2">{category.description}</p>
<div className="flex justify-between text-sm text-zion-slate-light">
<span>{category.postCount} posts</span>
{category.lastPost && (
<span>Last: {category.lastPost.title} by {category.lastPost.author}</span>
)}

<<<<<<< HEAD
interface ForumCategoriesProps {
categories: Array<{,
id: string; name: string; description: string; postCount: number}>
=======
interface ForumCategoriesProps {categories: Array<{,}
id: string; name: string; description: string; postCount: number}>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}

const ForumCategories: React.FC<ForumCategoriesProps> = ({ categories }) => {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{categories.map((category) => (
<div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
<h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
<p className="text-zion-slate-light mb-4">{category.description}</p>
<div className="flex justify-between items-center">
<span className="text-sm text-zion-slate-light">
{category.postCount} posts,
<<<<<<< HEAD
</span>
=======
</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
</div>
))}
</div>
);
};

export default ForumCategories;
}
}
<//div><///div>)))
<<<<<<< HEAD
import Link from "next/link",
import { Card, CardContent, CardHeader, CardTitleCardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileTextMegaphone } from 'lucide-react';
=======
import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";,
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from "lucide-react";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { ForumCategoryInfo } from "@/types/community";
const categories: ForumCategoryInfo[] = [
{
}
import React from 'react';
import { ForumCategoryInfo } from '@/types/community';

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

interface ForumCategoriesProps {
  categories: Array<{
    id: string;
    name: string;
    description: string;
    postCount: number;
  }>;
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
              {category.postCount} posts
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumCategories;
}

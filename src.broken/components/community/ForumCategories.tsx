import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community";

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

const iconMap = {
  Briefcase,
  MessageSquare,
  Briefcase,
  Code,
  FileText,
  Megaphone
} from "lucide-react";
import { ForumCategory, ForumCategoryInfo } from "@/types/community";

    title: string;
    author: string;
    date: string
}}
;
export { function };
export default function ForumCategories(...args[]):  {

  const categories: ForumCategoryInfo[] = [;
    {

      id: '1',
      name: 'General Discussion',
      description: 'General topics and discussions about technology, business, and innovation',
      postCount: 150,
      adminOnly: false,
      icon: 'message-circle',
      lastPost: {

        title: 'Welcome to the Zion Tech Group community!',
        author: 'Admin',
        date: '2024-01-15'

  console.log('ForumCategories visibleCategories:', visibleCategories);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <h2>DEBUG: Forum Categories Section</h2>
      {visibleCategories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <Link key={category.id} href={`/community/category/${category.id}`} passHref>
            <a className="block h-full"> {/* Make the anchor a block element and take full height */}
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
            </a>
          </Link>
        );
      })}
    </div>
  );
};

              {category.lastPost && (;"
                <div className="pt-4 border-t border-white/10">"
                  <p className="text-xs text-zion-slate-light mb-1">Latest Post:</p>"
                  <p className="text-sm text-white font-medium truncate">
                    {category.lastPost.title}
                  </p>"
                  <p className="text-xs text-zion-slate-light">
                    by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>;
          ))}
        </div>

        {/* CTA Section */}"
        <div className="text-center mt-16">"
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">"
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Conversation
            </h3>"
            <p className="text-zion-slate-light mb-6">
              Start contributing to discussions, ask questions, and share your expertise with the community.</p>"
            <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-zion-blue-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
              Start a Discussion
            </button>;
          </div>;
        </div>;
      </div>;
    </section>;
  )}
'"
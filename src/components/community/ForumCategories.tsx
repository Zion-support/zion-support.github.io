  {

    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform."
    adminOnly: false
    icon: "Briefcase"
  }
import { ForumCategoryInfo } from "@/types/community",
  {
    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false
    icon: "MessageSquare"
  {    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false
    icon: "FileText"

  },

  {
    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true
    icon: "Megaphone"
          <Link key={category.id} href={`/community/category/${category.id}`}>
            <Card className="h-full transition-all hover:shadow-md hover:border-zion-purple/50 cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-zion-purple/10 rounded-full">
                  <Icon className="h-6 w-6 text-zion-purple" />
                </div>
                {category.adminOnly && (
                  <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                    Admin Only
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                {category.name}
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                  {category.postCount} posts
                </span>
              </div>
              
              {category.lastPost && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-zion-slate-light mb-1">Latest Post:</p>
                  <p className="text-sm text-white font-medium truncate">
                    {category.lastPost.title}
                  </p>
                  <p className="text-xs text-zion-slate-light">
                    by {category.lastPost.author} • {new Date(category.lastPost.date).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

  const isAdmin = user?.userType === 'admin' || user?.role === 'admin'
export default ForumCategories;
;

import Link from "next/link",;
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",;
import { useAuth } from "@/hooks/useAuth",;
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react';
import { ForumCategoryInfo } from "@/types/community",;
const categories: ForumCategoryInfo[] = [;
  {;
    id: "getting-hired",;
    name: "Getting Hired",;  {;
    id: "announcements",;
    name: "Announcements",,
  description: "Official announcements from the Zion team.",;
    adminOnly: true,;
    icon: "Megaphone";
  }
                <div className="p-2 bg-zion-purple/10 rounded-full">;
                  <Icon className="h-6 w-6 text-zion-purple" />;
                </div>;
                <CardTitle className="text-xl">{category && category.name}</CardTitle>;
              </CardHeader>;
              <CardContent>;
                <CardDescription className="text-base">{category && category.description}</CardDescription>;
              </CardContent>;
            </Card>;
          </Link>;
        );
      })}
    </div>;
  )
};
export default ForumCategories;

export default ForumCategories;
";
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
export default ForumCategories;
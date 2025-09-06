

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import PostCard from "@/components/community/PostCard";
import {ForumPost, ForumCategoryInfo} from "@/types/community";
import {Badge} from "@/components/ui/badge";
import {useAuth} from "@/hooks/useAuth";
import {MessageSquare, Briefcase, Code, FileText, Megaphone, Search} from "@/components/icons";
// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {
  "getting-hired": {
    id: "getting-hired"
    name: "Getting Hired"
    description: "Tips, strategies, and questions about getting hired on the platform.";

    adminOnly: false,
    icon: "Briefcase"
  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  "project-help": {

    id: "project-help"
    name: "Project Help"
    description: "Get help with your ongoing projects and collaboration."
    adminOnly: false

    icon: "MessageSquare"

  "feedback": {

    id: "feedback"
    name: "Feedback & Feature Requests"
    description: "Share your feedback and suggest new features."
    adminOnly: false

    icon: "FileText"

  "announcements": {

    id: "announcements"
    name: "Announcements"
    description: "Official announcements from the Zion team."
    adminOnly: true

    icon: "Megaphone"
  }

// Mock data for posts by category
const postsByCategory: Record<string, ForumPost[]> = {
  "getting-hired": [
    {

    }
  ];
  "project - help": [;
    {

=======
      isAnswered: true

    }
  ];
  "ai - tools": [;
    {

=======
      replyCount: 9

    }
  ];
  "feedback": [;
    {

=======
      replyCount: 5

    }
  ];
  "announcements": [;
    {

      id: "9",
      title: "Platform Update: New AI Matching Algorithm",
      content: "We're excited to announce the launch of our new and improved AI matching algorithm...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["update", "matching", "algorithm"];
      created_at: "2025 - 04 - 02T15:00:00Z",
      updated_at: "2025 - 04 - 02T15:00:00Z",
      upvotes: 42,
      downvotes: 0,
      reply_count: 11,
      is_pinned: true;
    }
    {
      id: "10",
      title: "Maintenance Scheduled: April 15th",
      content: "We will be performing scheduled maintenance on April 15th from 2am - 4am UTC...",
      author_id: "admin1",
      author_name: "Zion Team",
      author_role: "Admin",
      category_id: "announcements",
      tags: ["maintenance", "downtime"];
      created_at: "2025 - 04 - 10T09:00:00Z",
      updated_at: "2025 - 04 - 10T09:00:00Z",
      upvotes: 8,
      downvotes: 0,
      reply_count: 2,
      is_pinned: true;
    }

  "Megaphone": Megaphone;
};

export default function ForumCategoryPage() {;
  // useParams is typed as `any` in this environment due to missing type;
  // definitions, so avoid passing a type argument to prevent TS2347.;
  const { categoryId } = useParams();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  if (!categoryId || !categoriesInfo[categoryId]) {;

=======
  ]
},


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
const iconMap = {
  "Briefcase": Briefcase,
  "MessageSquare": MessageSquare,
  "Code": Code,
  "FileText": FileText,
  "Megaphone": Megaphone

  if (!categoryId || !categoriesInfo[categoryId]) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return (
      <AppLayout>;
        <div className="container py-8">;
          <h1>Category not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }

=======

  
  const category = categoriesInfo[categoryId],
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare,
  const posts = postsByCategory[categoryId] || [],
  


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) |
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )

  return (
    <AppLayout>
      <SEO
        title={`${category.name} | Community Forum | Zion AI Marketplace`}
        description={category.description}
        keywords={`community, forum, ${category.id}, discussion, AI marketplace, questions, answers`}
      />
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{category.name}</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zion-purple/10 rounded-full">
              <IconComponent className="h-8 w-8 text-zion-purple" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>
          </div>
          {canCreatePost && (
            <Button asChild>
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>
                Create New Post
              </Link>
            </Button>
          )}
        </div>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />


  const category = categoriesInfo[categoryId];
  const IconComponent = iconMap[category && category.icon as keyof typeof iconMap] || MessageSquare;
  const posts = postsByCategory[categoryId] || [];

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              value={searchQuery}

              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
        </div>;

        {posts && posts.length > 0 ? (;
          <div className="space-y-4">;
            {filteredPosts && filteredPosts.map((post) => (;
              <PostCard key={post && post.id} post={post} />;
            ))}
          </div>;
        ) : (;
          <div className="text-center py-16">;
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>;
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>;

            {canCreatePost && (;
              <Button asChild>;
                <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${categoryId}`}>;
                  Create New Post;
                </Link>;
              </Button>;

            )}
          </div>;
        )}
<<<<<<< HEAD
=======
  "Megaphone": Megaphone;
}
;



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

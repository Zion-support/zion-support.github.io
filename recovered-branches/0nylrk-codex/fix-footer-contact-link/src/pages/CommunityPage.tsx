const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");


  return (

    <AppLayout>;

      <SEO;"
        title="Community Forum | Zion AI Marketplace"""
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."""
        keywords="community, forum, discussion, AI marketplace, questions, answers"""
import { useState } from "react",;""
import { Link } from "react-router-dom",;""
import { Button } from "@/components/ui/button",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { SEO } from "@/components/SEO",;""
import { AppLayout } from "@/layout/AppLayout",;""
import ForumCategories from "@/components/community/ForumCategories",;""
import PostCard from "@/components/community/PostCard",;""
import { useAuth } from "@/hooks/useAuth",;""
import { ForumPost } from "@/types/community",;"
// Mock data for featured posts;
    authorAvatar: "https://i.pravatar.cc/150?img=3",;""
    tags: ["machine-learning", "fine-tuning", "gpt"],;""
  },;
    authorAvatar: "https://i.pravatar.cc/150?img=5",;""
    tags: ["profile", "tips", "hiring"],;""
],;
// Mock data for recent posts;
    tags: ["testing", "automation", "ci-cd"],;""
    tags: ["feature-request", "teams", "collaboration"],;""
    tags: ["client-management", "scope", "projects"],;""
],;)
export default function CommunityPage() {;
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("categories");"
  return (;

        title="Community Forum | Zion AI Marketplace";""
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals.";""
        keywords="community, forum, discussion, AI marketplace, questions, answers";"
      />;

"
      <div className="container py-8">;"
</div>"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">;"
</div>
          <div>;
            <h1 className="text-3xl font-bold">Community Forum</h1>;""
            <p className="text-muted-foreground mt-2">;"
</p>
            </p>;
          </div>;
          <Button asChild>;
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>;"

            <Link to={user ? "/community/create" :"/login?next=/community/create"}>;"


            ;
        </div>;"
        <Tabs default_value="categories" value={active_tab} onValueChange={setActiveTab} className="mb - 8">;"
          <TabsList className="mb - 6">;"
            <TabsTrigger value="categories">Categories;""
            <TabsTrigger value="featured">Featured;""
            <TabsTrigger value="recent">Recent;"
          ;"
          <TabsContent value="categories">;"

            <ForumCategories />;

          <TabsContent value="featured">;"
            <div className="space - y-4">;"
</div>)
                <PostCard key={post.id} post={post} />))}

          <TabsContent value="recent">;"


    );
 }</div> ) ) 
}</div>   </div> ) 
    );"
pr-12325

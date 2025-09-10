
const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("categories");

import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";
import {useAuth} from "@/hooks/useAuth";
import {ForumPost} from "@/types/community";
// Mock data for featured posts;
const featuredPosts: ForumPost[] = [;
  {;
    id: "1",;
    title: "Best practices for AI model fine-tuning",;
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
    authorId: "user1",;
    authorName: "Alex Johnson",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
    authorRole: "Verified Talent",;
    categoryId: "ai-tools",;    tags: ["machine-learning", "fine-tuning", "gpt"];
    createdAt: "2025-04-01T12:00:00Z",;

    updatedAt: "2025-04-01T12:00:00Z",;
    upvotes: 48,;
    downvotes: 2,;
    replyCount: 12,;
    isAnswered: true,;
    isFeatured: true
};
  {;
    id: "2",;
    title: "How to build an effective AI talent profile?",
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",;
    authorId: "user2",;
    authorName: "Sarah Chen",;
    authorAvatar: "https://i && i.pravatar.cc/150?img=5",;
    categoryId: "getting-hired",;
    tags: ["profile", "tips", "hiring"];
    createdAt: "2025-04-03T09:15:00Z",;

    updatedAt: "2025-04-03T09:15:00Z",;
    upvotes: 32,;
    downvotes: 0,;
    replyCount: 8,;
    isPinned: true,;
    isFeatured: true;

      <SEO
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals."
        keywords="community, forum, discussion, AI marketplace, questions, answers"            <TabsTrigger value="categories">Categories</TabsTrigger>;
            <TabsTrigger value="featured">Featured</TabsTrigger>;
            <TabsTrigger value="recent">Recent</TabsTrigger>;
          </TabsList>;
    </AppLayout>);
}
    </AppLayout>);
}
    </AppLayout>;
  ),;}
 }</div> </TabsContent>) ) 
}</div> </TabsContent> </Tabs> </div> </AppLayout>) 
}
    </AppLayout>;
  );
}
;
}
;
    </AppLayout>);
}


,
// Mock data for featured posts,
const featuredPosts: ForumPost[] = [,
  {,
    id: "1";
    title: "Best practices for AI model fine-tuning";
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...";
    authorId: "user1";
    authorName: "Alex Johnson";
    authorAvatar: "https://i.pravatar.cc/150?img=3";
    authorRole: "Verified Talent";
    categoryId: "ai-tools";
    tags: ["machine-learning", "fine-tuning", "gpt"];
    createdAt: "2025-04-01T12:00:00Z";
    updatedAt: "2025-04-01T12:00:00Z";
    upvotes: 48;
    downvotes: 2;
    replyCount: 12;
    isAnswered: true;
    isFeatured: true,};
  {,
    id: "2";
    title: "How to build an effective AI talent profile?";
    content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?";
    authorId: "user2";
    authorName: "Sarah Chen";
    authorAvatar: "https://i.pravatar.cc/150?img=5";
    categoryId: "getting-hired";
    tags: ["profile", "tips", "hiring"];
    createdAt: "2025-04-03T09:15:00Z";
    updatedAt: "2025-04-03T09:15:00Z";
    upvotes: 32;
    downvotes: 0;
    replyCount: 8;
    isPinned: true;
    isFeatured: true,
      <div className="container py-8">,
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">,
          <div>,
            <h1 className="text-3xl font-bold">Community Forum</h1>,
            <p className="text-muted-foreground mt-2">,
              Join the conversation, ask questions, and share your knowledge,
            </p>,
          </div>,
          <Button asChild>,
            <Link to={user ? "/community/create" : "/login?next=/community/create"}>,
              Create New Post,
            </Link>,
          </Button>,
        </div>,
        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">,
          <TabsList className="mb-6">,
            <TabsTrigger value="categories">Categories</TabsTrigger>,
            <TabsTrigger value="featured">Featured</TabsTrigger>,
            <TabsTrigger value="recent">Recent</TabsTrigger>,
          </TabsList>,
          <TabsContent value="featured">,
            <div className="space-y-4">,
              {featuredPosts.map((post) => (,
                <PostCard key={post.id} post={post} />,
              ))}
            </div>,
          </TabsContent>,
          <TabsContent value="recent">,
            <div className="space-y-4">,
              {recentPosts.map((post) => (,
                <PostCard key={post.id} post={post} />,
              ))}
            </div>,
          </TabsContent>,
        </Tabs>,
      </div>,
    </AppLayout>,
}
;
  );
}
,]

import ForumCategories from "@/components/community/ForumCategories";
import PostCard from "@/components/community/PostCard";

// Mock data for featured posts
const featuredPosts: ForumPost[] = [
  {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 12, _isAnswered: true, _isFeatured: true},
  {_id: "2", _title: "How to build an effective AI talent profile?", _content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?", _authorId: "user2", _authorName: "Sarah Chen", _authorAvatar: "https://i.pravatar.cc/150?img=5", _categoryId: "getting-hired", _tags: ["profile", _"tips", _"hiring"], _createdAt: "2025-04-03T09:15:00Z", _updatedAt: "2025-04-03T09:15:00Z", _upvotes: 32, _downvotes: 0, _replyCount: 8, _isPinned: true, _isFeatured: true}
];

// Mock data for recent posts
const recentPosts: ForumPost[] = [
  {_id: "3", _title: "Looking for feedback on my automated testing approach", _content: "I've set up a CI/CD pipeline with the following testing strategy...", _authorId: "user3", _authorName: "Michael Wong", _categoryId: "project-help", _tags: ["testing", _"automation", _"ci-cd"], _createdAt: "2025-04-10T14:30:00Z", _updatedAt: "2025-04-10T14:30:00Z", _upvotes: 5, _downvotes: 0, _replyCount: 2},
  {_id: "4", _title: "Feature request: Team collaboration tools", _content: "It would be really helpful if we could have built-in tools for team collaboration...", _authorId: "user4", _authorName: "Emma Davis", _categoryId: "feedback", _tags: ["feature-request", _"teams", _"collaboration"], _createdAt: "2025-04-09T18:45:00Z", _updatedAt: "2025-04-09T18:45:00Z", _upvotes: 12, _downvotes: 1, _replyCount: 3},
  {_id: "5", _title: "How to handle client scope creep?", _content: "I'm working on a project where the client keeps adding requirements...", _authorId: "user5", _authorName: "David Lin", _categoryId: "project-help", _tags: ["client-management", _"scope", _"projects"], _createdAt: "2025-04-08T10:20:00Z", _updatedAt: "2025-04-08T10:20:00Z", _upvotes: 24, _downvotes: 0, _replyCount: 7, _isAnswered: true}
];

export default function CommunityPage() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("categories");
  
  return (_<AppLayout>
      <SEO 
        title="Community Forum | Zion AI Marketplace"
        description="Join the Zion AI Marketplace community forum. Ask questions, _share knowledge, _and connect with other AI professionals."
        keywords="community, _forum, _discussion, _AI marketplace, _questions, _answers"
      />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, _ask questions, _and share your knowledge
            </p>
          </div>
          
          <Button asChild>
            <Link to={_user ? "/community/create" : "/login?next=/community/create"}>
              Create New Post
            </Link>
          </Button>
        </div>
        
        <Tabs defaultValue="categories" value={_activeTab} onValueChange={_setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="categories">
            <ForumCategories />
          </TabsContent>
          
          <TabsContent value="featured">
            <div className="space-y-4">
              {_featuredPosts.map((post) => (
                <PostCard key={post.id} post={_post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {_recentPosts.map(_(post) => (
                <PostCard key={post.id} post={_post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}

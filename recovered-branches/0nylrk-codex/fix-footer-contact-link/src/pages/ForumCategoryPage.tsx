
import PostCard from "@/components/community/PostCard";
import {_MessageSquare, _Briefcase, _Code, _FileText, _Megaphone, _Search} from "@/components/icons";

// Mock category data
const categoriesInfo: Record<string, ForumCategoryInfo> = {_"getting-hired": {
    id: "getting-hired", _name: "Getting Hired", _description: "Tips, _strategies, _and questions about getting hired on the platform.", _adminOnly: false, _icon: "Briefcase"},
  "project-help": {_id: "project-help", _name: "Project Help", _description: "Get help with your ongoing projects and collaboration.", _adminOnly: false, _icon: "MessageSquare"},
  "ai-tools": {_id: "ai-tools", _name: "AI Tools Discussion", _description: "Discuss AI tools, _frameworks, _and best practices.", _adminOnly: false, _icon: "Code"},
  "feedback": {_id: "feedback", _name: "Feedback & Feature Requests", _description: "Share your feedback and suggest new features.", _adminOnly: false, _icon: "FileText"},
  "announcements": {_id: "announcements", _name: "Announcements", _description: "Official announcements from the Zion team.", _adminOnly: true, _icon: "Megaphone"}
};

// Mock data for posts by category
const postsByCategory: Record<string, ForumPost[]> = {_"getting-hired": [
    {
      id: "2", _title: "How to build an effective AI talent profile?", _content: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?", _authorId: "user2", _authorName: "Sarah Chen", _authorAvatar: "https://i.pravatar.cc/150?img=5", _categoryId: "getting-hired", _tags: ["profile", _"tips", _"hiring"], _createdAt: "2025-04-03T09:15:00Z", _updatedAt: "2025-04-03T09:15:00Z", _upvotes: 32, _downvotes: 0, _replyCount: 8, _isPinned: true, _isFeatured: true},
    {_id: "6", _title: "Portfolio pieces that clients actually care about", _content: "After submitting dozens of applications, _I've found that these types of projects tend to get the most attention...", _authorId: "user6", _authorName: "James Wilson", _categoryId: "getting-hired", _tags: ["portfolio", _"projects", _"examples"], _createdAt: "2025-04-07T11:30:00Z", _updatedAt: "2025-04-07T11:30:00Z", _upvotes: 19, _downvotes: 2, _replyCount: 6}
  ],
  "project-help": [
    {_id: "3", _title: "Looking for feedback on my automated testing approach", _content: "I've set up a CI/CD pipeline with the following testing strategy...", _authorId: "user3", _authorName: "Michael Wong", _categoryId: "project-help", _tags: ["testing", _"automation", _"ci-cd"], _createdAt: "2025-04-10T14:30:00Z", _updatedAt: "2025-04-10T14:30:00Z", _upvotes: 5, _downvotes: 0, _replyCount: 2},
    {_id: "5", _title: "How to handle client scope creep?", _content: "I'm working on a project where the client keeps adding requirements...", _authorId: "user5", _authorName: "David Lin", _categoryId: "project-help", _tags: ["client-management", _"scope", _"projects"], _createdAt: "2025-04-08T10:20:00Z", _updatedAt: "2025-04-08T10:20:00Z", _upvotes: 24, _downvotes: 0, _replyCount: 7, _isAnswered: true}
  ],
  "ai-tools": [
    {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 12, _isAnswered: true, _isFeatured: true},
    {_id: "7", _title: "Comparing different vector embedding models", _content: "I've been experimenting with these different embedding models and here are my findings...", _authorId: "user7", _authorName: "Lisa Park", _categoryId: "ai-tools", _tags: ["embeddings", _"vectors", _"similarity-search"], _createdAt: "2025-04-05T16:40:00Z", _updatedAt: "2025-04-05T16:40:00Z", _upvotes: 31, _downvotes: 0, _replyCount: 9}
  ],
  "feedback": [
    {_id: "4", _title: "Feature request: Team collaboration tools", _content: "It would be really helpful if we could have built-in tools for team collaboration...", _authorId: "user4", _authorName: "Emma Davis", _categoryId: "feedback", _tags: ["feature-request", _"teams", _"collaboration"], _createdAt: "2025-04-09T18:45:00Z", _updatedAt: "2025-04-09T18:45:00Z", _upvotes: 12, _downvotes: 1, _replyCount: 3},
    {_id: "8", _title: "Suggestion for improving the jobs matching algorithm", _content: "I think the job matching could be improved by considering these additional factors...", _authorId: "user8", _authorName: "Ryan Mitchell", _categoryId: "feedback", _tags: ["matching", _"jobs", _"algorithm"], _createdAt: "2025-04-04T08:10:00Z", _updatedAt: "2025-04-04T08:10:00Z", _upvotes: 17, _downvotes: 3, _replyCount: 5}
  ],
  "announcements": [
    {_id: "9", _title: "Platform Update: New AI Matching Algorithm", _content: "We're excited to announce the launch of our new and improved AI matching algorithm...", _authorId: "admin1", _authorName: "Zion Team", _authorRole: "Admin", _categoryId: "announcements", _tags: ["update", _"matching", _"algorithm"], _createdAt: "2025-04-02T15:00:00Z", _updatedAt: "2025-04-02T15:00:00Z", _upvotes: 42, _downvotes: 0, _replyCount: 11, _isPinned: true},
    {_id: "10", _title: "Maintenance Scheduled: April 15th", _content: "We will be performing scheduled maintenance on April 15th from 2am-4am UTC...", _authorId: "admin1", _authorName: "Zion Team", _authorRole: "Admin", _categoryId: "announcements", _tags: ["maintenance", _"downtime"], _createdAt: "2025-04-10T09:00:00Z", _updatedAt: "2025-04-10T09:00:00Z", _upvotes: 8, _downvotes: 0, _replyCount: 2, _isPinned: true}
  ]
};

const _iconMap = {_"Briefcase": Briefcase, _"MessageSquare": MessageSquare, _"Code": Code, _"FileText": FileText, _"Megaphone": Megaphone};

export default function ForumCategoryPage() {_// useParams is typed as `any` in this environment due to missing type
  // definitions, _so avoid passing a type argument to prevent TS2347.
  const { categoryId} = useParams();
  const {_user} = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  if (!categoryId || !categoriesInfo[categoryId]) {_return (
      <AppLayout>
        <div className="container py-8">
          <h1>Category not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    );}
  
  const _category = categoriesInfo[categoryId];
  const _IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare;
  const _posts = postsByCategory[categoryId] || [];
  
  // Filter posts based on search query
  const _filteredPosts = searchQuery
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : posts;
  
  // For announcements, check if user is admin
  const _canCreatePost = categoryId !== "announcements" || (user?.userType === 'admin' || user?.role === 'admin');
  
  return (
    <AppLayout>
      <SEO 
        title={_`${category.name} | Community Forum | Zion AI Marketplace`}
        description={_category.description}
        keywords={_`community, _forum, _${category.id}, discussion, AI marketplace, questions, answers`}
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{_category.name}</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zion-purple/10 rounded-full">
              <IconComponent className="h-8 w-8 text-zion-purple" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{_category.name}</h1>
              <p className="text-muted-foreground mt-1">{_category.description}</p>
            </div>
          </div>
          
          {_canCreatePost && (
            <Button asChild>
              <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${_categoryId}`}>
                Create New Post
              </Link>
            </Button>
          )}
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts in this category..."
              className="pl-10"
              value={_searchQuery}
              onChange={_(_e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {_posts.length > 0 ? (_<div className="space-y-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={_post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium mb-2">No posts yet</h2>
            <p className="text-muted-foreground mb-6">Be the first to start a discussion in this category!</p>
            
            {_canCreatePost && (
              <Button asChild>
                <Link to={user ? `/community/create?category=${categoryId}` : `/login?next=/community/create?category=${_categoryId}`}>
                  Create New Post
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

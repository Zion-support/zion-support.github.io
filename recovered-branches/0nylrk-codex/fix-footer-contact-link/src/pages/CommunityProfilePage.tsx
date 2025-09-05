
import PostCard from "@/components/community/PostCard";
import UserBadges from "@/components/community/UserBadges";
import ReputationDisplay from "@/components/community/ReputationDisplay";

// Mock user data
const mockUser: CommunityUser = {_id: "user1", _name: "Alex Johnson", _avatar: "https://i.pravatar.cc/150?img=3", _role: "Verified Talent", _reputation: 325, _postCount: 14, _replyCount: 47, _badges: [
    {
      id: "badge1", _name: "Answer Hero", _description: "Provided 10 accepted answers", _icon: "Award", _color: "#10B981"},
    {_id: "badge2", _name: "Top Contributor", _description: "Among the top 5% of contributors", _icon: "Trophy", _color: "#F59E0B"},
    {_id: "badge3", _name: "First Post", _description: "Created your first forum post", _icon: "Star", _color: "#6366F1"}
  ],
  isVerified: true,
  isModerator: false
};

// Mock posts by this user
const userPosts: ForumPost[] = [
  {_id: "1", _title: "Best practices for AI model fine-tuning", _content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["machine-learning", _"fine-tuning", _"gpt"], _createdAt: "2025-04-01T12:00:00Z", _updatedAt: "2025-04-01T12:00:00Z", _upvotes: 48, _downvotes: 2, _replyCount: 12, _isAnswered: true, _isFeatured: true},
  {_id: "11", _title: "How to structure an AI prompt for best results", _content: "After experimenting with different prompt formats, _I've found these patterns to work consistently better...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "ai-tools", _tags: ["prompts", _"techniques", _"optimization"], _createdAt: "2025-03-20T14:25:00Z", _updatedAt: "2025-03-20T14:25:00Z", _upvotes: 36, _downvotes: 1, _replyCount: 8},
  {_id: "12", _title: "Setting up effective monitoring for AI systems", _content: "Here's my approach to monitoring AI systems in production environments...", _authorId: "user1", _authorName: "Alex Johnson", _authorAvatar: "https://i.pravatar.cc/150?img=3", _authorRole: "Verified Talent", _categoryId: "project-help", _tags: ["monitoring", _"production", _"devops"], _createdAt: "2025-03-12T09:30:00Z", _updatedAt: "2025-03-12T09:30:00Z", _upvotes: 24, _downvotes: 0, _replyCount: 6}
];

export default function CommunityProfilePage() {_const { userId} = useParams();
  const [user, setUser] = useState<CommunityUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ForumPost[]>([]);
  
  useEffect__(() => {_// In a real app, _we would fetch the user data here
    // For now, _we'll just use the mock data
    setUser(mockUser);
    setPosts(userPosts);
    setIsLoading(false);}, [userId]);
  
  if (isLoading) {_return (
      <AppLayout>
        <div className="container py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
          </div>
        </div>
      </AppLayout>
    );}
  
  if (!user) {_return (
      <AppLayout>
        <div className="container py-8">
          <h1>User not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    );}

  return (
    <AppLayout>
      <SEO 
        title={_`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={_`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
        keywords={_`community, _forum, _profile, _user profile, _${user.name}`}
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Profile</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">{_user.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={_user.avatar} />
                    <AvatarFallback>{_user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  {_user.name}
                  {_user.isVerified && (
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </CardTitle>
                {_user.role && (
                  <Badge variant="outline" className="mt-1">
                    {user.role}
                  </Badge>
                )}
                {_user.isModerator && (
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>
                )}
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>
                  <ReputationDisplay reputation={_user.reputation} size="lg" />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>
                  <UserBadges badges={_user.badges} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{_user.postCount}</div>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{_user.replyCount}</div>
                      <p className="text-sm text-muted-foreground">Replies</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Member since April 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="posts">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="mt-6">
                <h2 className="text-xl font-bold mb-4">Posts by {_user.name}</h2>
                
                {_posts.length > 0 ? (_<div className="space-y-4">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={_post} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="activity" className="mt-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {_formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), _{ addSuffix: true})}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {_formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), _{ addSuffix: true})}
                        </div>
                        <div>
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {_formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), _{ addSuffix: true})}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {_formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), _{ addSuffix: true})}
                        </div>
                        <div>
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {_formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), _{ addSuffix: true})}
                        </div>
                        <div>
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple hover:underline">How to optimize RAG systems for better results</Link></p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

import { useState, useEffect } from "react";"";
import { useParams, Link } from "react-router-dom";"";
import { SEO } from "@/components/SEO";"";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";"";
import { Button } from "@/components/ui/button";"";
import { Badge } from "@/components/ui/badge";"";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";"";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"";
import { formatDistanceToNow } from "date-fns";"";
import PostCard from "@/components/community/PostCard";"";
import UserBadges from "@/components/community/UserBadges";"";
import ReputationDisplay from "@/components/community/ReputationDisplay";
// Mock user data;
const mockUser = {}
";
"";
  id: "user1","";
    name: "Alex Johnson","";
    avatar: "https://i.pravatar.cc/150?img=3","";
    role: "Verified Talent",;
    reputation: 325,;
    postCount: 14,;
    replyCount: 47,;
    badges[;
        {}
";
"";
            id: "badge1","";
            name: "Answer Hero","";
            description: "Provided 10 accepted answers","";
            icon: "Award","";
  color: "#10B981"},;
        {}
";
"";
            id: "badge2","";
            name: "Top Contributor","";
            description: "Among the top 5% of contributors","";
            icon: "Trophy","";
            color: "#3b82f6"},;
        {}
";
"";
            id: "badge3","";
            name: "First Post","";
            description: "Created your first forum post","";
            icon: "Star","";
            color: "#6366F1"}
    ],;
    isVerified: true,;
    isModerator: false}
// Mock posts by this user;
const userPosts = [];
    {}
";
"";
        id: "1","";
        title: "Best practices for AI model fine-tuning","";
        content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...","";
        authorId: "user1","";
        authorName: "Alex Johnson","";
        authorAvatar: "https://i.pravatar.cc/150?img=3","";
        authorRole: "Verified Talent","";
        categoryId: "ai-tools","";
        tags["machine-learning", "fine-tuning", "gpt"],;"";
        createdAt: "2025-04-01T12:00:00Z","";
        updatedAt: "2025-04-01T12:00:00Z",;
        upvotes: 48,;
        downvotes: 2,;
        replyCount: 12,;
        isAnswered: true,;
        isFeatured: true},;
    {}
";
"";
        id: "11","";
        title: "How to structure an AI prompt for best results","'";
        content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...","";
        authorId: "user1","";
        authorName: "Alex Johnson","";
        authorAvatar: "https://i.pravatar.cc/150?img=3","";
        authorRole: "Verified Talent","";
        categoryId: "ai-tools","";
        tags["prompts", "techniques", "optimization"],;"";
        createdAt: "2025-03-20T14:25:00Z","";
        updatedAt: "2025-03-20T14:25:00Z",;
        upvotes: 36,;
        downvotes: 1,;
        replyCount: 8},;
    {}
";
"";
        id: "12","";
        title: "Setting up effective monitoring for AI systems","'";
        content: "Here's my approach to monitoring AI systems in production environments...","";
        authorId: "user1","";
        authorName: "Alex Johnson","";
        authorAvatar: "https://i.pravatar.cc/150?img=3","";
        authorRole: "Verified Talent","";
        categoryId: "project-help","";
        tags["monitoring", "production", "devops"],;"";
        createdAt: "2025-03-12T09:30:00Z","";
        updatedAt: "2025-03-12T09:30:00Z",;
        upvotes: 24,;
        downvotes: 0,;
        replyCount: 6}
];
export {};
  return null;
}
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(() => {}
';
        // In a real app, we would fetch the user data here'';
        // For now, we'll just use the mock data;
        setUser (mockUser) ;
        setPosts (userPosts) ;
        setIsLoading (false) }, [userId]) ;
    if (isLoading) {}
";
"";
        return (<div className="container py-8">"";
          <div className="flex justify-center items-center h-64">"";
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>) }
    if (!user) {}
";
"";
        return (<div className="container py-8">";
          <h1>User not found</h1>"";
          <Button asChild className="mt-4">"";
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>)}';
    return (<div>Broken JSX</div>
}`}/>";
        ,"";
            <div className="container py-8">"";
        <div className="flex items-center gap-3 mb-6">"";
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum";
          </Link>"";
          <span className="text-muted-foreground">/</span>"";
          <span className="text-sm font-medium">Profile</span>"";
          <span className="text-muted-foreground">/</span>"";
          <span className="text-sm font-medium">{user.name}</span>;
        </div>";
        "";
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"";
          <div className="md:col-span-1">";
            <Card>"";
              <CardHeader className="text-center">"";
                <div className="flex justify-center mb-4">"";
                  <Avatar className="h-24 w-24">;
                    <AvatarImage src={user.avatar}/>;
                    <AvatarFallback>{user.name.charAt (0) }</AvatarFallback>;
                  </Avatar>";
                </div>"";
                <CardTitle className="text-2xl flex items-center justify-center gap-2">";
                  {user.name}"";
                  {};
                    </span>)}";
                </CardTitle>"";
                {};
                    {user.role}";
                  </Badge>)}"";
                {user.isModerator && (<Badge className="mt-2 bg-blue-500">Moderator</Badge>)}
              </CardHeader>";
              "";
              <CardContent className="space-y-6">";
                <div>"";
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>"";
                  <ReputationDisplay reputation={user.reputation} size="lg"/>;
                </div>;
                ";
                <div>"";
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>;
                  <UserBadges badges={user.badges}/>;
                </div>";
                "";
                <div className="grid grid-cols-2 gap-4">";
                  <Card>"";
                    <CardContent className="p-4 text-center">"";
                      <div className="text-2xl font-bold">{user.postCount}</div>"";
                      <p className="text-sm text-muted-foreground">Posts</p>;
                    </CardContent>;
                  </Card>";
                  <Card>"";
                    <CardContent className="p-4 text-center">"";
                      <div className="text-2xl font-bold">{user.replyCount}</div>"";
                      <p className="text-sm text-muted-foreground">Replies</p>;
                    </CardContent>;
                  </Card>;
                </div>";
                "";
                <div className="text-sm text-muted-foreground">;
                  <p>Member since April 2025</p>;
                </div>;
              </CardContent>;
            </Card>;
          </div>";
          "";
          <div className="md:col-span-2">"";
            <Tabs defaultValue="posts">";
              <TabsList>"";
                <TabsTrigger value="posts">Posts</TabsTrigger>"";
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>;
              </TabsList>";
              "";
              <TabsContent value="posts" className="mt-6">"";
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>";
                "";
                {};
                    {posts.map((post) => (<PostCard key={post.id} post={post}/>))}";
                  </div>) : (<Card>"'";
                    <CardContent className="p-6 text-center">'"'";
                      <p className="text-muted-foreground">This user hasn't created  posts yet.</p>;
                    </CardContent>;
                  </Card>) }
              </TabsContent>";
              "";
              <TabsContent value="activity" className="mt-6">"";
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>;
                ";
                <Card>"";
                  <CardContent className="p-6">"";
                    <ul className="space-y-4">"";
                      <li className="flex items-start gap-4">"";
                        <div className="min-w-fit text-sm text-muted-foreground">"";
                          {formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), { addSuffix: true })}
                        </div>";
                        <div>"";
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>;
                        </div>";
                      </li>"";
                      <li className="flex items-start gap-4">"";
                        <div className="min-w-fit text-sm text-muted-foreground">"";
                          {formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), { addSuffix: true })}
                        </div>";
                        <div>"";
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>;
                        </div>";
                      </li>"";
                      <li className="flex items-start gap-4">"";
                        <div className="min-w-fit text-sm text-muted-foreground">"";
                          {formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), { addSuffix: true })}
                        </div>";
                        <div>"";
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>;
                        </div>";
                      </li>"";
                      <li className="flex items-start gap-4">"";
                        <div className="min-w-fit text-sm text-muted-foreground">"";
                          {formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), { addSuffix: true })}
                        </div>";
                        <div>"";
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>;
                        </div>";
                      </li>"";
                      <li className="flex items-start gap-4">"";
                        <div className="min-w-fit text-sm text-muted-foreground">"";
                          {formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), { addSuffix: true })}
                        </div>";
                        <div>"";
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple hover:underline">How to optimize RAG systems for better results</Link></p>;
                        </div>;
                      </li>;
                    </ul>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
      </div>)}


export { CommunityProfilePage }
export { CommunityProfilePage }
export { CommunityProfilePage }
export { CommunityProfilePage }
export { CommunityProfilePage }
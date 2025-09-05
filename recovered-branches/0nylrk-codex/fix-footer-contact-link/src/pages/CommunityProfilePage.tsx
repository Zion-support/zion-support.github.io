
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { useParams, Link } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { formatDistanceToNow } from "date-fns",;
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",;
import PostCard from "@/components/community/PostCard",;
import UserBadges from "@/components/community/UserBadges",;
import ReputationDisplay from "@/components/community/ReputationDisplay",;
;
// Mock user data;
const mockUser:CommunityUser = {;
  id:"user1",;
  name:"Alex Johnson",;
  avatar:"https://i.pravatar.cc/150?img=3",;
  role:"Verified Talent",;
  reputation:325,;
  postCount:14,;
  replyCount:47,;
  badges:[;
    {;
      id:"badge1",;
      name:"Answer Hero",;
      description:"Provided 10 accepted answers",;
      icon:"Award",;
      color:"#10B981";
    },;
    {;
      id:"badge2",;
      name:"Top Contributor",;
      description:"Among the top 5% of contributors",;
      icon:"Trophy",;
      color:"#F59E0B";
    },;
    {;
      id:"badge3",;
      name:"First Post",;
      description:"Created your first forum post",;
      icon:"Star",;
      color:"#6366F1";
    }
  ],;
  isVerified:true,;
  isModerator:false;
},;
;
// Mock posts by this user;
const userPosts:ForumPost[] = [;
  {;
    id:"1",;
    title:"Best practices for AI model fine-tuning",;
    content:"I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"ai-tools",;
    tags:["machine-learning", "fine-tuning", "gpt"],;
    createdAt:"2025-04-01T12:00:00Z",;
    updatedAt:"2025-04-01T12:00:00Z",;
    upvotes:48,;
    downvotes:2,;
    replyCount:12,;
    isAnswered:true,;
    isFeatured:true;
  },;
  {;
    id:"11",;
    title:"How to structure an AI prompt for best results",;
    content:"After experimenting with different prompt formats, I've found these patterns to work consistently better...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"ai-tools",;
    tags:["prompts", "techniques", "optimization"],;
    createdAt:"2025-03-20T14:25:00Z",;
    updatedAt:"2025-03-20T14:25:00Z",;
    upvotes:36,;
    downvotes:1,;
    replyCount:8;
  },;
  {;
    id:"12",;
    title:"Setting up effective monitoring for AI systems",;
    content:"Here's my approach to monitoring AI systems in production environments...",;
    authorId:"user1",;
    authorName:"Alex Johnson",;
    authorAvatar:"https://i.pravatar.cc/150?img=3",;
    authorRole:"Verified Talent",;
    categoryId:"project-help",;
    tags:["monitoring", "production", "devops"],;
    createdAt:"2025-03-12T09:30:00Z",;
    updatedAt:"2025-03-12T09:30:00Z",;
    upvotes:24,;
    downvotes:0,;
    replyCount:6;
  }
],;
;
export default function CommunityProfilePage() {;
  const { userId } = useParams(),;
  const [user, setUser] = useState<CommunityUser | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [posts, setPosts] = useState<ForumPost[]>([]),;
  ;
  useEffect(() => {;
    // In a real app, we would fetch the user data here;
    // For now, we'll just use the mock data;
    setUser(mockUser),;
    setPosts(userPosts),;
    setIsLoading(false),;
  }, [userId]),;
  ;
  if (isLoading) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    ),;
  }
  ;
  if (!user) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <h1>User not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    ),;
  }
;
  return (;
    <AppLayout>;
      <SEO ;
        title={`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
        keywords={`community, forum, profile, user profile, ${user.name}`}
      />;
      ;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Profile</span>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">{user.name}</span>;
        </div>;
        ;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="md:col-span-1">;
            <Card>;
              <CardHeader className="text-center">;
                <div className="flex justify-center mb-4">;
                  <Avatar className="h-24 w-24">;
                    <AvatarImage src={user.avatar} />;
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>;
                  </Avatar>;
                </div>;
                <CardTitle className="text-2xl flex items-center justify-center gap-2">;
                  {user.name}
                  {user.isVerified && (;
                    <span className="text-blue-500">;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">;
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />;
                      </svg>;
                    </span>;
                  )}
                </CardTitle>;
                {user.role && (;
                  <Badge variant="outline" className="mt-1">;
=======
import { useState, useEffect } from "react",
import { useParams, Link } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { formatDistanceToNow } from "date-fns",
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community",
import PostCard from "@/components/community/PostCard",
import UserBadges from "@/components/community/UserBadges",
import ReputationDisplay from "@/components/community/ReputationDisplay",
// Mock user data
const mockUser: CommunityUser = {
  id: &quot;user1&quot;,
  name: &quot;Alex Johnson&quot;,
  avatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
  role: &quot;Verified Talent&quot;,
  reputation: 325,
  postCount: 14,
  replyCount: 47,
  badges: [
    {
      id: &quot;badge1&quot;,
      name: &quot;Answer Hero&quot;,
      description: &quot;Provided 10 accepted answers&quot;,
      icon: &quot;Award&quot;,
      color: &quot;#10B981&quot;
    },
    {
      id: &quot;badge2&quot;,
      name: &quot;Top Contributor&quot;,
      description: &quot;Among the top 5% of contributors&quot;,
      icon: &quot;Trophy&quot;,
      color: &quot;#F59E0B&quot;
    },
    {
      id: &quot;badge3&quot;,
      name: &quot;First Post&quot;,
      description: &quot;Created your first forum post&quot;,
      icon: &quot;Star&quot;,
      color: &quot;#6366F1&quot;
    }  ],
  isVerified: true,
  isModerator: false
},

// Mock posts by this user
const userPosts: ForumPost[] = [
  {
    id: &quot;1&quot;,
    title: &quot;Best practices for AI model fine-tuning&quot;,
    content: &quot;I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...&quot;,
    authorId: &quot;user1&quot;,
    authorName: &quot;Alex Johnson&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
    authorRole: &quot;Verified Talent&quot;,
    categoryId: &quot;ai-tools&quot;,
    tags: [&quot;machine-learning&quot;, &quot;fine-tuning&quot;, &quot;gpt&quot;],
    createdAt: &quot;2025-04-01T12:00:00Z&quot;,
    updatedAt: &quot;2025-04-01T12:00:00Z&quot;,
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
    isFeatured: true
  },
  {
    id: &quot;11&quot;,
    title: &quot;How to structure an AI prompt for best results&quot;,
    content: &quot;After experimenting with different prompt formats, I've found these patterns to work consistently better...&quot;,
    authorId: &quot;user1&quot;,
    authorName: &quot;Alex Johnson&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
    authorRole: &quot;Verified Talent&quot;,
    categoryId: &quot;ai-tools&quot;,
    tags: [&quot;prompts&quot;, &quot;techniques&quot;, &quot;optimization&quot;],
    createdAt: &quot;2025-03-20T14:25:00Z&quot;,
    updatedAt: &quot;2025-03-20T14:25:00Z&quot;,
    upvotes: 36,
    downvotes: 1,
    replyCount: 8
  },
  {
    id: &quot;12&quot;,
    title: &quot;Setting up effective monitoring for AI systems&quot;,
    content: &quot;Here's my approach to monitoring AI systems in production environments...&quot;,
    authorId: &quot;user1&quot;,
    authorName: &quot;Alex Johnson&quot;,
    authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
    authorRole: &quot;Verified Talent&quot;,
    categoryId: &quot;project-help&quot;,
    tags: [&quot;monitoring&quot;, &quot;production&quot;, &quot;devops&quot;],
    createdAt: &quot;2025-03-12T09:30:00Z&quot;,
    updatedAt: &quot;2025-03-12T09:30:00Z&quot;,
    upvotes: 24,
    downvotes: 0,
    replyCount: 6
  }
],

export default function CommunityProfilePage() {
  const { userId } = useParams(),
  const [user, setUser] = useState<CommunityUser | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [posts, setPosts] = useState<ForumPost[]>([]),
  
  useEffect(() => {
    // In a real app, we would fetch the user data here
    // For now, we'll just use the mock data
    setUser(mockUser),
    setPosts(userPosts),
    setIsLoading(false)
  }, [userId]),  
  if (isLoading) {_return (
      <AppLayout>
        <div className=&quot;container py-8&quot;>
          <div className=&quot;flex justify-center items-center h-64&quot;>
            <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple&quot;></div>
          </div>
        </div>
      </AppLayout>
    )
  }  
  if (!user) {_return (
      <AppLayout>
        <div className=&quot;container py-8&quot;>
          <h1>User not found</h1>
          <Button asChild className=&quot;mt-4&quot;>
            <Link to=&quot;/community&quot;>Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  return (
    <AppLayout>
      <SEO 
        title={_`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
        description={_`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
        keywords={_`community, _forum, _profile, _user profile, _${user.name}`}
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex items-center gap-3 mb-6&quot;>
          <Link to=&quot;/community&quot; className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>
            Forum
          </Link>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <span className=&quot;text-sm font-medium&quot;>Profile</span>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <span className=&quot;text-sm font-medium&quot;>{user.name}</span>        </div>
        
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
          <div className=&quot;md:col-span-1&quot;>
            <Card>
              <CardHeader className=&quot;text-center&quot;>
                <div className=&quot;flex justify-center mb-4&quot;>
                  <Avatar className=&quot;h-24 w-24&quot;>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className=&quot;text-2xl flex items-center justify-center gap-2&quot;>
                  {user.name}
                  {user.isVerified && (
                    <span className=&quot;text-blue-500&quot;>
                      <svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;currentColor&quot; className=&quot;w-5 h-5&quot;>
                        <path fillRule=&quot;evenodd&quot; d=&quot;M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z&quot; clipRule=&quot;evenodd&quot; />                      </svg>
                    </span>
                  )}
                </CardTitle>
                {user.role && (
                  <Badge variant=&quot;outline&quot; className=&quot;mt-1&quot;>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    {user.role}
                  </Badge>;
                )}
<<<<<<< HEAD
                {user.isModerator && (;
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>;
                )}
              </CardHeader>;
              ;
              <CardContent className="space-y-6">;
                <div>;
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>;
                  <ReputationDisplay reputation={user.reputation} size="lg" />;
                </div>;
                ;
                <div>;
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>;
                  <UserBadges badges={user.badges} />;
                </div>;
                ;
                <div className="grid grid-cols-2 gap-4">;
                  <Card>;
                    <CardContent className="p-4 text-center">;
                      <div className="text-2xl font-bold">{user.postCount}</div>;
                      <p className="text-sm text-muted-foreground">Posts</p>;
                    </CardContent>;
                  </Card>;
                  <Card>;
                    <CardContent className="p-4 text-center">;
                      <div className="text-2xl font-bold">{user.replyCount}</div>;
                      <p className="text-sm text-muted-foreground">Replies</p>;
                    </CardContent>;
                  </Card>;
                </div>;
                ;
                <div className="text-sm text-muted-foreground">;
                  <p>Member since April 2025</p>;
                </div>;
              </CardContent>;
            </Card>;
          </div>;
          ;
          <div className="md:col-span-2">;
            <Tabs defaultValue="posts">;
              <TabsList>;
                <TabsTrigger value="posts">Posts</TabsTrigger>;
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>;
              </TabsList>;
              ;
              <TabsContent value="posts" className="mt-6">;
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>;
                ;
                {posts.length > 0 ? (;
                  <div className="space-y-4">;
                    {posts.map((post) => (;
                      <PostCard key={post.id} post={post} />;
                    ))}
                  </div>;
                ) :(;
                  <Card>;
                    <CardContent className="p-6 text-center">;
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>;
                    </CardContent>;
                  </Card>;
                )}
              </TabsContent>;
              ;
              <TabsContent value="activity" className="mt-6">;
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>;
                ;
                <Card>;
                  <CardContent className="p-6">;
                    <ul className="space-y-4">;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), { addSuffix:true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), { addSuffix:true })}
                        </div>;
                        <div>;
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), { addSuffix:true })}
                        </div>;
                        <div>;
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), { addSuffix:true })}
                        </div>;
                        <div>;
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>;
                        </div>;
                      </li>;
                      <li className="flex items-start gap-4">;
                        <div className="min-w-fit text-sm text-muted-foreground">;
                          {formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), { addSuffix:true })}
                        </div>;
                        <div>;
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
      </div>;
    </AppLayout>;
  );
=======
                {user.isModerator && (
                  <Badge className=&quot;mt-2 bg-blue-500&quot;>Moderator</Badge>                )}
              </CardHeader>
              
              <CardContent className=&quot;space-y-6&quot;>
                <div>
                  <h3 className=&quot;text-sm font-medium text-muted-foreground mb-2&quot;>Reputation</h3>
                  <ReputationDisplay reputation={user.reputation} size=&quot;lg&quot; />
                </div>
                
                <div>
                  <h3 className=&quot;text-sm font-medium text-muted-foreground mb-2&quot;>Badges</h3>
                  <UserBadges badges={user.badges} />                </div>
                
                <div className=&quot;grid grid-cols-2 gap-4&quot;>
                  <Card>
                    <CardContent className=&quot;p-4 text-center&quot;>
                      <div className=&quot;text-2xl font-bold&quot;>{user.postCount}</div>
                      <p className=&quot;text-sm text-muted-foreground&quot;>Posts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className=&quot;p-4 text-center&quot;>
                      <div className=&quot;text-2xl font-bold&quot;>{user.replyCount}</div>
                      <p className=&quot;text-sm text-muted-foreground&quot;>Replies</p>                    </CardContent>
                  </Card>
                </div>
                
                <div className=&quot;text-sm text-muted-foreground&quot;>
                  <p>Member since April 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className=&quot;md:col-span-2&quot;>
            <Tabs defaultValue=&quot;posts&quot;>
              <TabsList>
                <TabsTrigger value=&quot;posts&quot;>Posts</TabsTrigger>
                <TabsTrigger value=&quot;activity&quot;>Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;posts&quot; className=&quot;mt-6&quot;>
                <h2 className=&quot;text-xl font-bold mb-4&quot;>Posts by {user.name}</h2>
                
                {posts.length > 0 ? (
                  <div className=&quot;space-y-4&quot;>                    {posts.map((post) => (
                      <PostCard key={post.id} post={_post} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className=&quot;p-6 text-center&quot;>
                      <p className=&quot;text-muted-foreground&quot;>This user hasn't created any posts yet.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value=&quot;activity&quot; className=&quot;mt-6&quot;>
                <h2 className=&quot;text-xl font-bold mb-4&quot;>Recent Activity</h2>
                
                <Card>
                  <CardContent className=&quot;p-6&quot;>
                    <ul className=&quot;space-y-4&quot;>
                      <li className=&quot;flex items-start gap-4&quot;>
                        <div className=&quot;min-w-fit text-sm text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(&quot;2025-04-10T14:30:00Z&quot;), { addSuffix: true })}                        </div>
                        <div>
                          <p>Replied to <Link to=&quot;/community/post/3&quot; className=&quot;text-zion-purple hover:underline&quot;>Looking for feedback on my automated testing approach</Link></p>
                        </div>
                      </li>
                      <li className=&quot;flex items-start gap-4&quot;>
                        <div className=&quot;min-w-fit text-sm text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(&quot;2025-04-08T09:15:00Z&quot;), { addSuffix: true })}                        </div>
                        <div>
                          <p>Earned badge <span className=&quot;font-medium&quot;>Top Contributor</span></p>
                        </div>
                      </li>
                      <li className=&quot;flex items-start gap-4&quot;>
                        <div className=&quot;min-w-fit text-sm text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(&quot;2025-04-05T16:40:00Z&quot;), { addSuffix: true })}                        </div>
                        <div>
                          <p>Replied to <Link to=&quot;/community/post/7&quot; className=&quot;text-zion-purple hover:underline&quot;>Comparing different vector embedding models</Link></p>
                        </div>
                      </li>
                      <li className=&quot;flex items-start gap-4&quot;>
                        <div className=&quot;min-w-fit text-sm text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(&quot;2025-04-01T12:00:00Z&quot;), { addSuffix: true })}                        </div>
                        <div>
                          <p>Created post <Link to=&quot;/community/post/1&quot; className=&quot;text-zion-purple hover:underline&quot;>Best practices for AI model fine-tuning</Link></p>
                        </div>
                      </li>
                      <li className=&quot;flex items-start gap-4&quot;>
                        <div className=&quot;min-w-fit text-sm text-muted-foreground&quot;>
                          {formatDistanceToNow(new Date(&quot;2025-03-25T08:20:00Z&quot;), { addSuffix: true })}                        </div>
                        <div>
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple hover: underline">How to optimize RAG systems for better results</Link></p>                        </div>
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
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

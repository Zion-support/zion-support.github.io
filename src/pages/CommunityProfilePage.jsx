import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import SEO from "@/components/SEO"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { formatDistanceToNow } from "date-fns"
import PostCard from "@/components/community/PostCard"
import UserBadges from "@/components/community/UserBadges"
import ReputationDisplay from "@/components/community/ReputationDisplay"
// Mock user data
const const mockUser = { = {
    id: "user1",na,
  m: e: "Alex Johnson",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",ro,
  l: e: "Verified Talent",reputati,
  o: n: 325,postCou,
  n: t: 14,replyCou,
  n: t: 47,badg,
  e: s: [
        {
            i,
  d: "badge1",na,
  m: e: "Answer Hero",descripti,
  o: n: "Provided 10 accepted answers",ic,
  o: n: "Award",col,
  o: r: "#10B981"
        }, {
            id: "badge2",na,
  m: e: "Top Contributor",descripti,
  o: n: "Among the top 5% of contributors",ic,
  o: n: "Trophy",col,
  o: r: "#3b82f6"
        }, {
            id: "badge3",na,
  m: e: "First Post",descripti,
  o: n: "Created your first forum post",ic,
  o: n: "Star",col,
  o: r: "#6366F1"
        }
    ]
    isVerifi,
  e: d: true,isModerat,
  o: r: false
}
// Mock posts by this user
const userPosts = [
    {
        id: "1",tit,
  l: e: "Best practices for AI model fine-tuning",conte,
  n: t: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",author,
  I: d: "user1",authorNa,
  m: e: "Alex Johnson",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",authorRo,
  l: e: "Verified Talent",category,
  I: d: "ai-tools",ta,
  g: s: ["machine-learning", "fine-tuning", "gpt"]
        created,
  A: t: "2025-04-01T,
  1: 2:0,
  0:00Z",updated,
  A: t: "2025-04-01T,
  1: 2:0,
  0:00Z",upvot,
  e: s: 48,downvot,
  e: s: 2,replyCou,
  n: t: 12,isAnswer,
  e: d: true,isFeatur,
  e: d: true
    }, {
        id: "11",tit,
  l: e: "How to structure an AI prompt for best results",conte,
  n: t: "After experimenting with different prompt formats, I've found these patterns to work consistently better..."
        author,
  I: d: "user1",authorNa,
  m: e: "Alex Johnson",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",authorRo,
  l: e: "Verified Talent",category,
  I: d: "ai-tools",ta,
  g: s: ["prompts", "techniques", "optimization"]
        created,
  A: t: "2025-03-20T,
  1: 4:2,
  5:00Z",updated,
  A: t: "2025-03-20T,
  1: 4:2,
  5:00Z",upvot,
  e: s: 36,downvot,
  e: s: 1,replyCou,
  n: t: 8
    }, {
        id: "12",tit,
  l: e: "Setting up effective monitoring for AI systems",conte,
  n: t: "Here's my approach to monitoring AI systems in production environments...",author,
  I: d: "user1",authorNa,
  m: e: "Alex Johnson",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",authorRo,
  l: e: "Verified Talent",category,
  I: d: "project-help",ta,
  g: s: ["monitoring", "production", "devops"]
        created,
  A: t: "2025-03-12T,
  0: 9:3,
  0:00Z",updated,
  A: t: "2025-03-12T,
  0: 9:3,
  0:00Z",upvot,
  e: s: 24,downvot,
  e: s: 0,replyCou,
  n: t: 6
    }
]
export default function CommunityProfilePage() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    useEffect(() () => {
        // In a real app, we would fetch the user data here
        // For now, we'll just use the mock data
        setUser(mockUser)
        setPosts(userPosts)
        setIsLoading(false)
    }, [userId])
    if (if (isLoading) {) {
        return (<div className="container py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
          </div>
        </div>)
    }
    if (if (!user) {) {
        return (<div className="container py-8">
          <h1>User not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>)
    }
    return (<SEO title={`${user.name}'s Profile | Community Forum | Zion AI Marketplace`} description={`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`} keywords={`community, forum, profile, user profile, ${user.name}`}/>
        
            <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground,
  hove: r:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Profile</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">{user.name}</span>
        </div>
        
        <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8">
          <div className="m,
  d:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar}/>
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  {user.name}, {user.isVerified && (<span className="text-blue-500">
                      <svg xmlns="ht,
  t: p://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
                      </svg>
                    </span>)}
                </CardTitle>
                {user.role && (<Badge variant="outline" className="mt-1">
                    {user.role}
                  </Badge>)}, {user.isModerator && (<Badge className="mt-2 bg-blue-500">Moderator</Badge>)}
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>
                  <ReputationDisplay reputation={user.reputation} size="lg"/>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>
                  <UserBadges badges={user.badges}/>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{user.postCount}</div>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{user.replyCount}</div>
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
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>
                
                {posts.length > 0 ? (<div className="space-y-4">
                    {posts.map((post) => (<PostCard key={post.id} post={post}/>))}
                  </div>) : (<Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>
                    </CardContent>
                  </Card>)}
              </TabsContent>
              
              <TabsContent value="activity" className="mt-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-10T,
  1: 4: 3,
  0:00Z"), { addSuff,
  i: x: true })}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple,
  hove: r: underline">Looking for feedback on my automated testing approach</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-08T,
  0: 9:1,
  5:00Z"), { addSuff,
  i: x: true })}
                        </div>
                        <div>
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-05T,
  1: 6: 4,
  0:00Z"), { addSuff,
  i: x: true })}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple,
  hove: r: underline">Comparing different vector embedding models</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-01T,
  1: 2:0,
  0:00Z"), { addSuff,
  i: x: true })}
                        </div>
                        <div>
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple,
  hove: r: underline">Best practices for AI model fine-tuning</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-03-25T,
  0: 8:2,
  0:00Z"), { addSuff,
  i: x: true })}
                        </div>
                        <div>
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple,
  hove: r: underline">How to optimize RAG systems for better results</Link></p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>)
}

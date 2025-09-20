import React from "react";
import { useState   } from "react";
import CreatePostButton from "@/components/community/CreatePostButton"
import { Tabs, TabsContent, TabsList, TabsTrigger   } from "@/components/ui/tabs";
import SEO from "@/components/SEO"
import ForumCategories from "@/components/community/ForumCategories"
import PostCard from "@/components/community/PostCard"
import { useAuth   } from "@/hooks/useAuth";
// Mock data for featured posts;
const featuredPosts = [
  {
  id: "1",tit,
  l: e: "Best practices for AI model fine-tuning",conte,
  n: t: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",auth,
  o: r: {
  i,
  d: "user1",na,
  m: e: "Alex Johnson",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",ro,
  l: e: "Verified Talent"
}
        author,
  I: d: "user1",catego,
  r: y: "ai-tools",category,
  I: d: "ai-tools",ta,
  g: s: ["machine-learning", "fine-tuning", "gpt"]
        created,
  A: t: "2025-04-01T,
  1: 2:0,
  0:00Z",updated,
  A: t: "2025-04-01T,
  1: 2:0,
  0:00Z",repli,
  e: s: [],lik,
  e: s: 48,vie,
  w: s: 120,upvot,
  e: s: 48,downvot,
  e: s: 2,replyCou,
  n: t: 12,isPinn,
  e: d: false,isLock,
  e: d: false,isAnswer,
  e: d: true,authorNa,
  m: e: "Alex Johnson",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=3",authorRo,
  l: e: "Verified Talent"
},
  {
  id: "2",tit,
  l: e: "How to build an effective AI talent profile?",conte,
  n: t: "I'm looking to improve my profile to get more client attention. What are the key elements I should focus on?",auth,
  o: r: {
  i,
  d: "user2",na,
  m: e: "Sarah Chen",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=5",ro,
  l: e: "Verified Talent"
}
        author,
  I: d: "user2",catego,
  r: y: "getting-hired",category,
  I: d: "getting-hired",ta,
  g: s: ["profile", "tips", "hiring"]
        created,
  A: t: "2025-04-03T,
  0: 9:1,
  5:00Z",updated,
  A: t: "2025-04-03T,
  0: 9:1,
  5:00Z",repli,
  e: s: [],lik,
  e: s: 32,vie,
  w: s: 89,upvot,
  e: s: 32,downvot,
  e: s: 0,replyCou,
  n: t: 8,isPinn,
  e: d: true,isLock,
  e: d: false,isAnswer,
  e: d: false,authorNa,
  m: e: "Sarah Chen",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=5",authorRo,
  l: e: "Verified Talent"
},
  ]
// Mock data for recent posts;
const recentPosts = [
  {
  id: "3",tit,
  l: e: "Looking for feedback on my automated testing approach",conte,
  n: t: "I've set up a CI/CD pipeline with the following testing strategy...",auth,
  o: r: {
  i,
  d: "user3",na,
  m: e: "Michael Wong",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=7",ro,
  l: e: "Developer"
}
        author,
  I: d: "user3",catego,
  r: y: "project-help",category,
  I: d: "project-help",ta,
  g: s: ["testing", "automation", "ci-cd"]
        created,
  A: t: "2025-04-10T,
  1: 4:3,
  0:00Z",updated,
  A: t: "2025-04-10T,
  1: 4:3,
  0:00Z",repli,
  e: s: [],lik,
  e: s: 5,vie,
  w: s: 45,upvot,
  e: s: 5,downvot,
  e: s: 0,replyCou,
  n: t: 2,isPinn,
  e: d: false,isLock,
  e: d: false,isAnswer,
  e: d: false,authorNa,
  m: e: "Michael Wong",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=7",authorRo,
  l: e: "Developer"
},
  {
  id: "4",tit,
  l: e: "Feature reques,
  t: Team collaboration tools",conte,
  n: t: "It would be really helpful if we could have built-in tools for team collaboration...",auth,
  o: r: {
  i,
  d: "user4",na,
  m: e: "Emma Davis",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=9",ro,
  l: e: "Product Manager"
}
        author,
  I: d: "user4",catego,
  r: y: "feedback",category,
  I: d: "feedback",ta,
  g: s: ["feature-request", "teams", "collaboration"]
        created,
  A: t: "2025-04-09T,
  1: 8:4,
  5:00Z",updated,
  A: t: "2025-04-09T,
  1: 8:4,
  5:00Z",repli,
  e: s: [],lik,
  e: s: 12,vie,
  w: s: 67,upvot,
  e: s: 12,downvot,
  e: s: 1,replyCou,
  n: t: 3,isPinn,
  e: d: false,isLock,
  e: d: false,isAnswer,
  e: d: false,authorNa,
  m: e: "Emma Davis",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=9",authorRo,
  l: e: "Product Manager"
},
  {
  id: "5",tit,
  l: e: "How to handle client scope creep?",conte,
  n: t: "I'm working on a project where the client keeps adding requirements...",auth,
  o: r: {
  i,
  d: "user5",na,
  m: e: "David Lin",avat,
  a: r: "http,
  s://i.pravatar.cc/150?img=11",ro,
  l: e: "Freelancer"
}
        author,
  I: d: "user5",catego,
  r: y: "project-help",category,
  I: d: "project-help",ta,
  g: s: ["client-management", "scope", "projects"]
        created,
  A: t: "2025-04-08T,
  1: 0:2,
  0:00Z",updated,
  A: t: "2025-04-08T,
  1: 0:2,
  0:00Z",repli,
  e: s: [],lik,
  e: s: 24,vie,
  w: s: 89,upvot,
  e: s: 24,downvot,
  e: s: 0,replyCou,
  n: t: 7,isPinn,
  e: d: false,isLock,
  e: d: false,isAnswer,
  e: d: true,authorNa,
  m: e: "David Lin",authorAvat,
  a: r: "http,
  s://i.pravatar.cc/150?img=11",authorRo,
  l: e: "Freelancer"
},
  ]
export default function CommunityPage() {
  const { user } = useAuth()
    const [activeTab, setActiveTab] = useState("categories")
    return (<>
      <SEO title="Community Forum | Zion AI Marketplace" description="Join the Zion AI Marketplace community forum. Ask questions, share knowledge, and connect with other AI professionals." keywords="community, forum, discussion, AI marketplace, questions, answers" canonical="htt,
  p: s: //ziontechgroup.com/community"/>
      
      <div className="container py-8">
        <div className="flex flex-col,
  m: d:flex-row items-start m,
  d:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground mt-2">
              Join the conversation, ask questions, and share your knowledge;
            </p>
          </div>
          
          <CreatePostButton />
        </div>
        
        <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="mb-8">
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
              {featuredPosts.map((post) => (<PostCard key={post.id} post={post}/>))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent">
            <div className="space-y-4">
              {recentPosts.map((post) => (<PostCard key={post.id} post={post}/>))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>)
}

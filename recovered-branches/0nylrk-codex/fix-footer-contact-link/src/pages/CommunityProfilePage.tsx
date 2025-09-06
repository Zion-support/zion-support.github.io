 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Mock user data ];
isVerified: true;
isModerator: false 
};
//Mock posts by this user const userPosts: ForumPost[] = [ if (isLoading) {
  return (<AppLayout> <div className="container py-8" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple" ></div> </div> </div> </AppLayout> if (!user) {
  return (<AppLayout> <div className="container py-8" > <h1>User not found</h1> <Button asChild className="mt-4" > <Link to="/community" >Back to Community</Link> </Button> </div> </AppLayout> return (<AppLayout> <SEO title= {
  `$ {
  user.name 
}'s Profile | Community Forum | Zion AI Marketplace` 
}description= {
  `View $ {
  user.name 
}'s profile, posts, and contributions in the Zion AI Marketplace community.` 
}keywords= {
  `community, forum, profile, user profile, $ {
  user.name 
}` 
}/> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <div className="md:col-span-1" > <Card> </svg> </span>) 
}</CardTitle>) 
}</CardHeader> <CardContent className="space-y-6" > <div> </div> <div className="grid grid-cols-2 gap-4" > <Card> </CardContent> </Card> </div> <div className="text-sm text-muted-foreground" > <p>Member since April 2025</p> </div> </CardContent> </Card> </div> <div className="md:col-span-2" > <Tabs defaultValue="posts" > <TabsList> <TabsTrigger value="posts" >Posts</TabsTrigger> <TabsTrigger value="activity" >Recent Activity</TabsTrigger> </TabsList> {
  posts.map ( (post) => (<PostCard key= {
  post.id 
}post= {
  post 
}/>) ) 
}</div>) : (<Card> <CardContent className="p-6 text-center" > <p className="text-muted-foreground" >This user hasn't created any posts yet.</p> </CardContent> </Card>) 
}</TabsContent> <TabsContent value="activity" className="mt-6" > <h2 className="text-xl font-bold mb-4" >Recent Activity</h2> <Card> </div> <div> <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline" >Looking for feedback on my automated testing approach</Link></p> </div> </li> </div> <div> <p>Earned badge <span className="font-medium" >Top Contributor</span></p> </div> </li> </div> <div> <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline" >Comparing different vector embedding models</Link></p> </div> </li> </div> <div> <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline" >Best practices for AI model fine-tuning</Link></p> </div> </li> </div> <div> </div> </li> </ul> </CardContent> </Card> </TabsContent> </Tabs> </div> </div> </div> </AppLayout>) 
}
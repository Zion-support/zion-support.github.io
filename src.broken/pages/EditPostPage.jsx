import { Link, useNavigate, useParams  } from 'react-router-dom';
export default function Page() {
 = useAuth () ;
    const [post, setPost] = useState(mockPost);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // In a real app, we would fetch the post data here
        // For now, we'll just use the mock data
        setIsLoading(false) }, [postId]) ;
    if(isLoading) {
        return (<div className="container py-8">
          <div className="flex justify - center items - center h-64">
            <div className="animate - spin rounded-full h-12 w-12 border-b-2 border-zion -purple"></div>
          </div>
        </div>) }
    if(!post) {
        return (<div className="container py-8">
          <h1 > Post not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>) }
    // Check if the user is the author or an admin
    const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
    if(!isAuthor && !isAdmin) {
        return (<div className="container py-8">
          <h1 className="text-2xl font - bold mb-4">Permission Denied</h1>
          <p className="mb-4">You don't have permission to edit this post.</p>
          <Button asChild>
            <Link to={`/community / post/${postId}`}>Back to Post</Link>
          </Button>
        </div>) }
    const initialValues = {
  title: post.title,
        content: post.content,
        categoryId: post.categoryId,
        tags: post.tags.join(",
  ") ;

};
    const handleSubmit = async(values) => {
        try {
            // Here we would normally update the post in the database
            // For now, we'll just simulate a successful update
            toast({
                title: "Post updated",
                description: "Your post has been updated successfully"
            }) ;
            // Redirect back to the post
            router(`/community / post/${postId}`) ;
        }
        catch(error) {
            toast({
                title: "Error",
                description: "There was a problem updating your post",
                variant: "destructive"
            }) }
    };
    return (<SEO title="Edit Post | Community Forum | Zion AI Marketplace" description="Edit your discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, edit post"/>
        ,
            <div className="container py-8">
        <div className="flex items - center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted - foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted -foreground">/</span>
          <Link to={`/community / post/${postId}`} className="text-sm text-muted - foreground hover:text-foreground">
            Post
          </Link>
          <span className="text-muted -foreground">/</span>
          <span className="text-sm font -medium">Edit</span>
        </div>

        <h1 className="text-3xl font - bold mb-8">Edit Post</h1>

        <PostForm initialValues={initialValues} onSubmit={handleSubmit} isEditing={true}/>
      </div>) }

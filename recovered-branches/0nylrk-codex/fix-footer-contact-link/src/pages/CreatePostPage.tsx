
import PostForm from "@/components/community/PostForm";

interface PostFormValues {_title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;}

export default function CreatePostPage() {_const _navigate = useNavigate();
  const { toast} = useToast();
  const [searchParams] = useSearchParams();
  
  // Get category from window.URL query params if available
  const _initialCategory = searchParams.get("category") as ForumCategory | null;
  
  const initialValues: Partial<PostFormValues> = {_categoryId: initialCategory || "project-help"};

  const _handleSubmit = async (_values: PostFormValues) => {_try {
      // Here we would normally save to the database
      // For now, _we'll just simulate a successful post creation
      
      // Parse tags into an array
      const _tagsArray = values.tags.split(", _").map(tag => tag.trim());
      
      toast({
        title: "Post created", _description: "Your post has been published successfully"});
      
      // Redirect to the forum category
      navigate(`/community/category/${_values.categoryId}`);
    } catch (error) {_toast({
        title: "Error", _description: "There was a problem creating your post", _variant: "destructive"});
    }
  };

  return (
    <AppLayout>
      <SEO 
        title="Create New Post | Community Forum | Zion AI Marketplace"
        description="Create a new discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, create post, new thread"
      />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Create Post</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
        
        <PostForm initialValues={_initialValues} onSubmit={_handleSubmit} />
      </div>
    </AppLayout>
  );
}


<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
=======
import { useState, useEffect } from &quot;react&quot;;
import { Link, useNavigate, useSearchParams } from &quot;react-router-dom&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import PostForm from &quot;@/components/community/PostForm&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { ForumCategory } from &quot;@/types/community&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
}

export default function CreatePostPage() {
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const [searchParams] = useSearchParams(),
  
  // Get category from URL query params if available
<<<<<<< HEAD
  const initialCategory = searchParams.get("category") as ForumCategory | null,
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },
=======
  const initialCategory = searchParams.get(&quot;category&quot;) as ForumCategory | null;
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || &quot;project-help&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      
      // Parse tags into an array
<<<<<<< HEAD
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      
      toast({
        title: "Post created",
        description: "Your post has been published successfully"
      }),
=======
      const tagsArray = values.tags.split(&quot;,&quot;).map(tag => tag.trim());
      
      toast({
        title: &quot;Post created&quot;,
        description: &quot;Your post has been published successfully&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive"
      })
=======
        title: &quot;Error&quot;,
        description: &quot;There was a problem creating your post&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <AppLayout>
      <SEO 
        title=&quot;Create New Post | Community Forum | Zion AI Marketplace&quot;
        description=&quot;Create a new discussion post in the Zion AI Marketplace community forum.&quot;
        keywords=&quot;community, forum, discussion, create post, new thread&quot;
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex items-center gap-3 mb-6&quot;>
          <Link to=&quot;/community&quot; className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>
            Forum
          </Link>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <span className=&quot;text-sm font-medium&quot;>Create Post</span>
        </div>
        
        <h1 className=&quot;text-3xl font-bold mb-8&quot;>Create New Post</h1>
        
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </AppLayout>
  )
}

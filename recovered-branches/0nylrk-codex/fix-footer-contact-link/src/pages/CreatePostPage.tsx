
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleSubmit = async (_values: PostFormValues) => {_try {
      // Here we would normally save to the database
      // For now, _we'll just simulate a successful post creation
      
      // Parse tags into an array
<<<<<<< HEAD
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
=======
      const _tagsArray = values.tags.split(", _").map(tag => tag.trim());
      
      toast({
        title: "Post created", _description: "Your post has been published successfully"});
      
      // Redirect to the forum category
      navigate(`/community/category/${_values.categoryId}`);
    } catch (error) {_toast({
        title: "Error", _description: "There was a problem creating your post", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
        
        <PostForm initialValues={_initialValues} onSubmit={_handleSubmit} />
      </div>
    </AppLayout>
  )
}

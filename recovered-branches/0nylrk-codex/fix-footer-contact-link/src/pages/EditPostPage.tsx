
<<<<<<< HEAD
import { useState, useEffect } from "react",;
import { Link, useNavigate, useParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import PostForm from "@/components/community/PostForm",;
import { useToast } from "@/hooks/use-toast",;
import { ForumPost, ForumCategory } from "@/types/community",;
import { useAuth } from "@/hooks/useAuth",;
;
interface PostFormValues {;
  title:string,;
  content:string,;
  categoryId:ForumCategory,;
  tags:string;
}
;
// Mock post data;
const mockPost:ForumPost = {;
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
;
export default function EditPostPage() {;
  const { postId } = useParams() as { postId?:string },;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const [post, setPost] = useState<ForumPost | null>(mockPost),;
  const [isLoading, setIsLoading] = useState(true),;
  ;
  useEffect(() => {;
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading(false),;
  }, [postId]),;
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
  if (!post) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <h1>Post not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    ),;
  }
  ;
  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post.authorId,;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  ;
  if (!isAuthor && !isAdmin) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <h1 className="text-2xl font-bold mb-4">Permission Denied</h1>;
          <p className="mb-4">You don't have permission to edit this post.</p>;
          <Button asChild>;
            <Link to={`/community/post/${postId}`}>Back to Post</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    ),;
  }
  ;
  const initialValues:Partial<PostFormValues> = {;
    title:post.title,;
    content:post.content,;
    categoryId:post.categoryId as ForumCategory,;
    tags:post.tags.join(", ");
  },;
;
  const handleSubmit = async (values:PostFormValues) => {;
    try {;
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
      ;
      toast({;
        title:"Post updated",;
        description:"Your post has been updated successfully";
      }),;
      ;
      // Redirect back to the post;
      navigate(`/community/post/${postId}`),;
    } catch (error) {;
      toast({;
        title:"Error",;
        description:"There was a problem updating your post",;
        variant:"destructive";
      }),;
    }
  },;
;
  return (;
    <AppLayout>;
      <SEO ;
        title="Edit Post | Community Forum | Zion AI Marketplace";
        description="Edit your discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, edit post";
      />;
      ;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <Link to={`/community/post/${postId}`} className="text-sm text-muted-foreground hover:text-foreground">;
            Post;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Edit</span>;
        </div>;
        ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        ;
        <PostForm ;
          initialValues={initialValues} ;
          onSubmit={handleSubmit} ;
          isEditing={true} ;
        />;
      </div>;
    </AppLayout>;
  ),;
=======
import { useState, useEffect } from "react",
import { Link, useNavigate, useParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",
import { ForumPost, ForumCategory } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string
}

// Mock post data,
const mockPost: ForumPost = {
  id: &quot;1&quot;,
  title: &quot;Best practices for AI model fine-tuning&quot;,
  content: &quot;I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...&quot;,
  authorId: &quot;user1&quot;,
  authorName: &quot;Alex Johnson&quot;,
  authorAvatar: &quot;https://i.pravatar.cc/150?img=3&quot;,
  authorRole: &quot;Verified Talent&quot;,
  categoryId: &quot;ai-tools&quot;,
  tags: [&quot;machine-learning&quot;, &quot;fine-tuning&quot;, &quot;gpt&quot],
  createdAt: &quot;2025-04-01T12:00:00Z&quot;,
  updatedAt: &quot;2025-04-01T12:00:00Z&quot;,
  upvotes: 48,
  downvotes: 2,
  replyCount: 12,
  isAnswered: true,
  isFeatured: true
},

export default function EditPostPage() {
  const { postId } = useParams() as { postId?: string },
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const { user } = useAuth(),
  const [post, setPost] = useState<ForumPost | null>(mockPost),
  const [isLoading, setIsLoading] = useState(true),
  
  useEffect(() => {
    // In a real app, we would fetch the post data here
    // For now, we'll just use the mock data,
setIsLoading(false)
  }, [postId]),
import PostForm from "@/components/community/PostForm";

interface PostFormValues {title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string}

// Mock post data,
const mockPost: ForumPost = {id: "1", title: "Best practices for AI model fine-tuning", content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...", authorId: "user1", authorName: "Alex Johnson", authorAvatar: "https://i.pravatar.cc/150?img=3", authorRole: "Verified Talent", categoryId: "ai-tools", tags: ["machine-learning", _"fine-tuning", _"gpt"], createdAt: "2025-04-01T12:00:00Z", updatedAt: "2025-04-01T12:00:00Z", upvotes: 48, downvotes: 2, replyCount: 12, isAnswered: true, isFeatured: true};

export default function EditPostPage() {const { postId} = useParams() as {postId?: string};
  const navigate = useNavigate();
  const {toast} = useToast();
  const {user} = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect_(() => {_// In a real app, we would fetch the post data here
    // For now, we'll just use the mock data,
setIsLoading(false)}, [postId]);
  
  if (isLoading) {return (
      <AppLayout>
        <div className=&quot;container py-8&quot;>
          <div className=&quot;flex justify-center items-center h-64&quot;>
            <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple&quot;></div>
          </div>
        </div>
      </AppLayout>
    )
  }  
  if (!post) {return (
      <AppLayout>
        <div className=&quot;container py-8&quot;>
          <h1>Post not found</h1>
          <Button asChild className=&quot;mt-4&quot;>
            <Link to=&quot;/community&quot;>Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  
  // Check if the user is the author or an admin,
const isAuthor = user?.id === post.authorId,
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',  
  if (!isAuthor && !isAdmin) {return (
      <AppLayout>
        <div className=&quot;container py-8&quot;>
          <h1 className=&quot;text-2xl font-bold mb-4&quot;>Permission Denied</h1>
          <p className=&quot;mb-4&quot;>You don't have permission to edit this post.</p>
          <Button asChild>
            <Link to={`/community/post/${postId}`}>Back to Post</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  
  const initialValues: Partial<PostFormValues> = {
    title: post.title,
    content: post.content,
    categoryId: post.categoryId as ForumCategory,
    tags: post.tags.join(", ")
  },  const initialValues: Partial<PostFormValues> = {title: post.title, content: post.content, categoryId: post.categoryId as ForumCategory, tags: post.tags.join(", _")};

  const handleSubmit = async (values: PostFormValues) => {try {
      // Here we would normally update the post in the database
      // For now, we'll just simulate a successful update,
toast({
        title: "Post updated",
        description: "Your post has been updated successfully"
      }),      
      // Redirect back to the post,
navigate(`/community/post/${postId}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem updating your post",
        variant: "destructive"
      })        title: "Post updated", description: "Your post has been updated successfully"});
      
      // Redirect back to the post,
navigate(`/community/post/${postId}`)
    } catch (error) {toast({
        title: "Error", description: "There was a problem updating your post", variant: "destructive"})
    }
  },

  return (
    <AppLayout>
      <SEO,
title=&quot;Edit Post | Community Forum | Zion AI Marketplace&quot;
        description=&quot;Edit your discussion post in the Zion AI Marketplace community forum.&quot;
        keywords=&quot;community, forum, discussion, edit post&quot;
      />
      
      <div className=&quot;container py-8&quot;>
        <div className=&quot;flex items-center gap-3 mb-6&quot;>
          <Link to=&quot;/community&quot; className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>
            Forum
          </Link>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <Link to={`/community/post/${postId}`} className=&quot;text-sm text-muted-foreground hover:text-foreground&quot;>            Post
          </Link>
          <span className=&quot;text-muted-foreground&quot;>/</span>
          <span className=&quot;text-sm font-medium&quot;>Edit</span>
        </div>
        
        <h1 className=&quot;text-3xl font-bold mb-8&quot;>Edit Post</h1>
        
        <PostForm,
initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
        />
      </div>
    </AppLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

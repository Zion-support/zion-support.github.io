<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx


<<<<<<< HEAD
=======

import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumPost, ForumCategory} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",
import { Link, useNavigate, useParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { ForumPost, ForumCategory } from "@/types/community";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost, ForumCategory } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
// Mock post data
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export default function EditPostPage() {
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumPost, ForumCategory} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
// Mock post data;
const mockPost: ForumPost = {;
  id: "1",;
  title: "Best practices for AI model fine-tuning",;
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
  authorId: "user1",;
  authorName: "Alex Johnson",;
  authorAvatar: "https://i && i.pravatar.cc/150?img=3",;
  authorRole: "Verified Talent",;
  categoryId: "ai-tools",;
  tags: ["machine-learning", "fine-tuning", "gpt"];
  createdAt: "2025-04-01T12:00:00Z",;
  updatedAt: "2025-04-01T12:00:00Z",;
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 12,;
  isAnswered: true,;
  isFeatured: true;
};
export default function EditPostPage() {;
  const { postId } = useParams() as { postId?: string };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const mockPost: ForumPost = {
  id: "1",
  title: "Best practices for AI model fine-tuning",
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
  authorId: "user1",
  authorName: "Alex Johnson",
  authorAvatar: "https://i.pravatar.cc/150?img=3",
  authorRole: "Verified Talent",
  categoryId: "ai-tools",
  tags: ["machine-learning", "fine-tuning", "gpt"],
  createdAt: "2025-04-01T12:00:00Z",
  updatedAt: "2025-04-01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  replyCount: 12,
  isAnswered: true,
  isFeatured: true
},
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

const mockPost: ForumPost = {
  id: "1"
  title: "Best practices for AI model fine-tuning"
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me..."
  authorId: "user1"
  authorName: "Alex Johnson"
  authorAvatar: "https://i.pravatar.cc/150?img=3"
  authorRole: "Verified Talent"
  categoryId: "ai-tools"
  tags: ["machine-learning", "fine-tuning", "gpt"];
  createdAt: "2025-04-01T12:00:00Z"
  updatedAt: "2025-04-01T12:00:00Z"
  upvotes: 48
  downvotes: 2
  replyCount: 12
  isAnswered: true
  isFeatured: true
}
export default function EditPostPage() {;
  const { postId } = useParams() as { postId?: string };
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
export default function EditPostPage() {
  const { postId } = useParams() as { postId?: string }
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
  const { postId } = useParams() as { postId?: string },
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const { user } = useAuth(),
  const [post, setPost] = useState<ForumPost | null>(mockPost),
  const [isLoading, setIsLoading] = useState(true),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {
    // In a real app, we would fetch the post data here
    // For now, we'll just use the mock data
    setIsLoading(false)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  }, [postId]),
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (isLoading) {
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
  useEffect(() => {;
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading(false);
  }, [postId]);
  if (isLoading) {;
    return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx


  if (!post) {;

========
  if (!post) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
    return (
=======
    ),;
  }
  ;
  if (!post) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <AppLayout>;
        <div className="container py-8">;
          <h1>Post not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }, [postId]);
  }, [postId]),
  
  if (isLoading) {
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
          </div>
        </div>
      </AppLayout>
    )
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!post) {
    return (
      <AppLayout>
        <div className="container py-8">
          <h1>Post not found</h1>
          <Button asChild className="mt-4">
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  // Check if the user is the author or an admin
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const isAuthor = user?.id === post.authorId;
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const isAuthor = user?.id === post.authorId,
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!isAuthor && !isAdmin) {
    return (
      <AppLayout>
        <div className="container py-8">
          <h1 className="text-2xl font-bold mb-4">Permission Denied</h1>
          <p className="mb-4">You don't have permission to edit this post.</p>
          <Button asChild>
            <Link to={`/community/post/${postId}`}>Back to Post</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
  const initialValues: Partial<PostFormValues> = {
    title: post.title
    content: post.content
    categoryId: post.categoryId as ForumCategory
    tags: post.tags.join(", ")
<<<<<<< HEAD
<<<<<<< HEAD

=======
  const isAuthor = user?.id === post.authorId,
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
  


  if (!isAuthor && !isAdmin) {
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post && post.authorId;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  if (!isAuthor && !isAdmin) {;
    return (
=======
    ),;
  }
  ;
  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post.authorId,;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  ;
  if (!isAuthor && !isAdmin) {;
    return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <AppLayout>;
        <div className="container py-8">;
          <h1 className="text-2xl font-bold mb-4">Permission Denied</h1>;
          <p className="mb-4">You don't have permission to edit this post.</p>;
          <Button asChild>;
            <Link to={`/community/post/${postId}`}>Back to Post</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database
      // For now, we'll just simulate a successful update
      toast({
        title: "Post updated"
        description: "Your post has been updated successfully"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      }),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      });
      }),
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      // Redirect back to the post
      navigate(`/community/post/${postId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem updating your post"
        variant: "destructive"
      })
<<<<<<< HEAD


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
  const initialValues: Partial<PostFormValues> = {;
    title: post && post.title,;
    content: post && post.content,;
    categoryId: post && post.categoryId as ForumCategory,;
    tags: post && post.tags.join(", ");
  };
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
      toast({;
        title: "Post updated",;
        description: "Your post has been updated successfully";
      });
      // Redirect back to the post;
      navigate(`/community/post/${postId}`);
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "There was a problem updating your post",;
        variant: "destructive";
      });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
    }
<<<<<<< HEAD
=======
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

    <AppLayout>;

========
  return (
    <AppLayout>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
=======
    }
  }
  },

  return (
    <AppLayout>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <SEO
        title="Edit Post | Community Forum | Zion AI Marketplace"
        description="Edit your discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, edit post"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to={`/community/post/${postId}`} className="text-sm text-muted-foreground hover:text-foreground">
            Post
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Edit</span>
        </div>
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <PostForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isEditing={true}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <PostForm 
          initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        />
      </div>
    </AppLayout>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState, useEffect } from "react",;
import { Link, useNavigate, useParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import PostForm from "@/components/community/PostForm",;
import { useToast } from "@/hooks/use-toast",;
import { ForumPost, ForumCategory } from "@/types/community",;
import { useAuth } from "@/hooks/useAuth",;
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
;
// Mock post data;
const mockPost: ForumPost = {;
  id: "1",;
  title: "Best practices for AI model fine-tuning",;
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;
  authorId: "user1",;
  authorName: "Alex Johnson",;
  authorAvatar: "https://i.pravatar.cc/150?img=3",;
  authorRole: "Verified Talent",;
  categoryId: "ai-tools",;
  tags: ["machine-learning", "fine-tuning", "gpt"],;
  createdAt: "2025-04-01T12:00:00Z",;
  updatedAt: "2025-04-01T12:00:00Z",;
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 12,;
  isAnswered: true,;
  isFeatured: true;
},;
export default function EditPostPage() {;
  const { postId } = useParams() as { postId?: string },;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const [post, setPost] = useState<ForumPost | null>(mockPost),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading(false);
  }, [postId]),;
  if (isLoading) {;
    return (;
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    );
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
    );
  }
;
  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post.authorId,;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
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
    );
  }
;
  const initialValues: Partial<PostFormValues> = {;
    title: post.title,;
    content: post.content,;
    categoryId: post.categoryId as ForumCategory,;
    tags: post.tags.join(", ");
  },;
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
      toast({;
        title: "Post updated",;
        description: "Your post has been updated successfully";
      }),;
      // Redirect back to the post;
      navigate(`/community/post/${postId}`);
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "There was a problem updating your post";
        variant: "destructive";
      });
    }
  };
  return (;
    <AppLayout>;
      <SEO;
        title="Edit Post | Community Forum | Zion AI Marketplace";
        description="Edit your discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, edit post";
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
      />;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        <PostForm
          initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
        />;
      </div>;
    </AppLayout>;
  );

<<<<<<< HEAD
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
import { useState, useEffect } from './react';
import { Link, use_navigate, use_params } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import PostForm from "@/components / community / PostForm";
import { use_toast } from '@/hooks / use - toast';
import { ForumPost, ForumCategory } from '@/types / community';
import { use_auth } from '@/hooks / use_auth';
interface PostFormValues {
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
// Mock post data;
const mock_post: ForumPost = {
  id: "1",
  title: "Best practices for AI model fine - tuning",
  content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
  author_id: "user1",
  author_name: "Alex Johnson",
  author_avatar: "https://i.pravatar.cc / 150?img = 3",
  author_role: "Verified Talent",
  category_id: "ai - tools",
  tags: ["machine - learning", "fine - tuning", "gpt"];
  created_at: "2025 - 04 - 01T12:00:00Z",
  updated_at: "2025 - 04 - 01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  reply_count: 12,
  is_answered: true,
  is_featured: true;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
export default /**
 * EditPostPage - Function description
 */
function EditPostPage() {
  const { post_id } = use_params () as { post_id?: string }
  const navigate = use_navigate ();
  const { toast } = use_toast ();
  const { user } = use_auth ();
  const [post, set_post] = useState < ForumPost | null>(mock_post);
  const [is_loading, setIsLoading] = useState (true);
;
  useEffect (() => {
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading (false);
  }, [post_id]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <div className="flex justify - center items - center h - 64">;
            <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - purple"></div>;
          </div>;
        </div>;
      </AppLayout>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 > Post not found</h1>;
          <Button as_child className="mt - 4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  // Check if the user is the author or an admin;
  const is_author = user?.id === post.author_id;
  const is_admin = user?.user_type === 'admin' || user?.role === 'admin';
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="container py - 8">;
          <h1 className="text - 2xl font - bold mb - 4">Permission Denied</h1>;
          <p className="mb - 4">You don't have permission to edit this post.</p>;
          <Button as_child>;
            <Link to={`/community / post/${post_id}`}>Back to Post</Link>;
          </Button>;
        </div>;
      </AppLayout>);
  }
  const initial_values: Partial < PostFormValues> = {
    title: post.title,
    content: post.content,
    category_id: post.category_id as ForumCategory,
    tags: post.tags.join (", ");
  }
;
  const handle_submit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
      toast ({
        title: "Post updated",
        description: "Your post has been updated successfully";
      });
;
      // Redirect back to the post;
      navigate (`/community / post/${post_id}`);
    } catch (error) {
      toast ({
        title: "Error",
        description: "There was a problem updating your post",
        variant: "destructive";
      });
    }
  }
;
  return (
    <AppLayout>;
      <SEO;
        title="Edit Post | Community Forum | Zion AI Marketplace";
        description="Edit your discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, edit post";
      />;
      <div className="container py - 8">;
        <div className="flex items - center gap - 3 mb - 6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;
            Forum;
          </Link>;
          <span className="text - muted - foreground">/</span>;
          <Link to={`/community / post/${post_id}`} className="text - sm text - muted - foreground hover:text - foreground">;
            Post;
          </Link>;
          <span className="text - muted - foreground">/</span>;
          <span className="text - sm font - medium">Edit</span>;
        </div>;
        <h1 className="text - 3xl font - bold mb - 8">Edit Post</h1>;
        <PostForm;
          initial_values={initial_values}
          on_submit={handle_submit}
          is_editing={true}
        />;
      </div>;
    </AppLayout>);
=======
        ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        ;
        <PostForm ;
=======
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        <PostForm;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          initialValues={initialValues} ;
          onSubmit={handleSubmit} ;
          isEditing={true} ;
        />;
      </div>;
    </AppLayout>;
<<<<<<< HEAD
  ),; interface PostFormValues {
  title: string;
content: string;
categoryId: ForumCategory;
tags: string 
}//Mock post data const mockPost: ForumPost = {
  id: "1";
title: "Best practices for AI model fine-tuning";
content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...";
authorId: "user1";
authorName: "Alex Johnson";
authorAvatar: "https://i.pravatar.cc/150?img=3";
authorRole: "Verified Talent";
categoryId: "ai-tools";
tags: ["machine-learning", "fine-tuning", "gpt" ];
createdAt: "2025-04-01T12:00:00Z";
updatedAt: "2025-04-01T12:00:00Z";
upvotes: 48;
downvotes: 2;
replyCount: 12;
isAnswered: true;
isFeatured: true 
};
export default function EditPostPage () {
  const {
  postId 
}= useParams () as {
  postId?: string 
};
const navigate = useNavigate ();
const {
  toast 
}= useToast ();
const {
  user 
}= useAuth ();
const [post, setPost] = useState<ForumPost | null> (mockPost);
const [isLoading, setIsLoading] = useState (true);
useEffect ( () => {
  //In a real app, we would fetch the post data here //For now, we'll just use the mock data setIsLoading (false) 
}, [postId]);
return (<AppLayout> <div className="container py-8" > <div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple" ></div> </div> </div> </AppLayout> if (!post) {
  return (<AppLayout> <div className="container py-8" > <h1>Post not found</h1> <Button asChild className="mt-4" > <Link to="/community" >Back to Community</Link> </Button> </div> </AppLayout> if (!isAuthor && !isAdmin) {
  return (<AppLayout> <div className="container py-8" > <h1 className="text-2xl font-bold mb-4" >Permission Denied</h1> <p className="mb-4" >You don't have permission to edit this post.</p> <Button asChild> <Link to= {
  `/community/post/$ {
  postId 
}` 
}>Back to Post</Link> </Button> </div> </AppLayout>) 
}try {
  //Here we would normally update the post in the database //For now, we'll just simulate a successful update toast ({
  //Redirect back to the post navigate (`/community/post/$ {
  postId 
}`) 
}catch (error) {
  toast ({
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
return (<AppLayout> <SEO title="Edit Post | Community Forum | Zion AI Marketplace" description="Edit your discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, edit post" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> Post </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Edit</span> </div> <h1 className="text-3xl font-bold mb-8" >Edit Post</h1> <PostForm initialValues= {
  initialValues 
}onSubmit= {
  handleSubmit 
}isEditing= {
  true 
}/> </div> </AppLayout>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/EditPostPage.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

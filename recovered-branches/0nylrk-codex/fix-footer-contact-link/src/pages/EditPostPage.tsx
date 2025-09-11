
<<<<<<< HEAD
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumPost, ForumCategory} from "@/types/community";
import {useAuth} from "@/hooks/useAuth";
import { useState, useEffect } from "react",
import { Link, useNavigate, useParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",


import { ForumPost, ForumCategory } from "@/types/community";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost, ForumCategory } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
// Mock post data
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {
    // In a real app, we would fetch the post data here
    // For now, we'll just use the mock data
    setIsLoading(false)
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [postId]),
  


  if (isLoading) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }, [postId]);
  }, [postId]),
  
  if (isLoading) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {;
    // In a real app, we would fetch the post data here;
    // For now, we'll just use the mock data;
    setIsLoading(false);
  }, [postId]);
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {;
    return (

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
  if (!post) {;
    return (
    ),;
  }
  ;
  if (!post) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }


  if (!post) {;

    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AppLayout>;
        <div className="container py-8">;
          <h1>Post not found</h1>;
          <Button asChild className="mt-4">;
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    );
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    );
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const isAuthor = user?.id === post.authorId;
  const isAdmin = user?.userType === 'admin' |user?.role === 'admin';
  const isAuthor = user?.id === post.authorId,
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
  
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const isAuthor = user?.id === post.authorId,
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',
  


  if (!isAuthor && !isAdmin) {

  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post && post.authorId;
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  if (!isAuthor && !isAdmin) {;
    return (
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
  }
  },

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database
      // For now, we'll just simulate a successful update
      toast({
        title: "Post updated"
        description: "Your post has been updated successfully"
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      


<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
      }),
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Redirect back to the post
      navigate(`/community/post/${postId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem updating your post"
        variant: "destructive"
      })
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const initialValues: Partial<PostFormValues> = {;
    title: post && post.title,;
    content: post && post.content,;
    categoryId: post && post.categoryId as ForumCategory,;
    tags: post && post.tags.join(", ");
  };
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally update the post in the database;
      // For now, we'll just simulate a successful update;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      toast({;
        title: "Post updated",;
        description: "Your post has been updated successfully";
      });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Redirect back to the post;
      navigate(`/community/post/${postId}`);
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "There was a problem updating your post",;
        variant: "destructive";
      });
<<<<<<< HEAD
    }
  }
    }

  },


  return (

    <AppLayout>;

<<<<<<< HEAD
  return (
    <AppLayout>;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  },

  return (
<<<<<<< HEAD
    <AppLayout>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    <AppLayout>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO
        title="Edit Post | Community Forum | Zion AI Marketplace"
        description="Edit your discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, edit post"
<<<<<<< HEAD
<<<<<<< HEAD
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


        <PostForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isEditing={true}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <PostForm 
          initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />
      </div>
    </AppLayout>
  )

<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      />;
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
      />;
=======

      />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD



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
        ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        ;
        <PostForm ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        <PostForm;
          initialValues={initialValues} ;
          onSubmit={handleSubmit} ;
          isEditing={true} ;
        />;
      </div>;
    </AppLayout>;
};
return (<AppLayout> <SEO title="Edit Post | Community Forum | Zion AI Marketplace" description="Edit your discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, edit post" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> Post </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Edit</span> </div> <h1 className="text-3xl font-bold mb-8" >Edit Post</h1> <PostForm initialValues= {
  initialValues 
}onSubmit= {
  handleSubmit 
}isEditing= {
  true 
}/> </div> </AppLayout>) 
}
<<<<<<< HEAD
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

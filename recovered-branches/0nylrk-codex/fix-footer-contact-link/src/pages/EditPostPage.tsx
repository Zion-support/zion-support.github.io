<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",
import { Link, useNavigate, useParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast",
<<<<<<< HEAD

interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
// Mock post data
=======
<<<<<<< HEAD
import { ForumPost, ForumCategory } from "@/types/community";
import { useAuth } from "@/hooks/useAuth";
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string}

// Mock post data
const mockPost: ForumPost = $2;
  title: "Best practices for AI model fine-tuning",
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
  authorId: "user1",
  authorName: "Alex Johnson",
  authorAvatar: "https://i.pravatar.cc/150?img = $2;
  authorRole: "Verified Talent",
  categoryId: "ai-tools",
  tags: ["machine-learning", "fine-tuning", "gpt"],
  createdAt: "2025-04-01T12: 00: 00Z",
  updatedAt: "2025-04-01T12: 00: 00Z",
  upvotes: 48,
  downvotes: 2,
  replyCount: 12,
  isAnswered: true,
  isFeatured: true},

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
export default function EditPostPage() {
  const { postId } = useParams() as { postId?: string },
  const navigate = useNavigate($2);
  const { toast } = useToast($2);
  const { user } = useAuth($2);
  const [post, setPost] = useState<ForumPost | null>(mockPost),
  const [isLoading, setIsLoading] = useState($2);
=======
<<<<<<< HEAD

=======


import { ForumPost, ForumCategory } from "@/types/community";
import { useAuth } from "@/hooks/useAuth";
import { ForumPost, ForumCategory } from "@/types/community",
import { useAuth } from "@/hooks/useAuth",
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
// Mock post data
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
  title: "Best practices for AI model fine-tuning",
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
<<<<<<< HEAD
  const { postId } = useParams() as { postId?: string };  const navigate = useNavigate();
=======
<<<<<<< HEAD
  const { postId } = useParams() as { postId?: string };  const navigate = useNavigate();
=======
  const { postId } = useParams() as { postId?: string };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);

export default function EditPostPage() {;
  const { postId } = useParams() as { postId?: string };  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);

const mockPost: ForumPost = {"
  id: "1","
  title: "Best practices for AI model fine-tuning","
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...","
  authorId: "user1","
  authorName: "Alex Johnson","
  authorAvatar: "https://i.pravatar.cc/150?img=3","
  authorRole: "Verified Talent","
  categoryId: "ai-tools","
  tags: ["machine-learning", "fine-tuning", "gpt"],"
  createdAt: "2025-04-01T12:00:00Z","
  updatedAt: "2025-04-01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  replyCount: 12,
  isAnswered: true,
  isFeatured: true;
},

export default function EditPostPage() { return null; }
  const { postId } = useParams() as { postId?: string };
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [post, setPost] = useState<ForumPost | null>(mockPost);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect(() => {
    // In a real app, we would fetch the post data here
    // For now, we'll just use the mock data
    setIsLoading(false)
<<<<<<< HEAD

  if (isLoading) {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (isLoading) {
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, [postId]),
  


  if (isLoading) {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  if (isLoading) {}
  useEffect(() => {;
    // In a real app, we would fetch the post data here;'
    // For now, we'll just use the mock data;
    setIsLoading(false);
  }, [postId]);
<<<<<<< HEAD

  if (isLoading) {;
    return (
    return (;

  if (isLoading) {;
    return (

=======
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

  if (isLoading) {;
    return (
<<<<<<< HEAD
    return (;

  if (isLoading) {;
    return (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <AppLayout>;
        <div className="container py-8">;
          <div className="flex justify-center items-center h-64">;

            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
  if (!post) {;
    return (
    ),;
  }
  ;
  if (!post) {;
    return (;
=======
    );
  }


  if (!post) {;

    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <AppLayout>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="container py-8">;
          <h1>Post not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD

    );

=======
<<<<<<< HEAD

    );

=======
<<<<<<< HEAD
  }, [postId]);
>>>>>>> merged-prs-20250907-203621
  }, [postId]),
  
  if (isLoading) {
    return (
      <AppLayout>
<<<<<<< HEAD
        <div className = $2;
  const isAdmin = $2;
  if (!isAuthor && !isAdmin) {
    return (
      <AppLayout>
        <div className = $2;
    content: post.content,
    categoryId: post.categoryId as ForumCategory,
    tags: post.tags.join(", ")
  },

=======
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
  if (!post) {
    return (
      <AppLayout>
        <div className="container py-8">
          <h1>Post not found</h1>
          <Button asChild className="mt-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Link to="/community">Back to Community</Link>
          </Button>
        </div>
      </AppLayout>
    )
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
  // Check if the user is the author or an admin
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <p className="mb-4">You don't have permission to edit this post.</p>;
          <Button asChild>;
            <Link to={`/community/post/${postId}`}>Back to Post</Link>;
          </Button>;
        </div>;
      </AppLayout>;
<<<<<<< HEAD

        description: "Your post has been updated successfully"

      // Redirect back to the post

      navigate(`/community/post/${postId}`)
    } catch (error) {}
      toast({"
        title: "Error""
        description: "There was a problem updating your post""
        variant: "destructive"
      })

=======
<<<<<<< HEAD

        description: "Your post has been updated successfully"

=======
  }
  },

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally update the post in the database
      // For now, we'll just simulate a successful update
<<<<<<< HEAD
      
      toast($2);
      // Redirect back to the post
      navigate(`/community/post/${postId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem updating your post"
        variant: "destructive"
      })
    }
=======
      toast({
        title: "Post updated"
        description: "Your post has been updated successfully"

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }),
      


<<<<<<< HEAD
      });
      }),
      
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Redirect back to the post

      navigate(`/community/post/${postId}`)
    } catch (error) {}
      toast({"
        title: "Error""
        description: "There was a problem updating your post""
        variant: "destructive"
      })
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const initialValues: Partial<PostFormValues> = {;
  return (  const initialValues: Partial<PostFormValues> = {;
    title: post && post.title,;
    content: post && post.content,;
    categoryId: post && post.categoryId as ForumCategory,;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
    tags: post && post.tags.join(", ");
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally update the post in the database;'
      // For now, we'll just simulate a successful update;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      });

      // Redirect back to the post;`
<<<<<<< HEAD
      navigate(`/community/post/${postId}`);
    } catch (error) {;

        variant: "destructive";
      });
=======
=======
      toast({;
        title: "Post updated",;
        description: "Your post has been updated successfully";
      });
      // Redirect back to the post;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate(`/community/post/${postId}`);
    } catch (error) {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        variant: "destructive";
      });
    }
<<<<<<< HEAD

=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  },

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

    <AppLayout>;

<<<<<<< HEAD
  }
}
  }
    }

    }

  },

  return (

    <AppLayout>;

  }
}
  }
    }
  }    }

  },

  return (

<<<<<<< HEAD
    <AppLayout>;

  return (
<AppLayout>;
    }
  }
=======
    <AppLayout>;

  return (
<AppLayout>;
=======
<<<<<<< HEAD
  return (
    <AppLayout>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  }
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  return (
    <AppLayout>
<<<<<<< HEAD

  return (
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <SEO
        title="Edit Post | Community Forum | Zion AI Marketplace"
        description="Edit your discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, edit post"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <PostForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isEditing={true}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

        <PostForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isEditing={true}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <PostForm 
          initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        />
      </div>
    </AppLayout>
  )
<<<<<<< HEAD

=======
<<<<<<< HEAD
}
}
;
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD

}
=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from "react",;

import { useAuth } from "@/hooks/useAuth",;

import {useState, useEffect} from "react";""
import {Link, useNavigate, useParams} from "react-router-dom";""
import {AppLayout} from "@/layout/AppLayout";""
import {SEO} from "@/components/SEO";""
import {Button} from "@/components/ui/button";""
import PostForm from "@/components/community/PostForm";""
import {useToast} from "@/hooks/use-toast";""
import {ForumPost, ForumCategory} from "@/types/community";""
import {useAuth} from "@/hooks/useAuth";""
import { useState, useEffect } from "react",""
import { Link, useNavigate, useParams } from "react-router-dom",""
import { AppLayout } from "@/layout/AppLayout",""
import { SEO } from "@/components/SEO",""
import { Button } from "@/components/ui/button",""
import PostForm from "@/components/community/PostForm",""
import { useToast } from "@/hooks/use-toast",""
import { ForumPost, ForumCategory } from "@/types/community";""
import { useAuth } from "@/hooks/useAuth";""
import { ForumPost, ForumCategory } from "@/types/community",""
import { useAuth } from "@/hooks/useAuth","
interface PostFormValues {
  // TODO: Implement
}
  title: string;,
  content: string;
  categoryId: ForumCategory;,
  tags: string;
// Mock post data;"
import {useAuth} from "@/hooks/useAuth";"
pr-12325
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
;
// Mock post data;
const mockPost: ForumPost = {;"
  id: "1",;"
  title: "Best practices for AI model fine-tuning",'"
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;"
  authorId: "user1",;"
  authorName: "Alex Johnson",;"
  authorAvatar: "https://i.pravatar.cc/150?img=3",;"
  authorRole: "Verified Talent",;"
  categoryId: "ai-tools",;"
  tags: ["machine-learning", "fine-tuning", "gpt"],;"
  createdAt: "2025-04-01T12:00:00Z",;"
  updatedAt: "2025-04-01T12:00:00Z",;

// Mock post data;
const mockPost: ForumPost = {;,"
  id: "1",;""
  title: "Best practices for AI model fine-tuning",""
  content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",;""
  authorId: "user1",;""
  authorName: "Alex Johnson",;""
  authorAvatar: "https://i && i.pravatar.cc/150?img=3",;""
  authorRole: "Verified Talent",;""
  categoryId: "ai-tools",;""
  tags: ["machine-learning", "fine-tuning", "gpt"];""
  createdAt: "2025-04-01T12:00:00Z",;""
  updatedAt: "2025-04-01T12:00:00Z",;"
pr-12325
  upvotes: 48,;
  downvotes: 2,;
  replyCount: 12,;
  isAnswered: true,;
  isFeatured: true;
},;
export default function EditPostPage() { return null; }
  const { postId } = useParams() as { postId?: string },;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const { user } = useAuth(),;
  const [post, setPost] = useState<ForumPost | null>(mockPost),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    // In a real app, we would fetch the post data here;'
    // For now, we'll just use the mock data;
    setIsLoading(false);
  }, [postId]),;
  if (isLoading) {;
    return (;
      <AppLayout>;"
        <div className="container py-8">;"
          <div className="flex justify-center items-center h-64">;"
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
          </div>;
        </div>;
      </AppLayout>;
    );
  }
;
  if (!post) {;
    return (;
      <AppLayout>;"
        <div className="container py-8">;
          <h1>Post not found</h1>;"
          <Button asChild className="mt-4">;"
            <Link to="/community">Back to Community</Link>;
          </Button>;
        </div>;
      </AppLayout>;
    );
  }
;
  // Check if the user is the author or an admin;
  const isAuthor = user?.id === post.authorId,;'
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin',;
  if (!isAuthor && !isAdmin) {;
    return (;
      <AppLayout>;"
        <div className="container py-8">;"
          <h1 className="text-2xl font-bold mb-4">Permission Denied</h1>;'"
          <p className="mb-4">You don't have permission to edit this post.</p>;

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
    categoryId: post.categoryId as ForumCategory,;"
    tags: post.tags.join(", ");
  },;
<<<<<<< HEAD
    }
=======
  const handleSubmit = async (values: PostFormValues) => {;
>>>>>>> origin/chore/fix-lint-and-merge
    try {;
      // Here we would normally update the post in the database;'
      // For now, we'll just simulate a successful update;

      }),;
      // Redirect back to the post;`
      navigate(`/community/post/${postId}`);
    } catch (error) {;

        variant: "destructive";
      });
    }
  };
  return (;
    <AppLayout>;
      <SEO;"
        title="Edit Post | Community Forum | Zion AI Marketplace";"
        description="Edit your discussion post in the Zion AI Marketplace community forum.";"
        keywords="community, forum, discussion, edit post";
<<<<<<< HEAD

=======
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

<<<<<<< HEAD
=======
      />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"`
          <Link to={`/community/post/${postId}`} className="text-sm text-muted-foreground hover:text-foreground">;
            Post;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">Edit</span>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
        </div>;
<<<<<<< HEAD
=======

        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;

        <PostForm
          initialValues={initialValues} 
          onSubmit={handleSubmit} 
          isEditing={true} 
        />;
      </div>;
    </AppLayout>;
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState, useEffect } from './react';
import { Link, use_navigate, use_params } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import PostForm from "@/components / community / PostForm";
import { use_toast } from '@/hooks / use - toast';
import { ForumPost, ForumCategory } from '@/types / community';

import { use_auth } from '@/hooks / use_auth';
interface PostFormValues {}
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
// Mock post data;
const mock_post: ForumPost = {"
  id: "1","
  title: "Best practices for AI model fine - tuning",'"
  content: "I've been working on fine - tuning models for specific tasks and wanted to share some approaches that have worked well for me...","
  author_id: "user1","
  author_name: "Alex Johnson","
  author_avatar: "https://i.pravatar.cc / 150?img = 3","
  author_role: "Verified Talent","
  category_id: "ai - tools","
  tags: ["machine - learning", "fine - tuning", "gpt"];"
  created_at: "2025 - 04 - 01T12:00:00Z","
  updated_at: "2025 - 04 - 01T12:00:00Z",
  upvotes: 48,
  downvotes: 2,
  reply_count: 12,
  is_answered: true,
  is_featured: true;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        ;
        <PostForm ;
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>;
        <PostForm;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    );"
        <PostForm ;"

          initialValues={initialValues} ;
          onSubmit={handleSubmit} ;
          isEditing={true} ;

return (<AppLayout> <SEO title="Edit Post | Community Forum | Zion AI Marketplace" description="Edit your discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, edit post" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum  Post  <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Edit</span> </div> <h1 className="text-3xl font-bold mb-8" >Edit Post</h1> <PostForm initialValues= {"
)
}/> </div> ) "`;
pr-12325
        />;
</PostForm>
<<<<<<< HEAD
=======
=======
          initialValues={initialValues} ;
          onSubmit={handleSubmit} ;
          isEditing={true} ;
        />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
});
}
;
=======
<<<<<<< HEAD
});
}
;
=======
}
<<<<<<< HEAD
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

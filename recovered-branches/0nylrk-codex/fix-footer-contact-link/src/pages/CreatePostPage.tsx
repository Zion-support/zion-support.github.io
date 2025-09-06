
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumCategory} from "@/types/community";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
=======
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function CreatePostPage() {
<<<<<<< HEAD

  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null;
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory |"project-help"
  }
=======
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const [searchParams] = useSearchParams(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null,
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      // Parse tags into an array
<<<<<<< HEAD
      const tagsArray = values.tags.split(",").map(tag => tag.trim());
=======
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      toast({
        title: "Post created"
        description: "Your post has been published successfully"
<<<<<<< HEAD
      });
=======
      }),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem creating your post"
        variant: "destructive"
      })
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </AppLayout>
  )
<<<<<<< HEAD
}
=======
import { useState, useEffect } from "react",;
import { Link, useNavigate, useSearchParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import PostForm from "@/components/community/PostForm",;
import { useToast } from "@/hooks/use-toast",;
import { ForumCategory } from "@/types/community",;
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
;
export default function CreatePostPage() {;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const [searchParams] = useSearchParams(),;
  // Get category from URL query params if available;
  const initialCategory = searchParams.get("category") as ForumCategory | null,;
  const initialValues: Partial<PostFormValues> = {;
    categoryId: initialCategory || "project-help";
  },;
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally save to the database;
      // For now, we'll just simulate a successful post creation;
      // Parse tags into an array;
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),;
      toast({;
        title: "Post created",;
        description: "Your post has been published successfully";
      }),;
      // Redirect to the forum category;
      navigate(`/community/category/${values.categoryId}`);
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "There was a problem creating your post";
        variant: "destructive";
      });
    }
  };
  return (;
    <AppLayout>;
      <SEO;
        title="Create New Post | Community Forum | Zion AI Marketplace";
        description="Create a new discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, create post, new thread";
      />;
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Create Post</span>;
        </div>;
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

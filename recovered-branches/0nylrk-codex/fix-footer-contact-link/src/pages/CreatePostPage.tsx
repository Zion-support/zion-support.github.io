
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}





      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      

      toast({
        title: "Post created"
        description: "Your post has been published successfully"

      }),
      


      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem creating your post"
        variant: "destructive"
      })


import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumCategory} from "@/types/community";
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}

export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
    }
  }
    }

  },


  return (

    <AppLayout>;

  return (
    <AppLayout>;
export default function CreatePostPage() {

=======  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null;
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory |"project-help"
  }
  const navigate = useNavigate(),
  const { toast } = useToast(),
  const [searchParams] = useSearchParams(),
  
  // Get category from URL query params if available
  const initialCategory = searchParams.get("category") as ForumCategory | null,
  
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },


      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      

      toast({
        title: "Post created"
        description: "Your post has been published successfully"

      }),
      

=======      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
        title: "Error"
        description: "There was a problem creating your post"
        variant: "destructive"
      })
  return (
    <AppLayout>
=======
=======
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumCategory} from "@/types/community";
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}

export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  // Get category from URL query params if available;
  const initialCategory = searchParams && searchParams.get("category") as ForumCategory | null;

  const initialValues: Partial<PostFormValues> = {;
    categoryId: initialCategory || "project-help";
  };

  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally save to the database;
      // For now, we'll just simulate a successful post creation;

      // Parse tags into an array;
      const tagsArray = values && values.tags.split(",").map(tag => tag && tag.trim());

      toast({;
        title: "Post created",;
        description: "Your post has been published successfully";
      });

      // Redirect to the forum category;
      navigate(`/community/category/${values && values.categoryId}`);
    } catch (error) {;
      toast({;
        title: "Error",;
        description: "There was a problem creating your post",;
        variant: "destructive";
      });

    }
  }
  },

=======
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

    <AppLayout>;


}
=======

=======
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
import { useState, useEffect } from "react",;
import { Link, useNavigate, useSearchParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import PostForm from "@/components/community/PostForm",;
import { useToast } from "@/hooks/use-toast",;
import { ForumCategory } from "@/types/community",;
;
interface PostFormValues {;
  title:string,;
  content:string,;
  categoryId:ForumCategory,;
  tags:string;
}
;
export default function CreatePostPage() {;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const [searchParams] = useSearchParams(),;
  ;
  // Get category from URL query params if available;
  const initialCategory = searchParams.get("category") as ForumCategory | null,;
  ;
  const initialValues:Partial<PostFormValues> = {;
    categoryId:initialCategory || "project-help";
  },;
;
  const handleSubmit = async (values:PostFormValues) => {;
    try {;
      // Here we would normally save to the database;
      // For now, we'll just simulate a successful post creation;
      ;
      // Parse tags into an array;
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),;
      ;
      toast({;
        title:"Post created",;
        description:"Your post has been published successfully";
      }),;
      ;
      // Redirect to the forum category;
      navigate(`/community/category/${values.categoryId}`),;
    } catch (error) {;
      toast({;
        title:"Error",;
        description:"There was a problem creating your post",;
        variant:"destructive";
      }),;
    }
  },;
;
  return (;
    <AppLayout>;
      <SEO ;
        title="Create New Post | Community Forum | Zion AI Marketplace";
        description="Create a new discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, create post, new thread";
      />;
      ;
      />;
=======

      />;
=======

      />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="container py-8">;
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Create Post</span>;
        </div>;
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
=======

        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { useState, useEffect } from './react';
import { Link, use_navigate, useSearchParams } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import PostForm from "@/components / community / PostForm";
import { use_toast } from '@/hooks / use - toast';
import { ForumCategory } from '@/types / community';
interface PostFormValues {
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
export default /**
 * CreatePostPage - Function description
 */
function CreatePostPage() {
  const navigate = use_navigate ();
  const { toast } = use_toast ();
  const [search_params] = useSearchParams ();
;
  // Get category from URL query params if available;
  const initial_category = search_params.get ("category") as ForumCategory | null;
;
  const initial_values: Partial < PostFormValues> = {
    category_id: initial_category || "project - help";
  }
;
  const handle_submit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database;
      // For now, we'll just simulate a successful post creation;
      // Parse tags into an array;
      const tags_array = values.tags.split (", ").map (tag => tag.trim ());
;
      toast ({
        title: "Post created",
        description: "Your post has been published successfully";
      });
;
      // Redirect to the forum category;
      navigate (`/community / category/${values.category_id}`);
    } catch (error) {
      toast ({
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive";
      });
    }
  }
;
  return (
    <AppLayout>;
      <SEO;
        title="Create New Post | Community Forum | Zion AI Marketplace";
        description="Create a new discussion post in the Zion AI Marketplace community forum.";
        keywords="community, forum, discussion, create post, new thread";
      />;
      <div className="container py - 8">;
        <div className="flex items - center gap - 3 mb - 6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;
            Forum;
          </Link>;
          <span className="text - muted - foreground">/</span>;
          <span className="text - sm font - medium">Create Post</span>;
        </div>;
        <h1 className="text - 3xl font - bold mb - 8">Create New Post</h1>;
        <PostForm initial_values={initial_values} on_submit={handle_submit} />;
      </div>;
    </AppLayout>);
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

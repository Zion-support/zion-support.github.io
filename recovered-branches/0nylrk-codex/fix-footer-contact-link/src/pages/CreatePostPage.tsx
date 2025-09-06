<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}





  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      // Parse tags into an array


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

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
=======
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import PostForm from "@/components/community/PostForm";
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
<<<<<<< HEAD
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface PostFormValues {
  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;
}
<<<<<<< HEAD

export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
export default function CreatePostPage() {

  const navigate = useNavigate();
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
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },

  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      // Parse tags into an array

      toast({
        title: "Post created"
        description: "Your post has been published successfully"

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
interface PostFormValues {;
  title: string,;
  content: string,;
  categoryId: ForumCategory,;
  tags: string;
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

  tags: string}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default function CreatePostPage() {;
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
<<<<<<< HEAD
export default function CreatePostPage() {

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  }
=======
=======
    }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


  return (

    <AppLayout>;

<<<<<<< HEAD
=======
  return (
    <AppLayout>;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function CreatePostPage() {

  const navigate = useNavigate();
  const { toast } = useToast();
<<<<<<< HEAD
  const [searchParams] = useSearchParams();
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  // Get category from URL query params if available
=======
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();  // Get category from URL query params if available
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [searchParams] = useSearchParams();  // Get category from URL query params if available
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const initialCategory = searchParams.get("category") as ForumCategory | null;

  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help",
  };

  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation

      // Parse tags into an array
      const tagsArray = values.tags.split(",").map((tag) => tag.trim());

      toast({
        title: "Post created",
        description: "Your post has been published successfully",
      });

      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive",
      });
    }
  }
    }
  }
    }

  },

  return (
    <AppLayout>
      <SEO
        title="Create New Post | Community Forum | Zion AI Marketplace"
        description="Create a new discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, create post, new thread"
<<<<<<< HEAD
<<<<<<< HEAD
      />

      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/community"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Create Post</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </AppLayout>
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD

      />;

=======
      />;

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="container py-8">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="flex items-center gap-3 mb-6">;
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text-muted-foreground">/</span>;
          <span className="text-sm font-medium">Create Post</span>;
        </div>;
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
      <div className="container py-8">;
        <div className="flex items - center gap - 3 mb-6">;
          <Link to="/community" className="text - sm text - muted - foreground hover:text-foreground">;
            Forum;
          </Link>;
          <span className="text - muted-foreground">/</span>;
          <span className="text - sm font-medium">Create Post</span>;
        </div>;
        <h1 className="text - 3xl font - bold mb-8">Create New Post</h1>;
        <PostForm initial_values={initial_values} on_submit={handle_submit} />;
      </div>;
    </AppLayout>);
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        ;
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
        ;
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
  ),; interface PostFormValues {
  title: string;
content: string;
categoryId: ForumCategory;
tags: string 
}export default function CreatePostPage () {
  const navigate = useNavigate ();
const {
  toast 
}= useToast ();
const [searchParams] = useSearchParams ();
//Get category from URL query params if available try {
  //Here we would normally save to the database //For now, we'll just simulate a successful post creation //Parse tags into an array //Redirect to the forum category navigate (`/community/category/$ {
  values.categoryId 
}`) 
}catch (error) {
  toast ({
  
}
;

};
return (<AppLayout> <SEO title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Create Post</span> </div> <h1 className="text-3xl font-bold mb-8" >Create New Post</h1> <PostForm initialValues= {
  initialValues 
}onSubmit= {
  handleSubmit 
}/> </div> </AppLayout>) 
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

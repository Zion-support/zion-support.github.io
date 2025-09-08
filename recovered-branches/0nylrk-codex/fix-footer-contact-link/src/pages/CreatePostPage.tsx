
<<<<<<< HEAD


interface PostFormValues {


  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}



=======
interface PostFormValues {
  }
  "title": string;
    "content": string,
"categoryId": ForumCategory,
"tags": string}
export default function CreatePostPage() {;
  }
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
export default function CreatePostPage() {
  }
  const [searchParams] = useSearchParams();  // Get category from URL query params if available,
const initialCategory = searchParams.get("category") as ForumCategory | null;"
  const "initialValues": Partial<PostFormValues> = {
    }
    "categoryId": initialCategory || "project-help"};"
  const handleSubmit = async ("values": PostFormValues) => {
    }
  const handleSubmit = async (values: PostFormValues) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      // Parse tags into an array
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
<<<<<<< HEAD
import PostForm from "@/components/community/PostForm";
import {useToast} from "@/hooks/use-toast";
import {ForumCategory} from "@/types/community";
=======

import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

interface PostFormValues {

  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;
}

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
<<<<<<< HEAD
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
=======

import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
interface PostFormValues {

export default function CreatePostPage() { return null; }
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  },

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <AppLayout>;

<<<<<<< HEAD
  return (
    <AppLayout>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function CreatePostPage() {

  const navigate = useNavigate();
  const { toast } = useToast();
<<<<<<< HEAD
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


=======

  // Get category from URL query params if available

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
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
>>>>>>> origin/cursor/delete-old-data-records-6bba
        title: "Error"
        description: "There was a problem creating your post"
        variant: "destructive"
      })
<<<<<<< HEAD


        keywords="community, forum, discussion, create post, new thread"



}



=======
export default function CreatePostPage() {

  const navigate = useNavigate();
  const { toast } = useToast();

  // Get category from URL query params if available

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

  },

  return (
    <AppLayout>
      <SEO"
        title="Create New Post | Community Forum | Zion AI Marketplace""
        description="Create a new discussion post in the Zion AI Marketplace community forum.""

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

        <div className="flex items-center gap-3 mb-6">;

          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">Create Post</span>;
        </div>;

        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
  );
}
import { useState, useEffect } from './react';
import { Link, use_navigate, useSearchParams } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import PostForm from "@/components / community / PostForm";
import { use_toast } from '@/hooks / use - toast';

import { ForumCategory } from '@/types / community';
interface PostFormValues {}
  title: string,
  content: string,
  category_id: ForumCategory,
  tags: string;
}
export default /**;
 * CreatePostPage - Function description;
 */
function CreatePostPage() {}
  const navigate = use_navigate ();
  const { toast } = use_toast ();
  const [search_params] = useSearchParams ();
;

        ;"

;
        ;

        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
        ;

    <AppLayout>

</AppLayout>
      <SEO;"
        title="Create New Post | Community Forum | Zion AI Marketplace"""
        description="Create a new discussion post in the Zion AI Marketplace community forum."""
        keywords="community, forum, discussion, create post, new thread""
      />

"
      <div className="container py-8">"
</div>"
        <div className="flex items-center gap-3 mb-6">"
</div>
          <Link;"
            to="/community"""
            className="text-sm text-muted-foreground hover:text-foreground""
          >

          <span className="text-muted-foreground">/</span>""
          <span className="text-sm font-medium">Create Post</span>"
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>"
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />

  const initialValues: Partial<PostFormValues> = {;

    <AppLayout>;

        title="Create New Post | Community Forum | Zion AI Marketplace";""
        description="Create a new discussion post in the Zion AI Marketplace community forum.";""
        keywords="community, forum, discussion, create post, new thread";"
      />;

      <div className="container py-8">;"
        <div className="flex items-center gap-3 mb-6">;"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;"

          ;"
          <span className="text-muted-foreground">/</span>;""
          <span className="text-sm font-medium">Create Post</span>;"
        </div>;"
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;"
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;

      </div>;
    ;
  const initial_values: Partial < PostFormValues> = {,"
  category_id: initial_category || "project - help";"
  const handle_submit = async (values: PostFormValues) => {
    try {
  // TODO: Implement
      // Here we would normally save to the database;"
      // For now, we'll just simulate a successful post creation;
      // Parse tags into an array;
      const tags_array = values.tags.split (", ").map (tag => tag.trim ());"
      toast ({"
        title: "Post created",""
        description: "Your post has been published successfully";")
      });
      // Redirect to the forum category;
      navigate (`/community / category/${values.category_id}`);
    } catch (error) {
        title: "Error",""
        description: "There was a problem creating your post",""
        variant: "destructive";")
  return (

      <div className="container py - 8">;"
        <div className="flex items - center gap - 3 mb - 6">;"
          <Link to="/community" className="text - sm text - muted - foreground hover:text - foreground">;"

          <span className="text - muted - foreground">/</span>;""
          <span className="text - sm font - medium">Create Post</span>;"
        <h1 className="text - 3xl font - bold mb - 8">Create New Post</h1>;"
        <PostForm initial_values={initial_values} on_submit={handle_submit} />;

      </div>;)
    );"

return (<AppLayout> <SEO title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum  <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Create Post</span> </div> <h1 className="text-3xl font-bold mb-8" >Create New Post</h1> <PostForm initialValues= {"
)
}/> </div> ) "`;
pr-12325
    </AppLayout>);
}
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

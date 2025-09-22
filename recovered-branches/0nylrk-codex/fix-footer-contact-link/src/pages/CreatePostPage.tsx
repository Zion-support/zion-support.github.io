<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import PostForm from "@/components/community/PostForm";
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
import { useToast } from "@/hooks/use-toast",
import { ForumCategory } from "@/types/community",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
interface PostFormValues {
=======
import { useState, useEffect } from "react";"
import { Link, useNavigate, useSearchParams } from "react-router-dom";"
import { AppLayout } from "@/layout/AppLayout";"
import { SEO } from "@/components/SEO";"
import { Button } from "@/components/ui/button";"
import PostForm from "@/components/community/PostForm";"
import { useToast } from "@/hooks/use-toast";"
import { ForumCategory } from "@/types/community";
interface PostFormValues {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;
}
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
=======
import PostForm from "@/components/community/PostForm";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
interface PostFormValues {
title: string
  content: string
  categoryId: ForumCategory

  tags: string}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export default function CreatePostPage() { return null; }
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
    }

  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (

    <AppLayout>;
export default function CreatePostPage() {

  const navigate = useNavigate();
  const { toast } = useToast();
const [searchParams] = useSearchParams();
  // Get category from URL query params if available
=======
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();  // Get category from URL query params if available
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [searchParams] = useSearchParams();  // Get category from URL query params if available
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  // Get category from URL query params if available
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },
=======

interface PostFormValues {

  title: string
  content: string
  categoryId: ForumCategory

  tags: string}

import { useState, useEffect } from "react";""
import { Link, useNavigate, useSearchParams } from "react-router-dom";""
import { AppLayout } from "@/layout/AppLayout";""
import { SEO } from "@/components/SEO";""
import { Button } from "@/components/ui/button";""
import PostForm from "@/components/community/PostForm";""
import { useToast } from "@/hooks/use-toast";""
import { ForumCategory } from "@/types/community";"
interface PostFormValues {
  // TODO: Implement
}
  title: string;,
  content: string;
  categoryId: ForumCategory;,
  tags: string;
pr-12325
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
    <AppLayout>
      <SEO"
        title="Create New Post | Community Forum | Zion AI Marketplace""
        description="Create a new discussion post in the Zion AI Marketplace community forum.""
        keywords="community, forum, discussion, create post, new thread"
<<<<<<< HEAD
      />
"
      <div className="container py-8">"
        <div className="flex items-center gap-3 mb-6">
          <Link"
            to="/community""
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Forum;
          </Link>"
          <span className="text-muted-foreground">/</span>"
          <span className="text-sm font-medium">Create Post</span>
        </div>
"
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
export default function CreatePostPage() { return null; }
  const { toast } = useToast(),;
  const [searchParams] = useSearchParams(),;
  // Get category from URL query params if available;"
  const initialCategory = searchParams.get("category") as ForumCategory | null,;
  const initialValues: Partial<PostFormValues> = {;"
    categoryId: initialCategory || "project-help";
  },;
  const handleSubmit = async (values: PostFormValues) => {;
    try {;
      // Here we would normally save to the database;
      // For now, we'll just simulate a successful post creation;
      // Parse tags into an array;"
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),;
      toast({;"
        title: "Post created",;"
        description: "Your post has been published successfully";
      }),;
      // Redirect to the forum category;
      navigate(`/community/category/${values.categoryId}`);
    } catch (error) {;
      toast({;"
        title: "Error",;"
        description: "There was a problem creating your post";"
        variant: "destructive";
      });
    }
  };
  return (;
    <AppLayout>;
      <SEO;"
        title="Create New Post | Community Forum | Zion AI Marketplace";"
        description="Create a new discussion post in the Zion AI Marketplace community forum.";"
        keywords="community, forum, discussion, create post, new thread";
/>;
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
      <div className="container py-8">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="flex items-center gap-3 mb-6">;
=======
"
      <div className="container py-8">;"
        <div className="flex items-center gap-3 mb-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
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
// Get category from URL query params if available;
  const initial_category = search_params.get ("category") as ForumCategory | null;
;
  const initial_values: Partial < PostFormValues> = {
    category_id: initial_category || "project - help";

  // Get category from URL query params if available;"
  const initialCategory = searchParams.get("category") as ForumCategory | null;"
  const initialValues: Partial<PostFormValues> = {
</PostFormValues>
    <AppLayout>
</AppLayout>
      <SEO;"
        title="Create New Post | Community Forum | Zion AI Marketplace"""
        description="Create a new discussion post in the Zion AI Marketplace community forum."""
        keywords="community, forum, discussion, create post, new thread""
      />
</SEO>
"
      <div className="container py-8">"
</div>"
        <div className="flex items-center gap-3 mb-6">"
</div>
          <Link;"
            to="/community"""
            className="text-sm text-muted-foreground hover:text-foreground""
          >
</Link>
          </Link>"
          <span className="text-muted-foreground">/</span>""
          <span className="text-sm font-medium">Create Post</span>"
        </div>
"
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>"
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
</PostForm>
      </div>
    </AppLayout>
  const initialValues: Partial<PostFormValues> = {;
</PostFormValues>
    <AppLayout>;
</AppLayout>
      <SEO;"
        title="Create New Post | Community Forum | Zion AI Marketplace";""
        description="Create a new discussion post in the Zion AI Marketplace community forum.";""
        keywords="community, forum, discussion, create post, new thread";"
      />;
</SEO>
"
      <div className="container py-8">;"
</div>"
        <div className="flex items-center gap-3 mb-6">;"
</div>"
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;"
</Link>
          </Link>;"
          <span className="text-muted-foreground">/</span>;""
          <span className="text-sm font-medium">Create Post</span>;"
        </div>;"
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;"
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
</PostForm>
      </div>;
    </AppLayout>;
  const initial_values: Partial < PostFormValues> = {,"
  category_id: initial_category || "project - help";"

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

  // TODO: Implement
}
      // Here we would normally save to the database;"
      // For now, we'll just simulate a successful post creation;'
      // Parse tags into an array;'
      const tags_array = values.tags.split (", ").map (tag => tag.trim ());"
;
      toast ({"
        title: "Post created",""
        description: "Your post has been published successfully";")

      });
;
      // Redirect to the forum category;
      navigate (`/community / category/${values.category_id}`);
    } catch (error) {
      toast ({
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive";

      toast ({"
        title: "Error",""
        description: "There was a problem creating your post",""
        variant: "destructive";")

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
<<<<<<< HEAD

        ;"

;
        ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
        ;
<PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
),; interface PostFormValues {}
  title: string;
content: string;
categoryId: ForumCategory;
tags: string;
}export default function CreatePostPage () {};
  const navigate = useNavigate ();
const {}
  toast;
}= useToast ();
const [searchParams] = useSearchParams ();
//Get category from URL query params if available try {'`
  //Here we would normally save to the database //For now, we'll just simulate a successful post creation //Parse tags into an array //Redirect to the forum category navigate (`/community/category/$ {}
  values.categoryId;`
}`) 
}catch (error) {}
  toast ({}
}
;

};"
return (<AppLayout> <SEO title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Create Post</span> </div> <h1 className="text-3xl font-bold mb-8" >Create New Post</h1> <PostForm initialValues= {}
  initialValues;
}onSubmit= {}
  handleSubmit;
}/> </div> </AppLayout>) 
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
=======
  // Get category from URL query params if available;"
  const initialCategory = searchParams.get("category") as ForumCategory | null;"
  const initialValues: Partial<PostFormValues> = {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

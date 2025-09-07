<<<<<<< HEAD
interface PostFormValues {
=======
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",
import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
interface PostFormValues {
  title: string,
  content: string,
  categoryId: ForumCategory,
  tags: string}

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}
export default function CreatePostPage() {
  const navigate = useNavigate($2);
  const { toast } = useToast($2);
  const [searchParams] = useSearchParams($2);
  // Get category from URL query params if available
  const initialCategory = $2;
  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help"
  },

  const handleSubmit = async (values: PostFormValues) => {
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface PostFormValues {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
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
=======

  title: string
  content: string
  categoryId: ForumCategory

  tags: string
}

<<<<<<< HEAD
  const handleSubmit = async (values: PostFormValues) => {
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======




<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSubmit = async (values: PostFormValues) => {
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
      // Parse tags into an array
<<<<<<< HEAD
=======
<<<<<<< HEAD
      const tagsArray = values.tags.split(",").map(tag = $2;
      toast($2);
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
<<<<<<< HEAD

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

import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",

import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
interface PostFormValues {

export default function CreatePostPage() { return null; }
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

  },

<<<<<<< HEAD
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

    <AppLayout>;

<<<<<<< HEAD
=======
  return (
    <AppLayout>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function CreatePostPage() {

  const navigate = useNavigate();
  const { toast } = useToast();
<<<<<<< HEAD

  // Get category from URL query params if available

  const initialCategory = searchParams.get("category") as ForumCategory | null;

  const initialValues: Partial<PostFormValues> = {
    categoryId: initialCategory || "project-help",
  };

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSubmit = async (values: PostFormValues) => {
    try {
      // Here we would normally save to the database
      // For now, we'll just simulate a successful post creation
<<<<<<< HEAD

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
=======
      // Parse tags into an array
<<<<<<< HEAD
      const tagsArray = values.tags.split(",").map(tag => tag.trim());
      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      
      toast({
        title: "Post created"
        description: "Your post has been published successfully"
      });
      }),
      
=======


      const tagsArray = values.tags.split(",").map(tag => tag.trim()),
      

      toast({
        title: "Post created"
        description: "Your post has been published successfully"

      }),
      


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Redirect to the forum category
      navigate(`/community/category/${values.categoryId}`)
    } catch (error) {
      toast({
>>>>>>> merged-prs-20250907-203621
        title: "Error"
        description: "There was a problem creating your post"
        variant: "destructive"
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  }
  },

  return (
    <AppLayout>
=======

import {useState, useEffect} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";

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

import { useState, useEffect } from "react",
import { Link, useNavigate, useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import PostForm from "@/components/community/PostForm",

import { useToast } from "@/hooks/use-toast";
import { ForumCategory } from "@/types/community";
interface PostFormValues {

export default function CreatePostPage() { return null; }
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

    }

  },

  return (

    <AppLayout>;

<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title: "Error",
        description: "There was a problem creating your post",
        variant: "destructive",
      });
    }
  }
    }

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }

  },

  return (
    <AppLayout>
<<<<<<< HEAD
      <SEO"
        title="Create New Post | Community Forum | Zion AI Marketplace""
        description="Create a new discussion post in the Zion AI Marketplace community forum.""
        keywords="community, forum, discussion, create post, new thread"

        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </AppLayout>

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
=======
<<<<<<< HEAD
      <SEO
        title="Create New Post | Community Forum | Zion AI Marketplace"
        description="Create a new discussion post in the Zion AI Marketplace community forum."
        keywords="community, forum, discussion, create post, new thread"
=======
      <SEO"
        title="Create New Post | Community Forum | Zion AI Marketplace""
        description="Create a new discussion post in the Zion AI Marketplace community forum.""
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <SEO
        title="Create New Post | Community Forum | Zion AI Marketplace"
        description="Create a new discussion post in the Zion AI Marketplace community forum."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        keywords="community, forum, discussion, create post, new thread"
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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


}
=======

        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </AppLayout>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        title: "Post created","
        description: "Your post has been published successfully";
      }),;
      // Redirect to the forum category;
      navigate(`/community/category/${values.categoryId}`);
    } catch (error) {;
      toast({;"
        title: "Error","
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
;
export default function CreatePostPage() {;
  const navigate = useNavigate(),;
  const { toast } = useToast(),;
  const [searchParams] = useSearchParams(),;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="container py-8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className="flex items-center gap-3 mb-6">;

          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">;
            Forum;
          </Link>;"
          <span className="text-muted-foreground">/</span>;"
          <span className="text-sm font-medium">Create Post</span>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;
=======

<<<<<<< HEAD
=======
        <h1 className="text-3xl font-bold mb-8">Create New Post</h1>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />;
      </div>;
    </AppLayout>;
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
;
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
<<<<<<< HEAD
;
=======
;

<<<<<<< HEAD
};
return (<AppLayout> <SEO title="Create New Post | Community Forum | Zion AI Marketplace" description="Create a new discussion post in the Zion AI Marketplace community forum." keywords="community, forum, discussion, create post, new thread" /> <div className="container py-8" > <div className="flex items-center gap-3 mb-6" > <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground" > Forum </Link> <span className="text-muted-foreground" >/</span> <span className="text-sm font-medium" >Create Post</span> </div> <h1 className="text-3xl font-bold mb-8" >Create New Post</h1> <PostForm initialValues= {
  initialValues 
}onSubmit= {
  handleSubmit 
}/> </div> </AppLayout>) 
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

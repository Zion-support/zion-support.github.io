import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin} from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import {Separator} from "@/components/ui/separator";
import {AppLayout} from "@/layout/AppLayout";
import { useState, useEffect } from "react",
import { useParams, Link, useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",
import type { BlogPost as BlogPostType } from "@/types/blog",import { Separator } from "@/components/ui/separator";
import { AppLayout } from "@/layout/AppLayout";
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts";
export default function BlogPost() {
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import {BLOG_POSTS} from "@/data/blog-posts";
export default function BlogPost() {;
  const { slug } = useParams() as { slug: string },;
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",
export default function BlogPost() {
  const { slug } = useParams() as { slug: string },;
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { slug } = useParams() as { slug: string },
  const navigate = useNavigate(),
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState(false),
    useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find((p) => p.slug === slug);

    if (currentPost) {
      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(p =>
        p.id !== currentPost.id &&
        (p.category === currentPost.category |
         p.tags.some(tag => currentPost.tags.includes(tag)))
      setRelatedPosts(related)    } else {
      // Post not found

    // Scroll to top when post changes
    window.scrollTo(0, 0)    return (
    return (

      <AppLayout>
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </AppLayout>
    )
  }
  }
};

import { useState, useEffect } from "react",;
import { useParams, Link, useNavigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",;
import type { BlogPost as BlogPostType } from "@/types/blog",;
import { Separator } from "@/components/ui/separator",;
import { AppLayout } from "@/layout/AppLayout",;
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from "@/data/blog-posts",;
export default function BlogPost() {;
  const { slug } = useParams() as { slug: string },;
;
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from "@/data/blog-posts",;
;
export default function BlogPost() {;
  const { slug } = useParams() as { slug:string },;
  const navigate = useNavigate(),;
  const [post, setPost] = useState<BlogPostType | null>(null),;
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),;
  const [showShareMenu, setShowShareMenu] = useState(false),;
  useEffect(() => {;
    // Find the current post by slug;
    const currentPost = BLOG_POSTS.find(p => p.slug === slug),;
    if (currentPost) {;
      setPost(currentPost),;
      // Find related posts (same category, excluding current post);
      const related = BLOG_POSTS.filter(p =>;
        p.id !== currentPost.id &&;
        (p.category === currentPost.category ||;
         p.tags.some(tag => currentPost.tags.includes(tag)));
      ).slice(0, 3),;
      setRelatedPosts(related);
    } else {;
      // Post not found;
      navigate("/blog", { replace: true });
    }
;
    // Scroll to top when post changes;
    window.scrollTo(0, 0);
  }, [slug, navigate]),;
  if (!post) {;
    return (;
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;
    );
  }
    return (
    <AppLayout>
      <SEO,
title={post.title}
        description={post.excerpt}
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {
                    }
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https: //images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span>Twitter</span>
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
              <div className="flex items-center mb-4 sm:mb-0">;
                <img;
                  src={post.author.avatarUrl} ;
                  alt={post.author.name} ;"
                  className="w-12 h-12 rounded-full mr-3";
                  onError={(e) => {;
                    const target = e.target as HTMLImageElement,;"
                    target.src = "https: //images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >;
                    <Share2 className="h-4 w-4 mr-1" />;"
                    <span className="text-sm">Share</span>;"
                  </Button>;

                  {showShareMenu && (;
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">;
                      <a
                        href={getShareUrl('facebook')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;                        <Facebook className="h-4 w-4 mr-2" />;
                        <span>Facebook</span>;
                      </a>;
                      <a;
                        href={getShareUrl('twitter')} ;'
                        target="_blank";"
                        rel="noopener noreferrer";"
                        className="flex items-center p-2 "hover":bg-zion-blue rounded transition-colors text-zion-slate-light "hover":text-white";"
                      >;
                        <Twitter className="h-4 w-4 mr-2" />;"
                        <span>Twitter</span>;
                      </a>;
                      <a
                        href={getShareUrl('linkedin')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                        <Linkedin className="h-4 w-4 mr-2" />;
                        <span>LinkedIn</span>;
                      </a>;
                    </div>;

                  )}
                </div>
              </div>
            </div>
          </div>

                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement,
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
          <div className="mb-12 max-w-5xl mx-auto">;
            <div className="aspect-[21/9] rounded-lg overflow-hidden">;
              <img;
                src={post.featuredImage} ;
                alt={post.title}
                className="object-cover w-full h-full";
                onError={(e) => {;
                  const target = e.target as HTMLImageElement;
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3";
                  )}
                className="object-cover w-full h-full"
                onError={(e) => {;
                  const target = e && e.target as HTMLImageElement;
                  target && target.src = "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
                }}
                  #{tag}
                </span>;
              ))}            </div>;

            <Separator className="my-12 bg-zion-blue-light" />;
                </span>;
              ))}
                          }}
                        />;
                      </div>;"
                      <div className="p-4">;
            <div className="flex justify-between items-center mt-12">;
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"    </AppLayout>;
  ); export default function BlogPost () {
  const {
  }
  slug
}= useParams () as {
  }
  "slug": string
};
const navigate = useNavigate ();
const [post, setPost] = useState<BlogPostType | null> (null);
const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]> ([]);
const [showShareMenu, setShowShareMenu] = useState (false);
useEffect ( () => {}
  //Find the current post by slug const currentPost = BLOG POSTS.find (p => p.slug === slug);
setPost (currentPost);
//Find related posts (same category, excluding current post) const related = BLOG POSTS.filter (p => p.id !== currentPost.id && (p.category === currentPost.category || p.tags.some (tag => currentPost.tags.includes (tag) ) ) 
}//Scroll to top when post changes window.scrollTo (0, 0) 
}, [slug, navigate]);
if (!post) {"
  return (<AppLayout> <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center" > <div className="animate-pulse" >Loading article...</div> </div> </AppLayout> switch (platform) {'`
  case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=$ {}
  url;`
}`;'
case 'twitter': 
}






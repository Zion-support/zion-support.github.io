<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin} from "lucide-react";
import { Button } from "@/components/ui/button";
import {}
  ArrowLeft,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
Linkedin,
} from "lucide-react";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { BlogPost as BlogPostType } from "@/types/blog";
import {Separator} from "@/components/ui/separator";
import {AppLayout} from "@/layout/AppLayout";
import { useState, useEffect } from "react",
import { useParams, Link, useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",
import type { BlogPost as BlogPostType } from "@/types/blog",import { Separator } from "@/components/ui/separator";
=======
  Linkedin,";
} from "lucide-react";"
import type { BlogPost as BlogPostType } from "@/types/blog";"
import { Separator } from "@/components/ui/separator";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  Linkedin,
} from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { Separator } from "@/components/ui/separator";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { AppLayout } from "@/layout/AppLayout";
// Importing the sample blog posts - in a real app, you would fetch this from an API"
import { BLOG_POSTS } from "@/data/blog-posts";
export default function BlogPost() {

useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find((p) => p.slug === slug);

    if (currentPost) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      setPost(currentPost);
<<<<<<< HEAD
import { Separator } from "@/components/ui/separator",
import { AppLayout } from "@/layout/AppLayout",
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",
export default function BlogPost() {
  const { slug } = useParams() as { slug: string },;
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { slug } = useParams() as { slug: string },
  const navigate = useNavigate(),
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState(false),
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  useEffect(() => {
    // Find the current post by slug
const currentPost = BLOG_POSTS.find(p => p.slug === slug),
    if (currentPost) {
setPost(currentPost),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(p =>
        p.id !== currentPost.id &&
        (p.category === currentPost.category |
         p.tags.some(tag => currentPost.tags.includes(tag)))
).slice(0, 3),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setRelatedPosts(related)
=======

      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(
        (p) =>
          p.id !== currentPost.id &&
          (p.category === currentPost.category ||
            p.tags.some((tag) => currentPost.tags.includes(tag))),
      ).slice(0, 3);

      setRelatedPosts(related);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    } else {
=======
      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(p =>
        p.id !== currentPost.id &&
        (p.category === currentPost.category |
         p.tags.some(tag => currentPost.tags.includes(tag)))
      setRelatedPosts(related)    } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      setRelatedPosts(related)    } else {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      setPost(currentPost);

      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(
        (p) =>
          p.id !== currentPost.id &&
          (p.category === currentPost.category ||
            p.tags.some((tag) => currentPost.tags.includes(tag))),
      ).slice(0, 3);

      setRelatedPosts(related);
    } else {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Post not found
      navigate("/blog", { replace: true });
    }

    // Scroll to top when post changes
<<<<<<< HEAD
<<<<<<< HEAD
    window.scrollTo(0, 0)
<<<<<<< HEAD

  if (!post) {

  }, [slug, navigate]),
=======
    window.scrollTo(0, 0);
  }, [slug, navigate]);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (!post) {

  useEffect(() => {;
    // Find the current post by slug;
    const currentPost = BLOG_POSTS && BLOG_POSTS.find(p => p && p.slug === slug);

    if (currentPost) {;
      setPost(currentPost);

      // Find related posts (same category, excluding current post);
      const related = BLOG_POSTS && BLOG_POSTS.filter(p => ;
        p && p.id !== currentPost && currentPost.id && ;
        (p && p.category === currentPost && currentPost.category || ;
         p && p.tags.some(tag => currentPost && currentPost.tags.includes(tag)));
      ).slice(0, 3);

      setRelatedPosts(related);
    } else {;
      // Post not found;
      navigate("/blog", { replace: true });
    }

    // Scroll to top when post changes;
    window && window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return (

=======
    window.scrollTo(0, 0)    return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    return (

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (

      <AppLayout>
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
=======

    return (

      <AppLayout>"
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="animate-pulse">Loading article...</div>
        </div>
      </AppLayout>
<<<<<<< HEAD
<<<<<<< HEAD
    )

  }
  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title)
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default: return '#'
    }
  }
  };
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    )
  }
  }
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
;
// Importing the sample blog posts - in a real app, you would fetch this from an API;
import { BLOG_POSTS } from "@/data/blog-posts",;
;
export default function BlogPost() {;
  const { slug } = useParams() as { slug:string },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;
);
  }
<<<<<<< HEAD
<<<<<<< HEAD

  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);

    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default:
        return "#";
    }
<<<<<<< HEAD
  },
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  return (
=======
    );
  }
    return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    );
  }
    return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    );
  }

  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);

    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default:
        return "#";
    }
  };

  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <AppLayout>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Back to blog button */}
          <div className="mb-8">
            <Button
              variant="outline"
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              asChild
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>
          </div>

          {/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">{post.excerpt}</p>

            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
<<<<<<< HEAD
  // Helper function to get share URL;
  const getShareUrl = (platform: string) => {;
    const url = encodeURIComponent(window && window.location.href);
    const title = encodeURIComponent(post && post.title),;

    switch (platform) {;
      case 'facebook':;
        return `https://www && www.facebook.com/sharer/sharer && sharer.php?u=${url}`;
      case 'twitter':;
        return `https://twitter && twitter.com/intent/tweet?url=${url}&text=${title}`;
      case 'linkedin':;
        return `https://www && www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
      default: return '#';
    }
  };

  return (
    <AppLayout>;
      <SEO
        title={post && post.title} 
        description={post && post.excerpt} 
        keywords={post && post.tags.join(", ")}
        ogImage={post && post.featuredImage}
        canonical={`https://app && app.ziontechgroup.com/blog/${post && post.slug}`}

      />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto">;
          {/* Back to blog button */}
          <div className="mb-8">;
<Button
              variant="outline" 
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              asChild>;
              <Link to="/blog">;
                <ArrowLeft className="mr-2 h-4 w-4" />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;

{/* Article header */}
          <div className="mb-8 max-w-4xl mx-auto">;
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">;
              {post && post.category}
            </span>;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              {post && post.title}
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8">;
              {post && post.excerpt}
            </p>;

            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
              <div className="flex items-center mb-4 sm:mb-0">;
                <img
                  src={post && post.author.avatarUrl} 
                  alt={post && post.author.name}
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name} 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {;
                    const target = e && e.target as HTMLImageElement;
                    target && target.src = "https: //images && images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}

=======
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https: //images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}
<<<<<<< HEAD
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-sm text-zion-slate-light">
                    {post.author.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center text-zion-slate-light">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.publishedDate}</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    <span className="text-sm">Share</span>
                  </Button>

                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">
                      <a
                        href={getShareUrl("facebook")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        <span>Facebook</span>
<<<<<<< HEAD

<<<<<<< HEAD
                      </a>
                      <a
                        href={getShareUrl("twitter")}
                        target="_blank"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      </Link>
                      <a 
                        href={getShareUrl('twitter')} 
                        target="_blank" 
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                        rel="noopener noreferrer"
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                        rel="noopener noreferrer"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span>Twitter</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      </a>
                      <a
                        href={getShareUrl("linkedin")}
                        target="_blank"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                      </Link>
                      <a 
                        href={getShareUrl('linkedin')} 
                        target="_blank" 
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span>LinkedIn</span>
                      </Link>
                    </div>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
=======
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span>LinkedIn</span>
                      </Link>
                    </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
                  >;"
                    <Share2 className="h-4 w-4 mr-1" />;"
                    <span className="text-sm">Share</span>;
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
                        href={getShareUrl('twitter')} ;"
                        target="_blank";"
                        rel="noopener noreferrer";"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white";
                      >;"
                        <Twitter className="h-4 w-4 mr-2" />;
                        <span>Twitter</span>;
                      </a>;
<a
                        href={getShareUrl('linkedin')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                      <a;
                        href={getShareUrl('linkedin')} ;
                        target="_blank";
                        rel="noopener noreferrer";
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white";
                      >;
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                        <Linkedin className="h-4 w-4 mr-2" />;
                        <span>LinkedIn</span>;
                      </a>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  )}

=======
                  )}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </div>;
              </div>;
            </div>;
          </div>;
{/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                </div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
<<<<<<< HEAD
<<<<<<< HEAD
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                }}

              />;
            </div>;
          </div>;

          {/* Article content */}
          <div className="max-w-4xl mx-auto">;
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post && post.content }}
            />;

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">;
              {post && post.tags.map(tag => (;
                <span
                  key={tag} 
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full">;

                  #{tag}
                </span>;
              ))}
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
<<<<<<< HEAD
              />;
            </div>;
          </div>;
=======
              <img
                src={post.featuredImage}
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                }}
              />
            </div>
          </div>

          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>;
))}
            </div>

            <Separator className="my-12 bg-zion-blue-light" />

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300"
                    >
                      <div className="aspect-[16/9] relative">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">
                          {relatedPost.category}
                        </span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Link>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </div>;
=======
              ))}            </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  #{tag}
                </span>;
              ))}            </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

=======

            </div>;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Separator className="my-12 bg-zion-blue-light" />;

            {/* Related articles */}
            {relatedPosts && relatedPosts.length > 0 && (;"
              <div className="mt-12">;"
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;"
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                  {relatedPosts && relatedPosts.map(relatedPost => (;
<Link
                      key={relatedPost && relatedPost.id}
                      to={`/blog/${relatedPost && relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">;
                      <div className="aspect-[16/9] relative">;
                        <img
                          src={relatedPost && relatedPost.featuredImage} 
                          alt={relatedPost && relatedPost.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;
                            target && target.src = "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
          ;
          {/* Article content */}
          <div className="max-w-4xl mx-auto">;
            <div ;
              className="prose prose-lg prose-invert max-w-none";
              dangerouslySetInnerHTML={{ __html:post.content }}
            />;
            ;
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12">;
              {post.tags.map(tag => (;
                <span ;
                  key={tag} ;
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full";
                >;                  #{tag}
                </span>;
              ))}
            </div>;
            ;
            <Separator className="my-12 bg-zion-blue-light" />;
            ;
            {/* Related articles */}
            </div>;
            <Separator className="my-12 bg-zion-blue-light" />;
            {/* Related articles */}
            {relatedPosts.length > 0 && (;
              <div className="mt-12">;
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                  {relatedPosts.map(relatedPost => (;
                    <Link;
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300";
                    >;
                      <div className="aspect-[16/9] relative">;
                        <img;
                          src={relatedPost.featuredImage} ;
                          alt={relatedPost.title}
                          className="object-cover w-full h-full";
                          onError={(e) => {;
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3";
                  #{tag}
                </span>;
              ))}
<<<<<<< HEAD
            </div>;
            ;
            <Separator className="my-12 bg-zion-blue-light" />;
            ;
            {/* Related articles */}
            </div>;
            <Separator className="my-12 bg-zion-blue-light" />;
            {/* Related articles */}
            {relatedPosts.length > 0 && (;
              <div className="mt-12">;
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                  {relatedPosts.map(relatedPost => (;
                    <Link;
                      key={relatedPost && relatedPost.id}
                      to={`/blog/${relatedPost && relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">;"
                      <div className="aspect-[16/9] relative">;
                        <img;
                          src={relatedPost && relatedPost.featuredImage} 
                          alt={relatedPost && relatedPost.title}"
                          className="object-cover w-full h-full"
                          onError={(e) => {;
                            const target = e && e.target as HTMLImageElement;"
                            target && target.src = "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";

                  #{tag}
                </span>;
              ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          }}
                        />;
                      </div>;"
                      <div className="p-4">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                        <span className="text-xs text-zion-cyan">{relatedPost && relatedPost.category}</span>;
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost && relatedPost.title}</h4>;
                      </div>;
                    </Link>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                        <span className="text-xs text-zion-cyan">{relatedPost && relatedPost.category}</span>;
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost && relatedPost.title}</h4>;
                      </div>;
                    </Link>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  ))}
                </div>;
              </div>;
            )}

{/* Navigation */}"
            <div className="flex justify-between items-center mt-12">;
              <Button"
                variant="outline""
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                asChild;
              >"
                <Link to="/blog">"
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles;
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
)
<<<<<<< HEAD
                asChild>;

            <div className="flex justify-between items-center mt-12">;
              <Button;
                variant="outline";
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
                asChild;
              >;
<Link to="/blog">;
                  <ChevronLeft className="mr-2 h-4 w-4" />;
}
      set_post (current_post);
;
      // Find related posts (same category, excluding current post);
      const related = BLOG_POSTS.filter (p =>;
        p.id !== current_post.id &&;
        (p.category === current_post.category ||;
        p.tags.some (tag => current_post.tags.includes (tag)))).slice (0, 3);
;
      setRelatedPosts (related);
    } else {}
      // Post not found;"
      navigate ("/blog", { replace: true });
    }
    // Scroll to top when post changes;
    window.scroll_to (0, 0);
  }, [slug, navigate]);
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <AppLayout>;"
        <div className="min - h-screen bg - zion - blue text - white p - 8 flex justify - center items - center">;"
          <div className="animate - pulse">Loading article...</div>;
        </div>;
      </AppLayout>);
  }
  // Helper function to get share URL;
  const getShareUrl = (platform: string) =>: any {}
    const url = encodeURIComponent (window.location.href);
    const title = encodeURIComponent (post.title),
    switch (platform) {'
      case 'facebook':;`
        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;'
      case 'twitter':;`
        return `https://twitter.com / intent / tweet?url=${url}&text=${title}`;'
      case 'linkedin':;`
        return `https://www.linkedin.com / share_article?mini = true & url=${url}&title=${title}`;'
      default: return '#';
    }
  }
;
  return (
    <AppLayout>;
      <SEO;
        title={post.title}
        description={post.excerpt}"
        keywords={post.tags.join (", ")}
        og_image={post.featured_image}`
        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      />;"
      <div className="min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4">;"
        <div className="container mx - auto">;
          {/* Back to blog button */}"
          <div className="mb - 8">;
            <Button;"
              variant="outline";"
              className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
              as_child;
            >;"
              <Link to="/blog">;"
                <ArrowLeft className="mr - 2 h - 4 w - 4" />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;
          {/* Article header */}"
          <div className="mb - 8 max - w-4xl mx - auto">;"
            <span className="text - sm text - zion - cyan bg - zion - blue - dark px - 3 py - 1 rounded - full inline - block mb - 4">;
              {post.category}
            </span>;"
            <h1 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
              {post.title}
            </h1>;"
            <p className="text - xl text - zion - slate - light mb - 8">;
              {post.excerpt}
            </p>;
            {/* Author and metadata */}"
            <div className="flex flex - col sm:flex - row sm:items - center justify - between mb - 8">;"
              <div className="flex items - center mb - 4 sm:mb - 0">;
                <img;
                  src={post.author.avatar_url}
                  alt={post.author.name}"
                  className="w - 12 h - 12 rounded - full mr - 3";
                  on_error={(e) => {}
                    const target = e.target as HTMLImageElement;"
                    target.src = "https: //images.unsplash.com / photo - 1472099645785 - 5658abf4ff4e?auto = format & fit = facearea & facepad = 2&w = 100 & h=100 & q=80";
                  }}
                />;
                <div>;"
                  <p className="text - white font - medium">{post.author.name}</p>;"
                  <p className="text - sm text - zion - slate - light">{post.author.title}</p>;
                </div>;
              </div>;"
              <div className="flex items - center space - x-4">;"
                <div className="flex items - center text - zion - slate - light">;"
                  <Calendar className="h - 4 w - 4 mr - 1" />;"
                  <span className="text - sm">{post.published_date}</span>;
                </div>;"
                <div className="flex items - center text - zion - slate - light">;"
                  <Clock className="h - 4 w - 4 mr - 1" />;"
                  <span className="text - sm">{post.read_time}</span>;
                </div>;"
                <div className="relative">;
                  <Button;"
                    variant="ghost";"
                    size="sm";"
                    className="text - zion - slate - light hover:text - white hover:bg - zion - blue - dark";
                    on_click={() => setShowShareMenu (!showShareMenu)}
                  >;"
                    <Share2 className="h - 4 w - 4 mr - 1" />;"
                    <span className="text - sm">Share</span>;
                  </Button>;
                  {showShareMenu && ("
                    <div className="absolute right - 0 top - full mt - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md p - 2 z - 10">;
                      <a;'
                        href={getShareUrl ('facebook')}"
                        target="_blank";"
                        rel="noopener noreferrer";"
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;"
                        <Facebook className="h - 4 w - 4 mr - 2" />;
                        <span > Facebook</span>;
                      </a>;
                      <a;'
                        href={getShareUrl ('twitter')}"
                        target="_blank";"
                        rel="noopener noreferrer";"
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;"
                        <Twitter className="h - 4 w - 4 mr - 2" />;
                        <span > Twitter</span>;
                      </a>;
                      <a;'
                        href={getShareUrl ('linkedin')}"
                        target="_blank";"
                        rel="noopener noreferrer";"
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;"
                        <Linkedin className="h - 4 w - 4 mr - 2" />;
                        <span > LinkedIn</span>;
                      </a>;
                    </div>)}
                </div>;
              </div>;
            </div>;
          </div>;
          {/* Featured image */}"
          <div className="mb - 12 max - w-5xl mx - auto">;"
            <div className="aspect-[21 / 9] rounded - lg overflow - hidden">;
              <img;
                src={post.featured_image}
                alt={post.title}"
                className="object - cover w - full h - full";
                on_error={(e) => {}
                  const target = e.target as HTMLImageElement;"
                  target.src = "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                }}
              />;
            </div>;
          </div>;
          {/* Article content */}"
          <div className="max - w-4xl mx - auto">;
            <div;"
              className="prose prose - lg prose - invert max - w-none";
              dangerouslySetInnerHTML={{ __html: post.content }}
            />;
            {/* Tags */}"
            <div className="flex flex - wrap gap - 2 mt - 12">;
              {post.tags.map (tag => (
                <span;
                  key={tag}"
                  className="text - xs text - zion - slate - light bg - zion - blue - dark px - 3 py - 1 rounded - full";
                >;
                  #{tag}
                </span>))}
            </div>;"
            <Separator className="my - 12 bg - zion - blue - light" />;
            {/* Related articles */}
            {related_posts.length > 0 && ("
              <div className="mt - 12">;"
                <h3 className="text - 2xl font - bold text - white mb - 6">Related Articles</h3>;"
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
                  {related_posts.map (related_post => (
                    <Link;
                      key={related_post.id}`
                      to={`/blog/${related_post.slug}`}"
                      className="bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden hover:border - zion - purple transition - all duration - 300";
                    >;"
                      <div className="aspect-[16 / 9] relative">;
                        <img;
                          src={related_post.featured_image}
                          alt={related_post.title}"
                          className="object - cover w - full h - full";
                          on_error={(e) => {}
                            const target = e.target as HTMLImageElement;"
                            target.src = "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                          }}
                        />;
                      </div>;"
                      <div className="p - 4">;"
                        <span className="text - xs text - zion - cyan">{related_post.category}</span>;"
                        <h4 className="text - white font - bold mt - 1 line - clamp - 2">{related_post.title}</h4>;
                      </div>;
                    </Link>))}
                </div>;
              </div>)}
            {/* Navigation */}"
            <div className="flex justify - between items - center mt - 12">;
              <Button;"
                variant="outline";"
                className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
                as_child;
              >;"
                <Link to="/blog">;"
                  <ChevronLeft className="mr - 2 h - 4 w - 4" />;

              <Button;"
                variant="outline";"
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
                asChild;
              >;"
                <Link to="/blog">;"
                  <ChevronLeft className="mr-2 h-4 w-4" />;"
                <Link to="/blog">;"
                  <ChevronLeft className="mr-2 h-4 w-4" />;
<Link to="/blog">;
                  <ChevronLeft className="mr-2 h-4 w-4" />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;

</AppLayout>);
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                asChild
              >
                <Link to="/blog">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
      set_post (current_post);
;
      // Find related posts (same category, excluding current post);
      const related = BLOG_POSTS.filter (p =>;
        p.id !== current_post.id &&;
        (p.category === current_post.category ||;
        p.tags.some (tag => current_post.tags.includes (tag)))).slice (0, 3);
;
      setRelatedPosts (related);
    } else {
      // Post not found;
      navigate ("/blog", { replace: true });
    }
    // Scroll to top when post changes;
    window.scroll_to (0, 0);
  }, [slug, navigate]);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <AppLayout>;
        <div className="min - h-screen bg - zion - blue text - white p - 8 flex justify - center items - center">;
          <div className="animate - pulse">Loading article...</div>;
        </div>;
      </AppLayout>);
  }
  // Helper function to get share URL;
  const getShareUrl = (platform: string) =>: any {
    const url = encodeURIComponent (window.location.href);
    const title = encodeURIComponent (post.title),
    switch (platform) {
      case 'facebook':;
        return `https://www.facebook.com / sharer / sharer.php?u=${url}`;
      case 'twitter':;
        return `https://twitter.com / intent / tweet?url=${url}&text=${title}`;
      case 'linkedin':;
        return `https://www.linkedin.com / share_article?mini = true & url=${url}&title=${title}`;
      default: return '#';
    }
  }
;
  return (
    <AppLayout>;
      <SEO;
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join (", ")}
        og_image={post.featured_image}
        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      />;
      <div className="min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4">;
        <div className="container mx - auto">;
          {/* Back to blog button */}
          <div className="mb - 8">;
            <Button;
              variant="outline";
              className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";
              as_child;
            >;
              <Link to="/blog">;
                <ArrowLeft className="mr - 2 h - 4 w - 4" />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;
          {/* Article header */}
          <div className="mb - 8 max - w-4xl mx - auto">;
            <span className="text - sm text - zion - cyan bg - zion - blue - dark px - 3 py - 1 rounded - full inline - block mb - 4">;
              {post.category}
            </span>;
            <h1 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
              {post.title}
            </h1>;
            <p className="text - xl text - zion - slate - light mb - 8">;
              {post.excerpt}
            </p>;
            {/* Author and metadata */}
            <div className="flex flex - col sm:flex - row sm:items - center justify - between mb - 8">;
              <div className="flex items - center mb - 4 sm:mb - 0">;
                <img;
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  className="w - 12 h - 12 rounded - full mr - 3";
                  on_error={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https: //images.unsplash.com / photo - 1472099645785 - 5658abf4ff4e?auto = format & fit = facearea & facepad = 2&w = 100 & h=100 & q=80";
                  }}
                />;
                <div>;
                  <p className="text - white font - medium">{post.author.name}</p>;
                  <p className="text - sm text - zion - slate - light">{post.author.title}</p>;
                </div>;
              </div>;
              <div className="flex items - center space - x-4">;
                <div className="flex items - center text - zion - slate - light">;
                  <Calendar className="h - 4 w - 4 mr - 1" />;
                  <span className="text - sm">{post.published_date}</span>;
                </div>;
                <div className="flex items - center text - zion - slate - light">;
                  <Clock className="h - 4 w - 4 mr - 1" />;
                  <span className="text - sm">{post.read_time}</span>;
                </div>;
                <div className="relative">;
                  <Button;
                    variant="ghost";
                    size="sm";
                    className="text - zion - slate - light hover:text - white hover:bg - zion - blue - dark";
                    on_click={() => setShowShareMenu (!showShareMenu)}
                  >;
                    <Share2 className="h - 4 w - 4 mr - 1" />;
                    <span className="text - sm">Share</span>;
                  </Button>;
                  {showShareMenu && (
                    <div className="absolute right - 0 top - full mt - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md p - 2 z - 10">;
                      <a;
                        href={getShareUrl ('facebook')}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;
                        <Facebook className="h - 4 w - 4 mr - 2" />;
                        <span > Facebook</span>;
                      </a>;
                      <a;
                        href={getShareUrl ('twitter')}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;
                        <Twitter className="h - 4 w - 4 mr - 2" />;
                        <span > Twitter</span>;
                      </a>;
                      <a;
                        href={getShareUrl ('linkedin')}
                        target="_blank";
                        rel="noopener noreferrer";
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";
                      >;
                        <Linkedin className="h - 4 w - 4 mr - 2" />;
                        <span > LinkedIn</span>;
                      </a>;
                    </div>)}
                </div>;
              </div>;
            </div>;
          </div>;
          {/* Featured image */}
          <div className="mb - 12 max - w-5xl mx - auto">;
            <div className="aspect-[21 / 9] rounded - lg overflow - hidden">;
              <img;
                src={post.featured_image}
                alt={post.title}
                className="object - cover w - full h - full";
                on_error={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                }}
              />;
            </div>;
          </div>;
          {/* Article content */}
          <div className="max - w-4xl mx - auto">;
            <div;
              className="prose prose - lg prose - invert max - w-none";
              dangerouslySetInnerHTML={{ __html: post.content }}
            />;
            {/* Tags */}
            <div className="flex flex - wrap gap - 2 mt - 12">;
              {post.tags.map (tag => (
                <span;
                  key={tag}
                  className="text - xs text - zion - slate - light bg - zion - blue - dark px - 3 py - 1 rounded - full";
                >;
                  #{tag}
                </span>))}
            </div>;
            <Separator className="my - 12 bg - zion - blue - light" />;
            {/* Related articles */}
            {related_posts.length > 0 && (
              <div className="mt - 12">;
                <h3 className="text - 2xl font - bold text - white mb - 6">Related Articles</h3>;
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;
                  {related_posts.map (related_post => (
                    <Link;
                      key={related_post.id}
                      to={`/blog/${related_post.slug}`}
                      className="bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden hover:border - zion - purple transition - all duration - 300";
                    >;
                      <div className="aspect-[16 / 9] relative">;
                        <img;
                          src={related_post.featured_image}
                          alt={related_post.title}
                          className="object - cover w - full h - full";
                          on_error={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                          }}
                        />;
                      </div>;
                      <div className="p - 4">;
                        <span className="text - xs text - zion - cyan">{related_post.category}</span>;
                        <h4 className="text - white font - bold mt - 1 line - clamp - 2">{related_post.title}</h4>;
                      </div>;
                    </Link>))}
                </div>;
              </div>)}
            {/* Navigation */}
            <div className="flex justify - between items - center mt - 12">;
              <Button;
                variant="outline";
                className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
                as_child;
              >;
                <Link to="/blog">;
                  <ChevronLeft className="mr - 2 h - 4 w - 4" />;
              <Button;
                variant="outline";
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
                asChild;
              >;
                <Link to="/blog">;
                  <ChevronLeft className="mr-2 h-4 w-4" />;
                <Link to="/blog">;
                  <ChevronLeft className="mr-2 h-4 w-4" />;
                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;

    </AppLayout>);
}

;
    </AppLayout>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ); export default function BlogPost () {
  const {
  slug 
}= useParams () as {
  slug: string 
=======

    </AppLayout>;
  ); export default function BlogPost () {}
  const {};
  slug;
}= useParams () as {}
  slug: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

};"
return (<AppLayout> <SEO <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild > <Link to="/blog" > <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles </Link> </Button> </div> 
}"
}/> <div> <p className="text-white font-medium" > {}
  post.author.name "
}</p> <p className="text-sm text-zion-slate-light" > {}
  post.author.title "
}</p> </div> </div> <div className="flex items-center space-x-4" > <div className="flex items-center text-zion-slate-light" > <Calendar className="h-4 w-4 mr-1" /> <span className="text-sm" > {}
  post.publishedDate "
}</span> </div> <div className="flex items-center text-zion-slate-light" > <Clock className="h-4 w-4 mr-1" /> <span className="text-sm" > {}
  post.readTime "
}</span> relative"> <Button > <Share2 className=" h-4 w-4 mr-1"/> <span className=" text-sm">Share</span> </Button> <a href= {'
  getShareUrl ('facebook') "
}target=" blank"rel=" noopener noreferrer"className=" flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"> <Facebook className=" h-4 w-4 mr-2"/> <span>Facebook</span> </Link> <a > <Twitter className=" h-4 w-4 mr-2"/> <span>Twitter</span> </Link> <a > <Linkedin className=" h-4 w-4 mr-2"/> <span>LinkedIn</span> </Link> </div>) 
}</div> </div> </div> </div> 
}
}tag "
}className=" text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"> # {}
  tag;
}</span>) ) "
}</div> <Separator className=" my-12 bg-zion-blue-light"/> > <div className=" aspect-[16/9] relative"> <img;
}"
}/> </div> <div className=" p-4"> <span className=" text-xs text-zion-cyan"> {}
  relatedPost.category "
}</span> <h4 className=" text-white font-bold mt-1 line-clamp-2"> {}
  relatedPost.title;
}</h4> 
}</div> </div>) "
}<Button asChild > <Link to=" /blog"> <ChevronLeft className=" mr-2 h-4 w-4" /> All Articles </Link> </Button> </div> </div> </div> </div> </AppLayout>) 
}
    </AppLayout>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import { useState, useEffect } from "react";""
import { useParams, Link, useNavigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";""
import { Button } from "@/components/ui/button";"
import {
  // TODO: Implement
}
  ArrowLeft,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,"
} from "lucide-react";""
import type { BlogPost as BlogPostType } from "@/types/blog";""
import { Separator } from "@/components/ui/separator";""
import { AppLayout } from "@/layout/AppLayout";"
// Importing the sample blog posts - in a real app, you would fetch this from an API;"
import { BLOG_POSTS } from "@/data/blog-posts";"
export default function BlogPost() {
  const { slug } = useParams() as { slug: string };
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);

  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

      <AppLayout>
"
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">"
</div>"
          <div className="animate-pulse">Loading article...</div>"
        </div>

      <SEO;
        title={post.title}
        description={post.excerpt}"
        keywords={post.tags.join(", ")}"
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">"
        <div className="container mx-auto">"
          <div className="mb-8">"
            <Button;"
              variant="outline"""
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white""
              asChild;
            >
              <Link to="/blog">"
                <ArrowLeft className="mr-2 h-4 w-4" />"

          <div className="mb-8 max-w-4xl mx-auto">"
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">"
</span>
            </span>"
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-zion-slate-light mb-8">{post.excerpt}</p>""
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">"
              <div className="flex items-center mb-4 sm:mb-0">"
                <img;
                  src={post.author.avatarUrl}
                  alt={post.author.name}"
                  className="w-12 h-12 rounded-full mr-3""
                  onError={(e) => {
</img>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>""
                  <p className="text-sm text-zion-slate-light">"
</p>
              <div className="flex items-center space-x-4">"
                <div className="flex items-center text-zion-slate-light">"
                  <Calendar className="h-4 w-4 mr-1" />"
                  <span className="text-sm">{post.publishedDate}</span>"
                  <Clock className="h-4 w-4 mr-1" />"
                  <span className="text-sm">{post.readTime}</span>"
                <div className="relative">"
                    variant="ghost"""
                    size="sm"""
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark""
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    <Share2 className="h-4 w-4 mr-1" />"
</Share2>"
                    <span className="text-sm">Share</span>"
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">"
                      <a;"
                        href={getShareUrl("facebook")}""
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white""
</a>"
                        <Facebook className="h-4 w-4 mr-2" />"

                        <span>Facebook</span>
                      </a>
                        href={getShareUrl("twitter")}""
                        <Twitter className="h-4 w-4 mr-2" />"

                        <span>Twitter</span>
                        href={getShareUrl("linkedin")}""
                        <Linkedin className="h-4 w-4 mr-2" />"

                        <span>LinkedIn</span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;"
              <div className="flex items-center mb-4 sm:mb-0">;"
                  src={post.author.avatarUrl} ;
                  alt={post.author.name} ;"
                  className="w-12 h-12 rounded-full mr-3";"
                  onError={(e) => {;
                <div>;
                  <p className="text-white font-medium">{post && post.author.name}</p>;""
                  <p className="text-sm text-zion-slate-light">{post && post.author.title}</p>;"
                </div>;
              </div>;"
              <div className="flex items-center space-x-4">;"
                <div className="flex items-center text-zion-slate-light">;"
                  <Calendar className="h-4 w-4 mr-1" />;"
                  <span className="text-sm">{post && post.publishedDate}</span>;"
                  <Clock className="h-4 w-4 mr-1" />;"
                  <span className="text-sm">{post && post.readTime}</span>;"
                <div className="relative">;"
                    <Share2 className="h-4 w-4 mr-1" />;"
                    <span className="text-sm">Share</span>;"
                  ;"
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">;"
                        href={getShareUrl('facebook')}
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;"
                        <Facebook className="h-4 w-4 mr-2" />;"

                        <span>Facebook</span>;
                      </a>;
                        href={getShareUrl('twitter')} ;
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white";"
                      >;
                        <Twitter className="h-4 w-4 mr-2" />;"

                        <span>Twitter</span>;
                        href={getShareUrl('linkedin')}
                        href={getShareUrl('linkedin')} ;
                        <Linkedin className="h-4 w-4 mr-2" />;"

                        <span>LinkedIn</span>;
          <div className="mb-12 max-w-5xl mx-auto">"
            <div className="aspect-[21/9] rounded-lg overflow-hidden">"
                src={post.featuredImage}
                alt={post.title}"
                className="object-cover w-full h-full""
          <div className="max-w-4xl mx-auto">"
            <div;"
              className="prose prose-lg prose-invert max-w-none""
              dangerouslySetInnerHTML={{ __html: post.content }}
            <div className="flex flex-wrap gap-2 mt-12">"
                <span;
                  key={tag}"
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full""
                </span>;
            <Separator className="my-12 bg-zion-blue-light" />"
              <div className="mt-12">"
                <h3 className="text-2xl font-bold text-white mb-6">"
</h3>
                </h3>"
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
                    <Link;
                      key={relatedPost.id}`;
                      to={`/blog/${relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300""
                      <div className="aspect-[16/9] relative">"
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}"
                      <div className="p-4">"
                        <span className="text-xs text-zion-cyan">"
                        <h4 className="text-white font-bold mt-1 line-clamp-2">"
</h4>

            <Separator className="my-12 bg-zion-blue-light" />;"
              <div className="mt-12">;"
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;""
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
                      key={relatedPost && relatedPost.id}`;
                      to={`/blog/${relatedPost && relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">;"
                      <div className="aspect-[16/9] relative">;"
                          src={relatedPost && relatedPost.featuredImage} 
                          alt={relatedPost && relatedPost.title}"
</img>"
          <div className="max-w-4xl mx-auto">;"
            <div ;"
              className="prose prose-lg prose-invert max-w-none";"
              dangerouslySetInnerHTML={{ __html:post.content }}
            />;
            <div className="flex flex-wrap gap-2 mt-12">;"
                <span ;
                  key={tag} ;"
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full";"
                >;                  #{tag}

                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300";"
                          src={relatedPost.featuredImage} ;
                          className="object-cover w-full h-full";"
                      <div className="p-4">;"
                        <span className="text-xs text-zion-cyan">{relatedPost && relatedPost.category}</span>;""
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost && relatedPost.title}</h4>;"
                    ;
            <div className="flex justify-between items-center mt-12">;"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white""
                  <ChevronLeft className="mr-2 h-4 w-4" />"

      <AppLayout>;
        <div className="min - h-screen bg - zion - blue text - white p - 8 flex justify - center items - center">;"
          <div className="animate - pulse">Loading article...</div>;"
      );

        keywords={post.tags.join (", ")}"
        og_image={post.featured_image}`;
        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      <div className="min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4">;"
        <div className="container mx - auto">;"
          <div className="mb - 8">;"
              variant="outline";""
              className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";"
              as_child;
              <Link to="/blog">;"
                <ArrowLeft className="mr - 2 h - 4 w - 4" />;"

          <div className="mb - 8 max - w-4xl mx - auto">;"
            <span className="text - sm text - zion - cyan bg - zion - blue - dark px - 3 py - 1 rounded - full inline - block mb - 4">;"
            </span>;"
            <h1 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;"
            </h1>;"
            <p className="text - xl text - zion - slate - light mb - 8">;"
            </p>;"
            <div className="flex flex - col sm:flex - row sm:items - center justify - between mb - 8">;"
              <div className="flex items - center mb - 4 sm:mb - 0">;"
                  src={post.author.avatar_url}
                  className="w - 12 h - 12 rounded - full mr - 3";"
                  on_error={(e) => {
                  <p className="text - white font - medium">{post.author.name}</p>;""
                  <p className="text - sm text - zion - slate - light">{post.author.title}</p>;"
              <div className="flex items - center space - x-4">;"
                <div className="flex items - center text - zion - slate - light">;"
                  <Calendar className="h - 4 w - 4 mr - 1" />;"
                  <span className="text - sm">{post.published_date}</span>;"
                  <Clock className="h - 4 w - 4 mr - 1" />;"
                  <span className="text - sm">{post.read_time}</span>;"
                    variant="ghost";""
                    size="sm";""
                    className="text - zion - slate - light hover:text - white hover:bg - zion - blue - dark";"
                    on_click={() => setShowShareMenu (!showShareMenu)}
                    <Share2 className="h - 4 w - 4 mr - 1" />;"
                    <span className="text - sm">Share</span>;"
                    <div className="absolute right - 0 top - full mt - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md p - 2 z - 10">;"
                        href={getShareUrl ('facebook')}
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";"
                        <Facebook className="h - 4 w - 4 mr - 2" />;"

                        <span > Facebook</span>;
                        href={getShareUrl ('twitter')}
                        <Twitter className="h - 4 w - 4 mr - 2" />;"

                        <span > Twitter</span>;
                        href={getShareUrl ('linkedin')}
                        <Linkedin className="h - 4 w - 4 mr - 2" />;"

                        <span > LinkedIn</span>;
                    </div>)}
          <div className="mb - 12 max - w-5xl mx - auto">;"
            <div className="aspect-[21 / 9] rounded - lg overflow - hidden">;"
                src={post.featured_image}
                className="object - cover w - full h - full";"
          <div className="max - w-4xl mx - auto">;"
              className="prose prose - lg prose - invert max - w-none";"
            <div className="flex flex - wrap gap - 2 mt - 12">;"
                  className="text - xs text - zion - slate - light bg - zion - blue - dark px - 3 py - 1 rounded - full";"
                </span>))}
            <Separator className="my - 12 bg - zion - blue - light" />;"
              <div className="mt - 12">;"
                <h3 className="text - 2xl font - bold text - white mb - 6">Related Articles</h3>;""
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;"
                      key={related_post.id}`;
                      to={`/blog/${related_post.slug}`}"
                      className="bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden hover:border - zion - purple transition - all duration - 300";"
                      <div className="aspect-[16 / 9] relative">;"
                          src={related_post.featured_image}
                          alt={related_post.title}"
                      <div className="p - 4">;"
                        <span className="text - xs text - zion - cyan">{related_post.category}</span>;""
                        <h4 className="text - white font - bold mt - 1 line - clamp - 2">{related_post.title}</h4>;"
                    ))}
              </div>)}"
            <div className="flex justify - between items - center mt - 12">;"
                className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";"
                  <ChevronLeft className="mr - 2 h - 4 w - 4" />;"

                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";"
                  <ChevronLeft className="mr-2 h-4 w-4" />;"

const [post, setPost] = useState<BlogPostType | null> (null);

const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]> ([]);
  return (<AppLayout> <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center" > <div className="animate-pulse" >Loading article...</div> </div>  switch (platform) {""
return (<AppLayout> <SEO <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild > <Link to="/blog" > <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles   </div>"
}/> <div> <p className="text-white font-medium" > {"
}</p> <p className="text-sm text-zion-slate-light" > {"
</p>"
}</p> </div> </div> <div className="flex items-center space-x-4" > <div className="flex items-center text-zion-slate-light" > <Calendar className="h-4 w-4 mr-1" /> <span className="text-sm" > {"
}</span> </div> <div className="flex items-center text-zion-slate-light" > <Clock className="h-4 w-4 mr-1" /> <span className="text-sm" > {"
}</span> relative"> <Button > <Share2 className=" h-4 w-4 mr-1"/> <span className=" text-sm">Share</span>  <a href= {")"
  getShareUrl ('facebook')
}target=" blank"rel=" noopener noreferrer"className=" flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"> <Facebook className=" h-4 w-4 mr-2"/> <span>Facebook</span>  <a > <Twitter className=" h-4 w-4 mr-2"/> <span>Twitter</span>  <a > <Linkedin className=" h-4 w-4 mr-2"/> <span>LinkedIn</span>  </div>)"

}</div> </div> </div> </div> 
}</span>) ) "
}</div> <Separator className=" my-12 bg-zion-blue-light"/> > <div className=" aspect-[16/9] relative"> <img;"
}/> </div> <div className=" p-4"> <span className=" text-xs text-zion-cyan"> {"
}</span> <h4 className=" text-white font-bold mt-1 line-clamp-2"> {"
}</h4> 
}</div> </div>) "
}<Button asChild > <Link to=" /blog"> <ChevronLeft className=" mr-2 h-4 w-4" /> All Articles   </div> </div> </div> </div> )"
    ;"`;
pr-12325
</ChevronLeft>"
                <Link to="/blog">;"
</Link>"
                  <ChevronLeft className="mr-2 h-4 w-4" />;"
</ChevronLeft>
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </AppLayout>);
    </AppLayout>;
  );
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

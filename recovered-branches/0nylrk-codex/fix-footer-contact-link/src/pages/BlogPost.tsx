
import {useState, useEffect} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin} from "lucide-react";
import type { BlogPost as BlogPostType } from "@/types/blog";
import {Separator} from "@/components/ui/separator";
import {AppLayout} from "@/layout/AppLayout";
  const { slug } = useParams() as { slug: string }
=======
=======// Importing the sample blog posts - in a real app, you would fetch this from an API;
import {BLOG_POSTS} from "@/data/blog-posts";
export default function BlogPost() {;
  const { slug } = useParams() as { slug: string },;


// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",
export default function BlogPost() {
  const { slug } = useParams() as { slug: string },;
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);


// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts",
export default function BlogPost() {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { slug } = useParams() as { slug: string },
  const navigate = useNavigate(),
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState(false),
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  
  useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find(p => p.slug === slug),
    
    if (currentPost) {
      setPost(currentPost),
      

  }, [slug, navigate]),
  


  if (!post) {
=======
  }, [slug, navigate]);
  }, [slug, navigate]),
  
  if (!post) {
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setRelatedPosts(related);
    } else {;
      // Post not found;
      navigate("/blog", { replace: true });
    }
    // Scroll to top when post changes;
    window && window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!post) {;    return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <AppLayout>
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </AppLayout>
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
=======
=======
  };

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;
    );
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
  // Helper function to get share URL;
  const getShareUrl = (platform: string) => {;
    const url = encodeURIComponent(window.location.href),;
    const title = encodeURIComponent(post.title),;
    switch (platform) {;
      case 'facebook':;
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`,;
      case 'twitter':;
        return `https://twitter.com/intent/tweet?url=${url}&text=${title}`,;
      case 'linkedin':;
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,;
      default: return '#';
    }
  },

  
  
  
=======
=======


  
            {/* Author and metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
              <div className="flex items-center mb-4 sm:mb-0">;
                <img
                  src={post && post.author.avatarUrl} 
                  alt={post && post.author.name} 

=======
                <img 
                  src={post.author.avatarUrl} 
                  alt={post.author.name} 


=======                      </a>
                      <a
                        href={getShareUrl('twitter')}
                        target="_blank"
=======                      </Link>
                      <a 
                        href={getShareUrl('twitter')} 
                        target="_blank" 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        <span>Twitter</span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                      </Link>
                      <a 
                        href={getShareUrl('linkedin')} 
                        target="_blank" 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span>LinkedIn</span>
                      </Link>
                    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;
              <div className="flex items-center mb-4 sm:mb-0">;
                <img;
                  src={post.author.avatarUrl} ;
                  alt={post.author.name} ;
                  className="w-12 h-12 rounded-full mr-3";
                  onError={(e) => {;
                    const target = e.target as HTMLImageElement,;
                    target.src = "https: //images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                />;
                <div>;
                  <p className="text-white font-medium">{post && post.author.name}</p>;
                  <p className="text-sm text-zion-slate-light">{post && post.author.title}</p>;
                </div>;
              </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <div className="flex items-center space-x-4">;
                <div className="flex items-center text-zion-slate-light">;
                  <Calendar className="h-4 w-4 mr-1" />;
                  <span className="text-sm">{post && post.publishedDate}</span>;
                </div>;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span className="text-sm">{post && post.readTime}</span>;
                </div>;
                <div className="relative">;
                  <Button
                    variant="ghost" 
                    size="sm"
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark"
                  {showShareMenu && (;
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">;
                      <a
                        href={getShareUrl('facebook')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                        <Facebook className="h-4 w-4 mr-2" />;
                        <span>Facebook</span>;
                      </a>;
                      <a
                        href={getShareUrl('twitter')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                        <Twitter className="h-4 w-4 mr-2" />;
                        <span>Twitter</span>;
                      </a>;
                      <a
                        href={getShareUrl('linkedin')} 
                        target="_blank"                         rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;

                  )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-lg overflow-hidden">
              <img
          {/* Featured image */}
          <div className="mb-12 max-w-5xl mx-auto">;
            <div className="aspect-[21/9] rounded-lg overflow-hidden">;
              <img
=======                src={post && post.featuredImage} 
                alt={post && post.title}

                className="object-cover w-full h-full"=======
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="object-cover w-full h-full"
                onError={(e) => {

                            const target = e.target as HTMLImageElement,

                            const target = e.target as HTMLImageElement;

                            const target = e.target as HTMLImageElement,
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
            </div>
            <Separator className="my-12 bg-zion-blue-light" />
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
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
                            const target = e.target as HTMLImageElement;

                            const target = e.target as HTMLImageElement,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                            target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>
=======            </div>;

            <Separator className="my-12 bg-zion-blue-light" />;


                  ))}
                </div>;
              </div>;
            )}



            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                asChild>;

    </AppLayout>);
}

=======
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </AppLayout>);
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

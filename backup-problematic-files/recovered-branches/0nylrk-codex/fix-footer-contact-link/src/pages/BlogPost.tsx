
import { useState, useEffect } from "react",;
import { useParams, Link, useNavigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",;
import type { BlogPost as BlogPostType } from "@/types/blog",;
import { Separator } from "@/components/ui/separator",;
import { AppLayout } from "@/layout/AppLayout",;
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
  ;
  useEffect(() => {;
    // Find the current post by slug;
    const currentPost = BLOG_POSTS.find(p => p.slug === slug),;
    ;
    if (currentPost) {;
      setPost(currentPost),;
      ;
      // Find related posts (same category, excluding current post);
      const related = BLOG_POSTS.filter(p => ;
        p.id !== currentPost.id && ;
        (p.category === currentPost.category || ;
         p.tags.some(tag => currentPost.tags.includes(tag)));
      ).slice(0, 3),;
      ;
      setRelatedPosts(related),;
    } else {;
      // Post not found;
      navigate("/blog", { replace:true }),;
    }
    ;
    // Scroll to top when post changes;
    window.scrollTo(0, 0),;
  }, [slug, navigate]),;
  ;
  if (!post) {;
    return (;
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;

      />;
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">;
        <div className="container mx-auto">;
          {/* Back to blog button */}
          <div className="mb-8">;

              <Link to="/blog">;
                <ArrowLeft className="mr-2 h-4 w-4" />;
                Back to all articles;
              </Link>;
            </Button>;
          </div>;

                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >;
                    <Share2 className="h-4 w-4 mr-1" />;
                    <span className="text-sm">Share</span>;
                  </Button>;

                </div>;
              </div>;
            </div>;
          </div>;

                }}
              />;
            </div>;
          </div>;

                          }}
                        />;
                      </div>;
                      <div className="p-4">;

                </div>;
              </div>;
            )}
            ;
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;

                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;

}
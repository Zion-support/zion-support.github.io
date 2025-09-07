import { useState, useEffect } from "react",
import { useParams, Link, useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react",
import type { BlogPost as BlogPostType } from "@/types/blog",
import { Separator } from "@/components/ui/separator";
import { AppLayout } from "@/layout/AppLayout";
// Importing the sample blog posts - in a real app, you would fetch this from an API
import { BLOG_POSTS } from "@/data/blog-posts";
export default function BlogPost() {
  const { slug } = useParams() as { slug: string},
  const navigate = useNavigate($2);
  const [post, setPost] = useState<BlogPostType | null>(null),
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]),
  const [showShareMenu, setShowShareMenu] = useState($2);
  useEffect(() => {
    // Find the current post by slug
    const currentPost = BLOG_POSTS.find($2);
    if (currentPost) {
      setPost($2);
      // Find related posts (same category, excluding current post)
      const related = BLOG_POSTS.filter(p =>
        p.id !== currentPost.id &&
        (p.category === currentPost.category |
         p.tags.some(tag => currentPost.tags.includes(tag)))
      ).slice($2);
      setRelatedPosts(related)
    } else {
      // Post not found
      navigate("/blog", { replace: true})
    }
    // Scroll to top when post changes
    window.scrollTo(0, 0)
  }, [slug, navigate]),
  
  if (!post) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </AppLayout>
    )
  }
  // Helper function to get share URL
  const getShareUrl = (platform: string) => {
    const url = encodeURIComponent($2);
    const title = encodeURIComponent($2);
    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u = $2;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url = $2;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini = $2;
      default: return '#'
    }
  },
  
  return (
    <AppLayout>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        ogImage = $2;
                    target.src = $2;
                  target.src = $2;
                            target.src = "https: //images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zion-cyan">{relatedPost.category}</span>
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
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
  )
}

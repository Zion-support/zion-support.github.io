
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
</BlogPostType>
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
</BlogPostType>
      <AppLayout>
</AppLayout>"
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">"
</div>"
          <div className="animate-pulse">Loading article...</div>"
        </div>
      </AppLayout>
    <AppLayout>
</AppLayout>
      <SEO;
        title={post.title}
        description={post.excerpt}"
        keywords={post.tags.join(", ")}"
        ogImage={post.featuredImage}
        canonical={`https://app.ziontechgroup.com/blog/${post.slug}`}
      />
</SEO>"
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">"
</div>"
        <div className="container mx-auto">"
</div>"
          <div className="mb-8">"
</div>
            <Button;"
              variant="outline"""
              className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white""
              asChild;
            >
</Button>"
              <Link to="/blog">"
</Link>"
                <ArrowLeft className="mr-2 h-4 w-4" />"
</ArrowLeft>
              </Link>
            </Button>
          </div>"
          <div className="mb-8 max-w-4xl mx-auto">"
</div>"
            <span className="text-sm text-zion-cyan bg-zion-blue-dark px-3 py-1 rounded-full inline-block mb-4">"
</span>
            </span>"
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">"
</h1>
            </h1>"
            <p className="text-xl text-zion-slate-light mb-8">{post.excerpt}</p>""
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">"
</div>"
              <div className="flex items-center mb-4 sm:mb-0">"
</div>
                <img;
                  src={post.author.avatarUrl}
                  alt={post.author.name}"
                  className="w-12 h-12 rounded-full mr-3""
                  onError={(e) => {
</img>
                <div>
</div>"
                  <p className="text-white font-medium">{post.author.name}</p>""
                  <p className="text-sm text-zion-slate-light">"
</p>
                  </p>
                </div>
              </div>
"
              <div className="flex items-center space-x-4">"
</div>"
                <div className="flex items-center text-zion-slate-light">"
</div>"
                  <Calendar className="h-4 w-4 mr-1" />"
</Calendar>"
                  <span className="text-sm">{post.publishedDate}</span>"
                </div>"
                <div className="flex items-center text-zion-slate-light">"
</div>"
                  <Clock className="h-4 w-4 mr-1" />"
</Clock>"
                  <span className="text-sm">{post.readTime}</span>"
                </div>"
                <div className="relative">"
</div>
                  <Button;"
                    variant="ghost"""
                    size="sm"""
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark""
                    onClick={() => setShowShareMenu(!showShareMenu)}
</Button>"
                    <Share2 className="h-4 w-4 mr-1" />"
</Share2>"
                    <span className="text-sm">Share</span>"
                  </Button>"
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">"
</div>
                      <a;"
                        href={getShareUrl("facebook")}""
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white""
                      >
</a>"
                        <Facebook className="h-4 w-4 mr-2" />"
</Facebook>
                        <span>Facebook</span>
                      </a>
                      <a;"
                        href={getShareUrl("twitter")}""
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white""
                      >
</a>"
                        <Twitter className="h-4 w-4 mr-2" />"
</Twitter>
                        <span>Twitter</span>
                      </a>
                      <a;"
                        href={getShareUrl("linkedin")}""
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white""
                      >
</a>"
                        <Linkedin className="h-4 w-4 mr-2" />"
</Linkedin>
                        <span>LinkedIn</span>
                      </Link>
                    </div>
"
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">;"
</div>"
              <div className="flex items-center mb-4 sm:mb-0">;"
</div>
                <img;
                  src={post.author.avatarUrl} ;
                  alt={post.author.name} ;"
                  className="w-12 h-12 rounded-full mr-3";"
                  onError={(e) => {;
</img>
                <div>;
</div>"
                  <p className="text-white font-medium">{post && post.author.name}</p>;""
                  <p className="text-sm text-zion-slate-light">{post && post.author.title}</p>;"
                </div>;
              </div>;"
              <div className="flex items-center space-x-4">;"
</div>"
                <div className="flex items-center text-zion-slate-light">;"
</div>"
                  <Calendar className="h-4 w-4 mr-1" />;"
</Calendar>"
                  <span className="text-sm">{post && post.publishedDate}</span>;"
                </div>;"
                <div className="flex items-center text-zion-slate-light">;"
</div>"
                  <Clock className="h-4 w-4 mr-1" />;"
</Clock>"
                  <span className="text-sm">{post && post.readTime}</span>;"
                </div>;"
                <div className="relative">;"
</div>
                  <Button;"
                    variant="ghost"""
                    size="sm"""
                    className="text-zion-slate-light hover:text-white hover:bg-zion-blue-dark""
                    onClick={() => setShowShareMenu(!showShareMenu)}
</Button>"
                    <Share2 className="h-4 w-4 mr-1" />;"
</Share2>"
                    <span className="text-sm">Share</span>;"
                  </Button>;"
                    <div className="absolute right-0 top-full mt-2 bg-zion-blue-dark border border-zion-blue-light rounded-md p-2 z-10">;"
</div>
                      <a;"
                        href={getShareUrl('facebook')}''
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;"
</a>"
                        <Facebook className="h-4 w-4 mr-2" />;"
</Facebook>
                        <span>Facebook</span>;
                      </a>;
                      <a;"
                        href={getShareUrl('twitter')} ;''
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white";"
                      >;
</a>"
                        <Twitter className="h-4 w-4 mr-2" />;"
</Twitter>
                        <span>Twitter</span>;
                      </a>;
                      <a;"
                        href={getShareUrl('linkedin')}''
                        target="_blank"""
                        rel="noopener noreferrer"""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;"
</a>
                      <a;"
                        href={getShareUrl('linkedin')} ;''
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white";"
                      >;
</a>"
                        <Linkedin className="h-4 w-4 mr-2" />;"
</Linkedin>
                        <span>LinkedIn</span>;
                      </a>;
                    </div>;
                </div>
              </div>
            </div>
          </div>"
          <div className="mb-12 max-w-5xl mx-auto">"
</div>"
            <div className="aspect-[21/9] rounded-lg overflow-hidden">"
</div>
              <img;
                src={post.featuredImage}
                alt={post.title}"
                className="object-cover w-full h-full""
                onError={(e) => {
</img>
            </div>
          </div>"
          <div className="max-w-4xl mx-auto">"
</div>
            <div;"
              className="prose prose-lg prose-invert max-w-none""
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
</div>"
            <div className="flex flex-wrap gap-2 mt-12">"
</div>
                <span;
                  key={tag}"
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full""
                >
</span>
                </span>;
            </div>
"
            <Separator className="my-12 bg-zion-blue-light" />"
</Separator>"
              <div className="mt-12">"
</div>"
                <h3 className="text-2xl font-bold text-white mb-6">"
</h3>
                </h3>"
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">"
</div>
                    <Link;
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300""
                    >
</Link>"
                      <div className="aspect-[16/9] relative">"
</div>
                        <img;
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}"
                          className="object-cover w-full h-full""
                          onError={(e) => {
</img>
                      </div>"
                      <div className="p-4">"
</div>"
                        <span className="text-xs text-zion-cyan">"
</span>
                        </span>"
                        <h4 className="text-white font-bold mt-1 line-clamp-2">"
</h4>
                        </h4>
                      </div>
                    </Link>


            </div>;"
            <Separator className="my-12 bg-zion-blue-light" />;"
</Separator>"
              <div className="mt-12">;"
</div>"
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;""
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
</div>
                    <Link;
                      key={relatedPost && relatedPost.id}
                      to={`/blog/${relatedPost && relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300">;"
</Link>"
                      <div className="aspect-[16/9] relative">;"
</div>
                        <img;
                          src={relatedPost && relatedPost.featuredImage} 
                          alt={relatedPost && relatedPost.title}"
                          className="object-cover w-full h-full""
                          onError={(e) => {;
</img>"
          <div className="max-w-4xl mx-auto">;"
</div>
            <div ;"
              className="prose prose-lg prose-invert max-w-none";"
              dangerouslySetInnerHTML={{ __html:post.content }}
            />;
</div>"
            <div className="flex flex-wrap gap-2 mt-12">;"
</div>
                <span ;
                  key={tag} ;"
                  className="text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full";"
                >;                  #{tag}
</span>
                </span>;
            </div>;"
            <Separator className="my-12 bg-zion-blue-light" />;"
</Separator>
            </div>;"
            <Separator className="my-12 bg-zion-blue-light" />;"
</Separator>"
              <div className="mt-12">;"
</div>"
                <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>;""
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;"
</div>
                    <Link;
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}"
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden hover:border-zion-purple transition-all duration-300";"
                    >;
</Link>"
                      <div className="aspect-[16/9] relative">;"
</div>
                        <img;
                          src={relatedPost.featuredImage} ;
                          alt={relatedPost.title}"
                          className="object-cover w-full h-full";"
                          onError={(e) => {;
</img>
                </span>;
                      </div>;"
                      <div className="p-4">;"
</div>"
                        <span className="text-xs text-zion-cyan">{relatedPost && relatedPost.category}</span>;""
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost && relatedPost.title}</h4>;"
                      </div>;
                    </Link>;
                </div>;
              </div>;"
            <div className="flex justify-between items-center mt-12">;"
</div>
              <Button;"
                variant="outline"""
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white""
                asChild;
              >
</Button>"
                <Link to="/blog">"
</Link>"
                  <ChevronLeft className="mr-2 h-4 w-4" />"
</ChevronLeft>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
      <AppLayout>;
</AppLayout>"
        <div className="min - h-screen bg - zion - blue text - white p - 8 flex justify - center items - center">;"
</div>"
          <div className="animate - pulse">Loading article...</div>;"
        </div>;
      </AppLayout>);
    <AppLayout>;
</AppLayout>
      <SEO;
        title={post.title}
        description={post.excerpt}"
        keywords={post.tags.join (", ")}"
        og_image={post.featured_image}
        canonical={`https://app.ziontechgroup.com / blog/${post.slug}`}
      />;
</SEO>"
      <div className="min - h-screen bg - zion - blue pt - 12 pb - 20 px - 4">;"
</div>"
        <div className="container mx - auto">;"
</div>"
          <div className="mb - 8">;"
</div>
            <Button;"
              variant="outline";""
              className="border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white";"
              as_child;
            >;
</Button>"
              <Link to="/blog">;"
</Link>"
                <ArrowLeft className="mr - 2 h - 4 w - 4" />;"
</ArrowLeft>
              </Link>;
            </Button>;
          </div>;"
          <div className="mb - 8 max - w-4xl mx - auto">;"
</div>"
            <span className="text - sm text - zion - cyan bg - zion - blue - dark px - 3 py - 1 rounded - full inline - block mb - 4">;"
</span>
            </span>;"
            <h1 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;"
</h1>
            </h1>;"
            <p className="text - xl text - zion - slate - light mb - 8">;"
</p>
            </p>;"
            <div className="flex flex - col sm:flex - row sm:items - center justify - between mb - 8">;"
</div>"
              <div className="flex items - center mb - 4 sm:mb - 0">;"
</div>
                <img;
                  src={post.author.avatar_url}
                  alt={post.author.name}"
                  className="w - 12 h - 12 rounded - full mr - 3";"
                  on_error={(e) => {
</img>
                <div>;
</div>"
                  <p className="text - white font - medium">{post.author.name}</p>;""
                  <p className="text - sm text - zion - slate - light">{post.author.title}</p>;"
                </div>;
              </div>;"
              <div className="flex items - center space - x-4">;"
</div>"
                <div className="flex items - center text - zion - slate - light">;"
</div>"
                  <Calendar className="h - 4 w - 4 mr - 1" />;"
</Calendar>"
                  <span className="text - sm">{post.published_date}</span>;"
                </div>;"
                <div className="flex items - center text - zion - slate - light">;"
</div>"
                  <Clock className="h - 4 w - 4 mr - 1" />;"
</Clock>"
                  <span className="text - sm">{post.read_time}</span>;"
                </div>;"
                <div className="relative">;"
</div>
                  <Button;"
                    variant="ghost";""
                    size="sm";""
                    className="text - zion - slate - light hover:text - white hover:bg - zion - blue - dark";"
                    on_click={() => setShowShareMenu (!showShareMenu)}
</Button>"
                    <Share2 className="h - 4 w - 4 mr - 1" />;"
</Share2>"
                    <span className="text - sm">Share</span>;"
                  </Button>;"
                    <div className="absolute right - 0 top - full mt - 2 bg - zion - blue - dark border border - zion - blue - light rounded - md p - 2 z - 10">;"
</div>
                      <a;"
                        href={getShareUrl ('facebook')}''
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";"
                      >;
</a>"
                        <Facebook className="h - 4 w - 4 mr - 2" />;"
</Facebook>
                        <span > Facebook</span>;
                      </a>;
                      <a;"
                        href={getShareUrl ('twitter')}''
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";"
                      >;
</a>"
                        <Twitter className="h - 4 w - 4 mr - 2" />;"
</Twitter>
                        <span > Twitter</span>;
                      </a>;
                      <a;"
                        href={getShareUrl ('linkedin')}''
                        target="_blank";""
                        rel="noopener noreferrer";""
                        className="flex items - center p - 2 hover:bg - zion - blue rounded transition - colors text - zion - slate - light hover:text - white";"
                      >;
</a>"
                        <Linkedin className="h - 4 w - 4 mr - 2" />;"
</Linkedin>
                        <span > LinkedIn</span>;
                      </a>;
                    </div>)}
                </div>;
              </div>;
            </div>;
          </div>;"
          <div className="mb - 12 max - w-5xl mx - auto">;"
</div>"
            <div className="aspect-[21 / 9] rounded - lg overflow - hidden">;"
</div>
              <img;
                src={post.featured_image}
                alt={post.title}"
                className="object - cover w - full h - full";"
                on_error={(e) => {
</img>
            </div>;
          </div>;"
          <div className="max - w-4xl mx - auto">;"
</div>
            <div;"
              className="prose prose - lg prose - invert max - w-none";"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />;
</div>"
            <div className="flex flex - wrap gap - 2 mt - 12">;"
</div>
                <span;
                  key={tag}"
                  className="text - xs text - zion - slate - light bg - zion - blue - dark px - 3 py - 1 rounded - full";"
                >;
</span>
                </span>))}
            </div>;"
            <Separator className="my - 12 bg - zion - blue - light" />;"
</Separator>"
              <div className="mt - 12">;"
</div>"
                <h3 className="text - 2xl font - bold text - white mb - 6">Related Articles</h3>;""
                <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6">;"
</div>
                    <Link;
                      key={related_post.id}
                      to={`/blog/${related_post.slug}`}"
                      className="bg - zion - blue - dark border border - zion - blue - light rounded - lg overflow - hidden hover:border - zion - purple transition - all duration - 300";"
                    >;
</Link>"
                      <div className="aspect-[16 / 9] relative">;"
</div>
                        <img;
                          src={related_post.featured_image}
                          alt={related_post.title}"
                          className="object - cover w - full h - full";"
                          on_error={(e) => {
</img>
                      </div>;"
                      <div className="p - 4">;"
</div>"
                        <span className="text - xs text - zion - cyan">{related_post.category}</span>;""
                        <h4 className="text - white font - bold mt - 1 line - clamp - 2">{related_post.title}</h4>;"
                      </div>;
                    </Link>))}
                </div>;
              </div>)}"
            <div className="flex justify - between items - center mt - 12">;"
</div>
              <Button;"
                variant="outline";""
                className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";"
                as_child;
              >;
</Button>"
                <Link to="/blog">;"
</Link>"
                  <ChevronLeft className="mr - 2 h - 4 w - 4" />;"
</ChevronLeft>
              <Button;"
                variant="outline";""
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";"
                asChild;
              >;
</Button>"
                <Link to="/blog">;"
</Link>"
                  <ChevronLeft className="mr-2 h-4 w-4" />;"
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
const [post, setPost] = useState<BlogPostType | null> (null);
</BlogPostType>
const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]> ([]);
</BlogPostType>"
  return (<AppLayout> <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center" > <div className="animate-pulse" >Loading article...</div> </div> </AppLayout> switch (platform) {""
return (<AppLayout> <SEO <Button variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild > <Link to="/blog" > <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles </Link> </Button> </div>"
</AppLayout>"
}/> <div> <p className="text-white font-medium" > {"
</div>"
}</p> <p className="text-sm text-zion-slate-light" > {"
</p>"
}</p> </div> </div> <div className="flex items-center space-x-4" > <div className="flex items-center text-zion-slate-light" > <Calendar className="h-4 w-4 mr-1" /> <span className="text-sm" > {"
</div>"
}</span> </div> <div className="flex items-center text-zion-slate-light" > <Clock className="h-4 w-4 mr-1" /> <span className="text-sm" > {"
</div>"
}</span> relative"> <Button > <Share2 className=" h-4 w-4 mr-1"/> <span className=" text-sm">Share</span> </Button> <a href= {")"
  getShareUrl ('facebook')''
}target=" blank"rel=" noopener noreferrer"className=" flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"> <Facebook className=" h-4 w-4 mr-2"/> <span>Facebook</span> </Link> <a > <Twitter className=" h-4 w-4 mr-2"/> <span>Twitter</span> </Link> <a > <Linkedin className=" h-4 w-4 mr-2"/> <span>LinkedIn</span> </Link> </div>)"
</Facebook>
}</div> </div> </div> </div> 
}</span>) ) "
}</div> <Separator className=" my-12 bg-zion-blue-light"/> > <div className=" aspect-[16/9] relative"> <img;"
</Separator>"
}/> </div> <div className=" p-4"> <span className=" text-xs text-zion-cyan"> {"
</div>"
}</span> <h4 className=" text-white font-bold mt-1 line-clamp-2"> {"
</h4>
}</h4> 
}</div> </div>) "
}<Button asChild > <Link to=" /blog"> <ChevronLeft className=" mr-2 h-4 w-4" /> All Articles </Link> </Button> </div> </div> </div> </div> </AppLayout>)"
    </AppLayout>;"


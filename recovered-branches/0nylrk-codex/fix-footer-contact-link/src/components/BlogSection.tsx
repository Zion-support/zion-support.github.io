
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { Card, CardContent, CardFooter } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;./ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { BLOG_POSTS } from &quot;@/data/blog-posts&quot;;

// Get the 3 most recent blog posts
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3);

export function BlogSection() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot; id=&quot;blog&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center mb-12&quot;>
          <div>
            <GradientHeading>Latest Insights</GradientHeading>
            <p className=&quot;mt-2 text-zion-slate-light text-xl max-w-2xl&quot;>
              Stay updated with trends in AI technology, marketplace strategies, and IT services
            </p>
          </div>
          <Button 
            variant=&quot;outline&quot; 
            className=&quot;mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10&quot;
            asChild
          >
            <Link to=&quot;/blog&quot;>View All Articles</Link>
          </Button>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {recentPosts.map((post, index) => (
            <Card key={post.id} className=&quot;bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden&quot;>
              <div className=&quot;h-48 bg-zion-blue-dark relative overflow-hidden&quot;>
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className=&quot;object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300&quot;
                  loading=&quot;lazy&quot;
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src =
                      &quot;https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&quot;;
                  }}
                />
                <div className=&quot;absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold&quot;>{index + 1}</div>
              </div>
              <CardContent className=&quot;p-6&quot;>
                <div className=&quot;flex items-center justify-between mb-3&quot;>
                  <span className=&quot;text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded&quot;>{post.category}</span>
                  <div className=&quot;text-xs text-zion-slate-light&quot;>{post.publishedDate} • {post.readTime}</div>
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{post.title}</h3>
                <p className=&quot;text-zion-slate-light line-clamp-2&quot;>{post.excerpt}</p>
              </CardContent>
              <CardFooter className=&quot;p-6 pt-0&quot;>
                <Button 
                  variant=&quot;link&quot; 
                  className=&quot;text-zion-cyan p-0 hover:text-zion-purple&quot;
                  asChild
                >
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

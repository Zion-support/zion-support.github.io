
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";




const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {





                    target.src =




    <section className="py-20 bg-zion-blue-dark" id="blog">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">;
          <div>;
            <GradientHeading>Latest Insights</GradientHeading>;
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">;

              Stay updated with trends in AI technology, marketplace strategies,;
              and IT services;
            </p>;
          </div>;
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            asChild>;
            <Link to="/blog">View All Articles</Link>;
          </Button>;
        </div>;

import { Button } from "./ui/button",;"
import { Link } from "react-router-dom",;"
import { BLOG_POSTS } from "@/data/blog-posts",;
;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {;



                    e: React && React.SyntheticEvent<HTMLImageElement, Event>,;
                  ) => {;
                    const target = e && e.currentTarget as HTMLImageElement;
                    target && target.src =;
                      "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";



                  }}
                />;
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">;
                  {index + 1}
                </div>;
              </div>;
              <CardContent className="p-6">;
                <div className="flex items-center justify-between mb-3">;
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">;
                    {post && post.category}
                  </span>;
                  <div className="text-xs text-zion-slate-light">;
                    {post && post.publishedDate} • {post && post.readTime}
                  </div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">;
                  {post && post.title}
                </h3>;
                <p className="text-zion-slate-light line-clamp-2">;
                  {post && post.excerpt}
                </p>;
              </CardContent>;
              <CardFooter className="p-6 pt-0">;
                <Button
                  variant="link"
                  className="text-zion-cyan p-0 hover:text-zion-purple"
                  asChild>;
                  <Link to={`/blog/${post && post.slug}`}>Read More →</Link>;


                </Button>;


  );







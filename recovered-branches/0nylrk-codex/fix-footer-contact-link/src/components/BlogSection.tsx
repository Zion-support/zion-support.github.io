<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";


<<<<<<< HEAD
=======

=======

import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts

const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS];
  .sort((a, b) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return (
      new Date(b && b.publishedDate).getTime() - new Date(a && a.publishedDate).getTime();
    );
  });
  .slice(0, 3);

<<<<<<< HEAD

=======
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  })
  .slice(0, 3);
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export function BlogSection() {
  return (
    <section className="py-20 bg-zion-blue-dark" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <GradientHeading>Latest Insights</GradientHeading>
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">
              Stay updated with trends in AI technology, marketplace strategies
              and IT services
            </p>
          </div>
          <Button
            variant="outline"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { GradientHeading } from "./GradientHeading",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "./ui/button",
import { Link } from "react-router-dom",
import { BLOG_POSTS } from "@/data/blog-posts",
// Get the 3 most recent blog posts
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
}).slice(0, 3),

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            asChild
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300"
                  loading="lazy"
<<<<<<< HEAD
<<<<<<< HEAD

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

=======
=======
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

                  onError={(
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget as HTMLImageElement;

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    target.src =
                      "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  }}
                />
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{post.category}</span>
                  <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-zion-slate-light line-clamp-2">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="link"
                  className="text-zion-cyan p-0 hover:text-zion-purple"
                  asChild
                >
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardFooter>
            </Card>
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { GradientHeading } from "./GradientHeading",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "./ui/button",;
import { Link } from "react-router-dom",;
import { BLOG_POSTS } from "@/data/blog-posts",;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {;
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function BlogSection() {;
  return (
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function BlogSection() {;
  return (

import { GradientHeading } from "./GradientHeading",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "./ui/button",;
import { Link } from "react-router-dom",;
import { BLOG_POSTS } from "@/data/blog-posts",;
;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {;
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),;
}).slice(0, 3),;
;
export function BlogSection() {;
  return (;
export function BlogSection() {;
  return (;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <section className="py-20 bg-zion-blue-dark" id="blog">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">;
          <div>;
            <GradientHeading>Latest Insights</GradientHeading>;
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">;
<<<<<<< HEAD
<<<<<<< HEAD
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {recentPosts && recentPosts.map((post, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Card
              key={post && post.id}
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;
                <img
                  src={post && post.featuredImage}
                  alt={post && post.title}
                  className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                  onError={(
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                    e: React && React.SyntheticEvent<HTMLImageElement, Event>,;
                  ) => {;
                    const target = e && e.currentTarget as HTMLImageElement;
                    target && target.src =;
                      "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
                  <Link to={`/blog/${post && post.slug}`}>Read More →</Link>;
<<<<<<< HEAD
=======
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
            </p>;
          </div>;
          <Button ;
            variant="outline" ;
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </p>;
          </div>;
          <Button;
            variant="outline";
<<<<<<< HEAD
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
            asChild;
          >;
            <Link to="/blog">View All Articles</Link>;
          </Button>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {recentPosts.map((post, index) => (;
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;
                <img;
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300";
                  loading="lazy";
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {;
                    const target = e.currentTarget as HTMLImageElement;
                    target.src =;
                      "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3";
                  }}
                />;
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>;
              </div>;
              <CardContent className="p-6">;
                <div className="flex items-center justify-between mb-3">;
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{post.category}</span>;
                  <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>;
                <p className="text-zion-slate-light line-clamp-2">{post.excerpt}</p>;
              </CardContent>;
              <CardFooter className="p-6 pt-0">;
                <Button;
                  variant="link";
                  className="text-zion-cyan p-0 hover:text-zion-purple";
                  asChild;
                >;
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { GradientHeading  } from './GradientHeading';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { Button  } from './ui / button';
import { Link  } from './react-router-dom';
import { BLOG_POSTS  } from '@/data / blog - posts';
// Get the 3 most recent blog posts;
const recent_posts = [...BLOG_POSTS];
  .sort ((a, b) => {
    return (
      new Date (b.published_date).get_time () - new Date (a.published_date).get_time ());
  });
  .slice (0, 3);
;
export /**
 * BlogSection - Function description
 */
function BlogSection() {
  return (
    <section className="py - 20 bg - zion - blue - dark" id="blog">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 12">;
          <div>;
            <GradientHeading > Latest Insights</GradientHeading>;
            <p className="mt - 2 text - zion - slate - light text - xl max - w-2xl">;
              Stay updated with trends in AI technology, marketplace strategies,
              and IT services;
            </p>;
          </div>;
          <Button;
            variant="outline";
            className="mt - 4 md:mt - 0 border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
            as_child;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >;
            <Link to="/blog">View All Articles</Link>;
          </Button>;
        </div>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {recent_posts.map ((post, index) => (
            <Card;
              key={post.id}
              className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300 overflow - hidden";
            >;
              <div className="h - 48 bg - zion - blue - dark relative overflow - hidden">;
                <img;
                  src={post.featured_image}
                  alt={post.title}
                  className="object - cover w - full h - full opacity - 60 hover:opacity - 80 transition - opacity duration - 300";
                  loading="lazy";
                  on_error={(
                    e: React.SyntheticEvent < HTMLImageElement, Event>,
                  ) => {
                    const target = e.current_target as HTMLImageElement;
                    target.src =;
                      "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                  }}
                />;
                <div className="absolute bottom - 4 left - 4 text - zion - purple / 70 text - 4xl font - bold">;
                  {index + 1}
                </div>;
              </div>;
              <CardContent className="p - 6">;
                <div className="flex items - center justify - between mb - 3">;
                  <span className="text - xs text - zion - cyan bg - zion - blue px - 2 py - 1 rounded">;
                    {post.category}
                  </span>;
                  <div className="text - xs text - zion - slate - light">;
                    {post.published_date} • {post.read_time}
                  </div>;
                </div>;
                <h3 className="text - xl font - bold text - white mb - 3">;
                  {post.title}
                </h3>;
                <p className="text - zion - slate - light line - clamp - 2">;
                  {post.excerpt}
                </p>;
              </CardContent>;
              <CardFooter className="p - 6 pt - 0">;
                <Button;
                  variant="link";
                  className="text - zion - cyan p - 0 hover:text - zion - purple";
                  as_child;
                >;
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);
<<<<<<< HEAD
<<<<<<< HEAD

}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;

  ),; }
}/> <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold" > {
  index + 1 
}</div> </div> <CardContent className="p-6" > <div className="flex items-center justify-between mb-3" > <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded" > {
  post.category 
}</span> <div className="text-xs text-zion-slate-light" > {
  post.publishedDate 
}• {
  post.readTime 
}</div> </div> <h3 className="text-xl font-bold text-white mb-3" > {
  post.title 
}</h3> <p className="text-zion-slate-light line-clamp-2" > {
  post.excerpt 
}</p> p-6 pt-0"> <Button variant=" link"className=" text-zion-cyan p-0 hover:text-zion-purple" asChild > <Link to= {
  `/blog/$ {
  post.slug 
}` 
}>Read More →</Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

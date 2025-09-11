
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";


<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { GradientHeading } from "./GradientHeading",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "./ui/button",
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts

const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  })
  .slice(0, 3);
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
<<<<<<< HEAD
=======
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
    return (
      new Date(b && b.publishedDate).getTime() - new Date(a && a.publishedDate).getTime();
    );
  });
  .slice(0, 3);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget as HTMLImageElement;

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
=======
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ))}
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function BlogSection() {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function BlogSection() {;
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <section className="py-20 bg-zion-blue-dark" id="blog">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">;
          <div>;
            <GradientHeading>Latest Insights</GradientHeading>;
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    e: React && React.SyntheticEvent<HTMLImageElement, Event>,;
                  ) => {;
                    const target = e && e.currentTarget as HTMLImageElement;
                    target && target.src =;
                      "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
            </p>;
          </div>;
          <Button ;
            variant="outline" ;
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
            </p>;
          </div>;
          <Button;
            variant="outline";
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
;

<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

}
=======
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

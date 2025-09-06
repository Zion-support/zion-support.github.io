<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx

<<<<<<< HEAD
=======

import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import { GradientHeading } from "./GradientHeading",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "./ui/button",
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts

const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
  })
  .slice(0, 3);
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
import React from 'react';
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS];
  .sort((a, b) => {;
    return (
      new Date(b && b.publishedDate).getTime() - new Date(a && a.publishedDate).getTime();
    );
  });
  .slice(0, 3);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            asChild
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300"
                  loading="lazy"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

=======
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget as HTMLImageElement;

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          ))}
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
export function BlogSection() {;
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
export function BlogSection() {;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
                    e: React && React.SyntheticEvent<HTMLImageElement, Event>,;
                  ) => {;
                    const target = e && e.currentTarget as HTMLImageElement;
                    target && target.src =;
                      "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
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
=======
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
            </p>;
          </div>;
          <Button ;
            variant="outline" ;
=======
              Stay updated with trends in AI technology, marketplace strategies, and IT services;
            </p>;
          </div>;
          <Button;
            variant="outline";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10";
            asChild;
          >;
            <Link to="/blog">View All Articles</Link>;
          </Button>;
        </div>;
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {recentPosts.map((post, index) => (;
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;
<<<<<<< HEAD
                <img ;
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300";
                  loading="lazy";
                  onError={(e:React.SyntheticEvent<HTMLImageElement Event>) => {;
                    const target = e.currentTarget as HTMLImageElement,;
=======
                <img;
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300";
                  loading="lazy";
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {;
                    const target = e.currentTarget as HTMLImageElement;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                <Button ;
                  variant="link" ;
=======
                <Button;
                  variant="link";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className="text-zion-cyan p-0 hover:text-zion-purple";
                  asChild;
                >;
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx

}
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/BlogSection.tsx
=======
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

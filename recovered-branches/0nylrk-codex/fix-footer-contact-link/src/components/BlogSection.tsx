
    return (

import { GradientHeading } from "./GradientHeading";""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { Button } from "./ui/button";""
import { Link } from "react-router-dom";""
import { BLOG_POSTS } from "@/data/blog-posts";"
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {
    return ()
pr-12325
      new Date(b && b.publishedDate).getTime() - new Date(a && a.publishedDate).getTime();
    );
  });
  .slice(0, 3);

            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            asChild
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget as HTMLImageElement;

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,import { GradientHeading } from "./GradientHeading",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "./ui/button",;
import { Link } from "react-router-dom",;
import { BLOG_POSTS } from "@/data/blog-posts",;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {;
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3),;
export function BlogSection() {;
  return (export function BlogSection() {;
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
  return (;              key={post && post.id}
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;
                <img
                  src={post && post.featuredImage}
                  alt={post && post.title}
                  className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300"
                  loading="lazy"
                  onError={(                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  );
            </p>;
          </div>;
          <Button;
            variant="outline";}

"
import { GradientHeading } from "./GradientHeading",""
import { Card, CardContent, CardFooter } from "@/components/ui/card",""
import { Button } from "./ui/button",""
import { Link } from "react-router-dom",""
import { BLOG_POSTS } from "@/data/blog-posts","
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
}).slice(0, 3),


            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10""
            asChild;
          >"
            <Link to="/blog">View All Articles"
          
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">"
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">"
</div>
                <img;
                  src={post.featuredImage}
                  alt={post.title}"
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300"""
                  loading="lazy""
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
</img>
                    e: React.SyntheticEvent<HTMLImageElement, Event>


                    e: React.SyntheticEvent<HTMLImageElement, Event>,



                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>"
              <CardContent className="p-6">"
                <div className="flex items-center justify-between mb-3">"
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{post.category}</span>""
                  <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>"
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>""
                <p className="text-zion-slate-light line-clamp-2">{post.excerpt}</p>"
              <CardFooter className="p-6 pt-0">"

                <Button;"
                  variant="link"""
                  className="text-zion-cyan p-0 hover:text-zion-purple""
                >

                  <Link to={`/blog/${post.slug}`}>Read More →
                
              
    <section className="py-20 bg-zion-blue-dark" id="blog">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">;"
          <div>;
            <GradientHeading>Latest Insights;"
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">;"
</p>
            </p>;
          </div>;
            variant="outline"""
            asChild>;
            <Link to="/blog">View All Articles;"
          ;
        </div>;"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;"
            <Card;
              key={post && post.id}"
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;"
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;"
                  src={post && post.featuredImage}
                  alt={post && post.title}"
                  className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300"""
                  onError={(

                    e: React && React.SyntheticEvent<HTMLImageElement, Event>,;
</img>"
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">;"
              <CardContent className="p-6">;"
                <div className="flex items-center justify-between mb-3">;"
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">;"
</span>
                  </span>;"
                  <div className="text-xs text-zion-slate-light">;"
                <h3 className="text-xl font-bold text-white mb-3">;"
</h3>
                </h3>;"
                <p className="text-zion-slate-light line-clamp-2">;"
              ;"
              <CardFooter className="p-6 pt-0">;"

`;
                  <Link to={`/blog/${post && post.slug}`}>Read More →;
            variant="outline";""
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10";"
          >;
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;"
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300";""
                  loading="lazy";")
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {;
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>;"
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{post.category}</span>;""
                  <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>;"
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>;""
                <p className="text-zion-slate-light line-clamp-2">{post.excerpt}</p>;"

                  variant="link";""
                  className="text-zion-cyan p-0 hover:text-zion-purple";"
                  <Link to={`/blog/${post.slug}`}>Read More →;
    </section>;"
    <section className="py - 20 bg - zion - blue - dark" id="blog">;"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
        <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 12">;"
            <GradientHeading > Latest Insights;"
            <p className="mt - 2 text - zion - slate - light text - xl max - w-2xl">;"
            className="mt - 4 md:mt - 0 border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";"
            as_child;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;"
              key={post.id}"
              className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300 overflow - hidden";"
              <div className="h - 48 bg - zion - blue - dark relative overflow - hidden">;"
                  src={post.featured_image}
                  className="object - cover w - full h - full opacity - 60 hover:opacity - 80 transition - opacity duration - 300";""
                  loading="lazy";"
                  on_error={(
                    e: React.SyntheticEvent < HTMLImageElement, Event>,
                <div className="absolute bottom - 4 left - 4 text - zion - purple / 70 text - 4xl font - bold">;"
              <CardContent className="p - 6">;"
                <div className="flex items - center justify - between mb - 3">;"
                  <span className="text - xs text - zion - cyan bg - zion - blue px - 2 py - 1 rounded">;"
                  <div className="text - xs text - zion - slate - light">;"
                <h3 className="text - xl font - bold text - white mb - 3">;"
                <p className="text - zion - slate - light line - clamp - 2">;"
              <CardFooter className="p - 6 pt - 0">;"

                  className="text - zion - cyan p - 0 hover:text - zion - purple";"
              ;)
            ))}
    </section>);"
}/> <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold" > {"
}</div> </div> <CardContent className="p-6" > <div className="flex items-center justify-between mb-3" > <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded" > {"
}</span> <div className="text-xs text-zion-slate-light" > {"
}</div> </div> <h3 className="text-xl font-bold text-white mb-3" > {"
</h3>"
}</h3> <p className="text-zion-slate-light line-clamp-2" > {"
</p>"
}</p> p-6 pt-0"> <Button variant=" link"className=" text-zion-cyan p-0 hover:text-zion-purple" asChild > <Link to= {"

}>Read More →   ) ) 
}</div> </div> </section>) "`;
pr-12325

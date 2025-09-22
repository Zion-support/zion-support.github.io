
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";

import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import { Link } from "react-router-dom";"
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS];
  .sort((a, b) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blog-posts";
// Get the 3 most recent blog posts

const recentPosts = [...BLOG_POSTS]
  .sort((a, b) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      new Date(b && b.publishedDate).getTime() - new Date(a && a.publishedDate).getTime();
    );
  });
  .slice(0, 3);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
import { GradientHeading } from "./GradientHeading","
import { Card, CardContent, CardFooter } from "@/components/ui/card","
import { Button } from "./ui/button","
import { Link } from "react-router-dom","
import { BLOG_POSTS } from "@/data/blog-posts",;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {}
=======

import { GradientHeading } from "./GradientHeading",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Button } from "./ui/button",
import { Link } from "react-router-dom",
import { BLOG_POSTS } from "@/data/blog-posts",
// Get the 3 most recent blog posts
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
}).slice(0, 3),

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            asChild;
          >"
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">
=======

"
            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                <img;
                  src={post.featuredImage}
                  alt={post.title}"
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300""
                  loading="lazy"

onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

            <Card key={post.id} className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-60 hover: opacity-80 transition-opacity duration-300"
                  loading="lazy"

                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
                    const target = e.currentTarget as HTMLImageElement,

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {}
                    const target = e.currentTarget as HTMLImageElement;

onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {
<<<<<<< HEAD
<<<<<<< HEAD
                    const target = e.currentTarget as HTMLImageElement,

                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {}
                    const target = e.currentTarget as HTMLImageElement,

                    e: React.SyntheticEvent<HTMLImageElement, Event>,
                  ) => {;
                    const target = e.currentTarget as HTMLImageElement;
                  onError={(e: React.SyntheticEvent<HTMLImageElement Event>) => {}
                    const target = e.currentTarget as HTMLImageElement,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    target.src =
                      "https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  }}
                />"
                <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>
              </div>"
              <CardContent className="p-6">"
                <div className="flex items-center justify-between mb-3">"
                  <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded">{post.category}</span>"
                  <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>
                </div>"
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>"
                <p className="text-zion-slate-light line-clamp-2">{post.excerpt}</p>
              </CardContent>"
              <CardFooter className="p-6 pt-0">
<Button
                  variant="link"
                  className="text-zion-cyan p-0 hover:text-zion-purple"
                  asChild;
                >
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardFooter>
            </Card>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { GradientHeading } from "./GradientHeading",;
=======
                    const target = e.currentTarget as HTMLImageElement,import { GradientHeading } from "./GradientHeading",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    const target = e.currentTarget as HTMLImageElement,import { GradientHeading } from "./GradientHeading",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import { GradientHeading } from "./GradientHeading",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Button } from "./ui/button",;
import { Link } from "react-router-dom",;
=======

"
import { GradientHeading } from "./GradientHeading",;"
import { Card, CardContent, CardFooter } from "@/components/ui/card",;"
import { Button } from "./ui/button",;"
import { Link } from "react-router-dom",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { BLOG_POSTS } from "@/data/blog-posts",;
// Get the 3 most recent blog posts;
const recentPosts = [...BLOG_POSTS].sort((a, b) => {;
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3),;
export function BlogSection() {;
  return (
export function BlogSection() {;
  return (

export function BlogSection() { return null; }
import { GradientHeading } from "./GradientHeading",;"
import { Card, CardContent, CardFooter } from "@/components/ui/card",;"
import { Button } from "./ui/button",;"
import { Link } from "react-router-dom",;"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {recentPosts && recentPosts.map((post, index) => (;
            <Card
              key={post && post.id}
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden">;
              <div className="h-48 bg-zion-blue-dark relative overflow-hidden">;
                <img;
                  src={post && post.featuredImage}
                  alt={post && post.title}"
                  className="object-cover w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-300""
                  loading="lazy"
onError={(                </Button>;
              </CardFooter>;
            </Card>;
          ))}
        </div>;
      </div>;
    </section>;
  );

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
<<<<<<< HEAD
            variant="outline";
            className="mt - 4 md:mt - 0 border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
            as_child;

          >;"
            <Link to="/blog">View All Articles</Link>;
          </Button>;
        </div>;"
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {recent_posts.map ((post, index) => (
            <Card;
              key={post.id}"
              className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 50 transition - all duration - 300 overflow - hidden";
            >;"
              <div className="h - 48 bg - zion - blue - dark relative overflow - hidden">;
                <img;
                  src={post.featured_image}
                  alt={post.title}"
                  className="object - cover w - full h - full opacity - 60 hover:opacity - 80 transition - opacity duration - 300";"
                  loading="lazy";
                  on_error={(
                    e: React.SyntheticEvent < HTMLImageElement, Event>,
                  ) => {}
                    const target = e.current_target as HTMLImageElement;
                    target.src =;"
                      "https: //images.unsplash.com / photo - 1581089778245 - 3ce67677f718?auto = format & fit = crop & q=80 & w=2070 & ixlib = rb - 4.0.3";
                  }}
                />;"
                <div className="absolute bottom - 4 left - 4 text - zion - purple / 70 text - 4xl font - bold">;
                  {index + 1}
                </div>;
              </div>;"
              <CardContent className="p - 6">;"
                <div className="flex items - center justify - between mb - 3">;"
                  <span className="text - xs text - zion - cyan bg - zion - blue px - 2 py - 1 rounded">;
                    {post.category}
                  </span>;"
                  <div className="text - xs text - zion - slate - light">;
                    {post.published_date} • {post.read_time}
                  </div>;
                </div>;"
                <h3 className="text - xl font - bold text - white mb - 3">;
                  {post.title}
                </h3>;"
                <p className="text - zion - slate - light line - clamp - 2">;
                  {post.excerpt}
                </p>;
              </CardContent>;"
              <CardFooter className="p - 6 pt - 0">;
                <Button;"
                  variant="link";"
                  className="text - zion - cyan p - 0 hover:text - zion - purple";
                  as_child;
                >;`
                  <Link to={`/blog/${post.slug}`}>Read More →</Link>;
                </Button>;
              </CardFooter>;
            </Card>))}
        </div>;
      </div>;
    </section>);

}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;

  ),; }"
}/> <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold" > {}
  index + 1 "
}</div> </div> <CardContent className="p-6" > <div className="flex items-center justify-between mb-3" > <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded" > {}
  post.category "
}</span> <div className="text-xs text-zion-slate-light" > {}
  post.publishedDate;
}• {}
  post.readTime "
}</div> </div> <h3 className="text-xl font-bold text-white mb-3" > {}
  post.title "
}</h3> <p className="text-zion-slate-light line-clamp-2" > {}
  post.excerpt "
}</p> p-6 pt-0"> <Button variant=" link"className=" text-zion-cyan p-0 hover:text-zion-purple" asChild > <Link to= {}`
  `/blog/$ {}
  post.slug;`
}` 
}>Read More →</Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) 
}
  );
}
;
}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
</Button>
}>Read More →</Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) "

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
